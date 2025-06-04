import React, { useEffect, useState, useCallback } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Community from '@/components/Community';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [aboutImageStyle, setAboutImageStyle] = useState<React.CSSProperties>({
    opacity: 0,
    // The transform here will be controlled by the hero image animation completion
    // Or can be a default "entry" if the page loads past the animation point.
    // For now, opacity is the main concern.
    transition: 'opacity 0.4s ease-out',
  });

  const [heroImageRect, setHeroImageRect] = useState<DOMRect | null>(null);
  const [aboutImageContainerRect, setAboutImageContainerRect] = useState<DOMRect | null>(null);

  const calculateRects = useCallback(() => {
    const heroImageElement = document.getElementById('hero-profile-image');
    const aboutImageContainerElement = document.getElementById('about-image-container');

    if (heroImageElement && aboutImageContainerElement) {
      setHeroImageRect(heroImageElement.getBoundingClientRect());
      setAboutImageContainerRect(aboutImageContainerElement.getBoundingClientRect());

      // Set will-change on the hero image for performance
      heroImageElement.style.willChange = 'transform, opacity';
    }
  }, []);

  useEffect(() => {
    // Initial calculation of element positions
    requestAnimationFrame(calculateRects);

    // Intersection observer for general section animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    // Scroll handler for hero and about image transitions
    const handleScroll = () => {
      const heroProfileImageElement = document.getElementById('hero-profile-image');
      const aboutSectionElement = document.getElementById('about'); // For scroll trigger points

      if (!heroProfileImageElement || !aboutSectionElement || !heroImageRect || !aboutImageContainerRect) {
        // If rects are not yet calculated, or elements are missing, try to update aboutImageStyle based on old logic
        // This handles cases where the new animation isn't ready or applicable
        const aboutImageContainerElement = document.getElementById('about-image-container');
        if (aboutImageContainerElement) {
            const aboutRect = aboutImageContainerElement.getBoundingClientRect();
            const start = window.innerHeight * 0.8;
            const end = window.innerHeight * 0.3;
            const legacyProgress = Math.max(0, Math.min(1, (start - aboutRect.top) / (start - end)));
            setAboutImageStyle({
                opacity: legacyProgress,
                transform: `scale(${0.95 + legacyProgress * 0.05}) translateY(${30 * (1 - legacyProgress)}px)`,
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            });
        }
        return;
      }

      const currentScrollY = window.scrollY;

      // Define Animation Scroll Range
      // Start when the top of the 'about' section is about 80% of the viewport height from the top
      const animationStartScrollY = aboutSectionElement.offsetTop - window.innerHeight * 0.9;
      // End when the top of the 'about' section is about 30% of the viewport height from the top
      const animationEndScrollY = aboutSectionElement.offsetTop - window.innerHeight * 0.3;

      // Ensure animationEndScrollY is greater than animationStartScrollY
      const effectiveAnimationEndScrollY = Math.max(animationStartScrollY + 1, animationEndScrollY);


      // Calculate Scroll Progress
      let progress = 0;
      if (effectiveAnimationEndScrollY > animationStartScrollY) {
        progress = Math.max(0, Math.min(1, (currentScrollY - animationStartScrollY) / (effectiveAnimationEndScrollY - animationStartScrollY)));
      } else if (currentScrollY >= effectiveAnimationEndScrollY) {
        progress = 1;
      }


      // Calculate Transformation Values
      const initialWidth = heroImageRect.width;
      const initialHeight = heroImageRect.height;
      // Use the aboutImageContainerRect for target dimensions as it's styled with max-w-xs and aspect-square
      const targetWidth = aboutImageContainerRect.width;
      const targetHeight = aboutImageContainerRect.height;

      // Preserve aspect ratio: use the smaller scale factor
      const scaleX = targetWidth / initialWidth;
      const scaleY = targetHeight / initialHeight;
      const scale = Math.min(scaleX, scaleY);
      // If you want to fill the container, potentially changing aspect ratio:
      // const currentScaleX = 1 + (scaleX - 1) * progress;
      // const currentScaleY = 1 + (scaleY - 1) * progress;
      // heroProfileImageElement.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${currentScaleX}, ${currentScaleY})`;

      const currentScale = 1 + (scale - 1) * progress;

      // Calculate absolute positions for interpolation
      // heroImageRect is relative to viewport, so add scrollY for document position
      // target positions need to account for the container's current viewport position + scrollY
      const initialX = heroImageRect.left + window.scrollX;
      const initialY = heroImageRect.top + window.scrollY;

      // Target X and Y should be the center of the target container relative to the document
      // minus half of the scaled hero image width/height to center the transformed image
      const targetCenterX = aboutImageContainerRect.left + window.scrollX + aboutImageContainerRect.width / 2;
      const targetCenterY = aboutImageContainerRect.top + window.scrollY + aboutImageContainerRect.height / 2;

      const currentImgScaledWidth = initialWidth * currentScale;
      const currentImgScaledHeight = initialHeight * currentScale;

      const targetX = targetCenterX - currentImgScaledWidth / 2;
      const targetY = targetCenterY - currentImgScaledHeight / 2;

      const translateX = targetX - initialX;
      const translateY = targetY - initialY;

      const currentTranslateX = translateX * progress;
      const currentTranslateY = translateY * progress;
      const currentOpacity = 1 - progress;

      // Apply Styles to Hero Image directly
      heroProfileImageElement.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${currentScale})`;
      heroProfileImageElement.style.opacity = currentOpacity.toString();
      heroProfileImageElement.style.position = 'fixed'; // Keep it fixed during transform
      heroProfileImageElement.style.left = `${heroImageRect.left}px`; // Initial position
      heroProfileImageElement.style.top = `${heroImageRect.top}px`;   // Initial position
      heroProfileImageElement.style.zIndex = '100'; // Ensure it's above other content

      // Handle About Image Visibility
      if (progress < 1) {
        setAboutImageStyle(prev => ({ ...prev, opacity: 0 }));
      } else {
        // Once animation is complete, make the original about image visible
        // and reset hero image styles if needed, or hide it completely
        heroProfileImageElement.style.opacity = '0'; // Hide hero image completely
        heroProfileImageElement.style.position = 'static'; // Reset position
        heroProfileImageElement.style.zIndex = 'auto';
        heroProfileImageElement.style.willChange = 'auto';


        setAboutImageStyle({
          opacity: 1,
          // Optional: add a slight entry animation for the actual about image
          // transform: 'scale(1) translateY(0)',
          // transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateRects); // Recalculate rects on resize

    // Initial call to set positions and styles
    requestAnimationFrame(() => {
        calculateRects(); // Ensure rects are calculated
        handleScroll();   // Then apply scroll logic
    });


    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateRects);

      // Reset will-change on unmount
      const heroImageElement = document.getElementById('hero-profile-image');
      if (heroImageElement) {
        heroImageElement.style.willChange = 'auto';
        heroImageElement.style.position = 'static';
        heroImageElement.style.opacity = '1'; // Or whatever its original state should be
        heroImageElement.style.transform = 'none';
        heroImageElement.style.zIndex = 'auto';
        heroImageElement.style.left = 'auto';
        heroImageElement.style.top = 'auto';
      }
    };
  }, [calculateRects, heroImageRect, aboutImageContainerRect]); // Add rects to dependency array

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero /> {/* heroTransformStyle is not passed as hero image is manipulated directly */}
        <About imageContainerStyle={aboutImageStyle} />
        <Projects />
        <Skills />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

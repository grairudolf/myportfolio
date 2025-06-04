
import React, { useEffect, useState } from 'react';
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
    transform: 'scale(0.95) translateY(20px)',
    transition: 'opacity 0.4s ease-out, transform 0.4s ease-out', // Added transition property here
  });

  useEffect(() => {
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

    // Target all section elements except hero
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
      section.classList.add('opacity-0'); // Initial state for fade-in-up animation
      observer.observe(section);
    });

    // Scroll handler for hero and about image transitions
    const handleScroll = () => {
      const heroImageElement = document.getElementById('hero-image-container');
      const aboutImageElement = document.getElementById('about-image-container');

      if (heroImageElement) { // Check if heroImageElement is not null
        // Simplified: If about section is in view at all, start fading hero image.
        // More precise logic might be needed depending on desired effect.
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const aboutSectionRect = aboutSection.getBoundingClientRect();
          if (aboutSectionRect.top < window.innerHeight * 0.8 && aboutSectionRect.bottom > 0) { // About section is somewhat in view
            heroImageElement.classList.add('hero-image-fade-out');
            heroImageElement.classList.remove('hero-image-fade-in');
          } else {
            heroImageElement.classList.add('hero-image-fade-in');
            heroImageElement.classList.remove('hero-image-fade-out');
          }
        }
      }

      if (aboutImageElement) { // Check if aboutImageElement is not null
        const aboutRect = aboutImageElement.getBoundingClientRect();

        const start = window.innerHeight * 0.8; // Start fading in when top is 80% from viewport top
        const end = window.innerHeight * 0.3;   // Fully faded in when top is 30% from viewport top

        // Calculate progress: 0 when aboutRect.top >= start, 1 when aboutRect.top <= end
        const progress = Math.max(0, Math.min(1, (start - aboutRect.top) / (start - end)));

        setAboutImageStyle({
          opacity: progress,
          transform: `scale(${0.95 + progress * 0.05}) translateY(${30 * (1 - progress)}px)`,
          transition: 'opacity 0.3s ease-out, transform 0.3s ease-out', // Ensure transition is smooth
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
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

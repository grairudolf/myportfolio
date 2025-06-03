
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import TypingAnimation from './TypingAnimation'; // Import the new component

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-10 bg-gradient-hero bg-cover bg-center bg-scroll md:bg-fixed"
      // style={{ backgroundImage: "url('/website_img/hero.jpg')" }} // Removed backgroundImage
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-2">
          <p className="text-purple-400 animate-slide-in-from-left">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-slide-in-from-right">
            Grai Rudolf.
          </h1>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-300 mt-2 animate-fade-in-up">
            <TypingAnimation text="Software Developer" />
          </h2>
          <p className="text-gray-400 max-w-xl mt-6 text-lg animate-fade-in-up delay-300">
            I'm passionate about building exceptional digital experiences and solving complex problems through code.
          </p>
          <div className="hero-icons">
            {/* Icons will be added here later */}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              size="lg"
              className="bg-gradient-portfolio hover:bg-gradient-portfolio-hover hover:-translate-y-0.5 transform transition-transform duration-200"
              asChild
            >
              <a href="#projects">View My Projects</a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 hover:border-purple-400 hover:bg-portfolio-mid-blue/30 hover:-translate-y-0.5 transform transition-transform duration-200"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
          <a href="#about" className="flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

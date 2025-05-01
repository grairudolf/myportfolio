
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled ? "bg-portfolio-dark-blue/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <a href="#hero" className="font-bold text-lg md:text-xl text-gradient">Welcome to my Portfolio</a>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#community">Community</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        
        <div>
          <Button 
            variant="outline" 
            className="hidden md:inline-flex border-purple-500/50 hover:border-purple-400 hover:bg-portfolio-mid-blue/30"
            asChild
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all hover:after:w-full"
    >
      {children}
    </a>
  );
};

export default Header;

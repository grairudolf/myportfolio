
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient inline-block">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I am a Computer Engineering student with a passion for web development and software engineering.
              I love building things that live on the internet, whether that's websites, applications, or anything in between.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              My journey in tech started when I first discovered my love for problem-solving and creating digital solutions.
              Since then, I've been on a mission to grow my skills and contribute to innovative projects that make a positive impact.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me volunteering with local community initiatives or my other hobbies.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
              <Card className="bg-portfolio-mid-blue/20 border-portfolio-mid-blue/30">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h4 className="text-white font-medium">University of Buea - Faculty of Engineering and Technology (FET)</h4>
                    <p className="text-gray-400">B.Eng in Computer Engineering</p>
                    <p className="text-purple-400 text-sm">2024 - Present</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="relative w-full max-w-xs aspect-square rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-portfolio opacity-60 z-10"></div>
              <div className="absolute inset-0 border-2 border-purple-500 rounded-lg transform translate-x-4 translate-y-4 z-0"></div>
              <div className="w-full h-full flex items-center justify-center">
                <img src="public/website_img/hero.jpg" alt="hero" />
                {/* <span className="text-gray-400">Your Photo (Optional)</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

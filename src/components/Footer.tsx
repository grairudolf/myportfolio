
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          © {currentYear} DevNova. All rights reserved.
        </div>
        
        <div className="text-gray-400 text-sm">
          Built by DevNova
        </div>
      </div>
    </footer>
  );
};

export default Footer;

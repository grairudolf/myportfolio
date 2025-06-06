import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      // When text is fully displayed
      const timeoutId = setTimeout(() => {
        setDisplayedText(''); // Reset displayed text
        setCurrentIndex(0);   // Reset index to start over
      }, 2000); // Wait for 2 seconds before restarting
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayedText}
      <span className="typing-cursor"></span>
    </span>
  );
};

export default TypingAnimation;

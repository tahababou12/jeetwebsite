import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  shuffleSpeed?: number;
  shuffleCount?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 100, 
  shuffleSpeed = 50,
  shuffleCount = 3
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/°';

  useEffect(() => {
    let currentIndex = 0;
    let shuffleIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < text.length) {
        const targetChar = text[currentIndex];
        
        // Shuffle effect for each character
        const shuffleChar = () => {
          if (shuffleIndex < shuffleCount) {
            const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
            setDisplayText(prev => prev.slice(0, currentIndex) + randomChar + prev.slice(currentIndex + 1));
            shuffleIndex++;
            setTimeout(shuffleChar, shuffleSpeed);
          } else {
            // Set the actual character after shuffling
            setDisplayText(prev => prev.slice(0, currentIndex) + targetChar + prev.slice(currentIndex + 1));
            currentIndex++;
            shuffleIndex = 0;
            setTimeout(typeNextChar, delay);
          }
        };
        
        // Start shuffling for the current character
        shuffleChar();
      } else {
        setIsComplete(true);
      }
    };
    
    typeNextChar();
    
    return () => {
      // Cleanup
    };
  }, [text, delay, shuffleSpeed, shuffleCount, characters]);
  
  return <span>{displayText}</span>;
};

export default TypewriterText;

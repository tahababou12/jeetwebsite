import React, { useEffect, useState } from 'react';

const BlinkingDot: React.FC = () => {
  const [opacity, setOpacity] = useState(1);
  
  useEffect(() => {
    let increasing = false;
    let animationFrame: number;
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      
      const delta = timestamp - lastTimestamp;
      const changeRate = delta * 0.001; // Control speed of blinking
      
      if (increasing) {
        setOpacity(prev => Math.min(prev + changeRate, 1));
        if (opacity >= 1) increasing = false;
      } else {
        setOpacity(prev => Math.max(prev - changeRate, 0.2));
        if (opacity <= 0.2) increasing = true;
      }
      
      lastTimestamp = timestamp;
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [opacity]);
  
  return (
    <div 
      className="w-3 h-3 bg-green-500 rounded-full mr-2 transition-opacity"
      style={{ opacity }}
    />
  );
};

export default BlinkingDot;

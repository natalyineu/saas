'use client';

import { useState, useEffect } from 'react';

// Base animation props for icons
interface AnimationProps {
  animate?: boolean;
  className?: string;
}

export function RocketIcon({ animate = true, className = '' }: AnimationProps) {
  const [isFlying, setIsFlying] = useState(false);
  
  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        setIsFlying(true);
        setTimeout(() => setIsFlying(false), 2000);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [animate]);
  
  return (
    <div className={`relative w-20 h-20 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Stars background */}
        <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.8)" />
        <circle cx="30" cy="35" r="1.5" fill="rgba(255,255,255,0.8)" />
        <circle cx="80" cy="25" r="1" fill="rgba(255,255,255,0.8)" />
        <circle cx="65" cy="15" r="1.5" fill="rgba(255,255,255,0.8)" />
        <circle cx="75" cy="60" r="1" fill="rgba(255,255,255,0.8)" />
        <circle cx="15" cy="70" r="1.5" fill="rgba(255,255,255,0.8)" />
        
        {/* Rocket */}
        <g 
          style={{ 
            transform: isFlying ? 'translate(10px, -10px)' : 'translate(0, 0)', 
            transition: 'transform 2s ease-in-out'
          }}
        >
          {/* Rocket body */}
          <path 
            d="M50,20 L60,50 L50,70 L40,50 Z" 
            fill="rgba(252,70,107,1)" 
            stroke="rgba(252,70,107,0.8)" 
            strokeWidth="1"
          />
          
          {/* Rocket nose */}
          <path 
            d="M50,10 L55,25 L45,25 Z" 
            fill="rgba(63,94,251,1)" 
            stroke="rgba(63,94,251,0.8)" 
            strokeWidth="1"
          />
          
          {/* Rocket wings */}
          <path 
            d="M60,50 L70,60 L60,65 Z" 
            fill="rgba(63,94,251,0.9)" 
            stroke="rgba(63,94,251,0.8)" 
            strokeWidth="1"
          />
          <path 
            d="M40,50 L30,60 L40,65 Z" 
            fill="rgba(63,94,251,0.9)" 
            stroke="rgba(63,94,251,0.8)" 
            strokeWidth="1"
          />
          
          {/* Rocket window */}
          <circle 
            cx="50" 
            cy="40" 
            r="5" 
            fill="rgba(255,255,255,0.9)" 
            stroke="rgba(63,94,251,0.8)" 
            strokeWidth="1"
          />
        </g>
        
        {/* Rocket flames - only visible during animation */}
        <g style={{ opacity: isFlying ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
          <path 
            d="M45,70 L50,85 L55,70" 
            fill="none" 
            stroke="rgba(255,165,0,0.8)" 
            strokeWidth="3"
            className="animate-pulse"
          />
          <path 
            d="M47,75 L50,90 L53,75" 
            fill="none" 
            stroke="rgba(255,69,0,0.8)" 
            strokeWidth="2"
            className="animate-pulse"
          />
        </g>
      </svg>
    </div>
  );
} 
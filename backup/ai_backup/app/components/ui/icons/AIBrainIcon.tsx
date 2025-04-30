'use client';

import { useState, useEffect } from 'react';

// Base animation props for icons
interface AnimationProps {
  animate?: boolean;
  className?: string;
}

export function AIBrainIcon({ animate = true, className = '' }: AnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1500);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [animate]);
  
  return (
    <div className={`relative w-20 h-20 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Brain outline */}
        <path 
          d="M30,25 C20,30 15,40 20,50 C15,60 20,70 30,75 C40,85 60,85 70,75 C80,70 85,60 80,50 C85,40 80,30 70,25 C60,15 40,15 30,25 Z" 
          fill="none" 
          stroke="rgba(63,94,251,0.8)" 
          strokeWidth="2"
        />
        
        {/* Neural network connections */}
        <circle cx="35" cy="35" r="3" fill="rgba(252,70,107,0.9)" />
        <circle cx="65" cy="35" r="3" fill="rgba(252,70,107,0.9)" />
        <circle cx="50" cy="50" r="3" fill="rgba(252,70,107,0.9)" />
        <circle cx="35" cy="65" r="3" fill="rgba(252,70,107,0.9)" />
        <circle cx="65" cy="65" r="3" fill="rgba(252,70,107,0.9)" />
        
        {/* Neural connections with animation */}
        <path 
          d="M35,35 L50,50 L65,35 M35,65 L50,50 L65,65" 
          fill="none" 
          stroke="rgba(252,70,107,0.7)" 
          strokeWidth="1.5"
          strokeDasharray={isAnimating ? "0, 23, 0" : "23, 0, 0"}
          strokeDashoffset={isAnimating ? "23" : "0"}
          style={{ transition: "stroke-dasharray 1.5s ease-in-out" }}
        />
        
        {/* Pulse wave emanating from brain */}
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          fill="none" 
          stroke="rgba(63,94,251,0.2)" 
          strokeWidth="2" 
          className={isAnimating ? "animate-ping" : ""}
        />
      </svg>
    </div>
  );
} 
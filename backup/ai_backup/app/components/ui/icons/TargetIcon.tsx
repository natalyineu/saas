'use client';

import { useState, useEffect } from 'react';

// Base animation props for all icons
interface AnimationProps {
  animate?: boolean;
  className?: string;
}

export function TargetIcon({ animate = true, className = '' }: AnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1500);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [animate]);
  
  return (
    <div className={`relative w-20 h-20 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="rgba(63,94,251,0.2)" 
          strokeWidth="2" 
          className={isAnimating ? "animate-ping" : ""}
        />
        
        {/* Middle ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="30" 
          fill="none" 
          stroke="rgba(63,94,251,0.5)" 
          strokeWidth="2" 
          className={isAnimating ? "animate-ping" : ""}
          style={{ animationDelay: "0.1s" }}
        />
        
        {/* Inner ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="15" 
          fill="none" 
          stroke="rgba(252,70,107,0.7)" 
          strokeWidth="2"
          className={isAnimating ? "animate-ping" : ""}
          style={{ animationDelay: "0.2s" }}
        />
        
        {/* Target center */}
        <circle 
          cx="50" 
          cy="50" 
          r="5" 
          fill="rgba(252,70,107,1)" 
          className={isAnimating ? "animate-pulse" : ""}
        />
        
        {/* Indicator lines */}
        <path 
          d="M50 5 V 15" 
          stroke="rgba(63,94,251,0.8)" 
          strokeWidth="2"
          className={isAnimating ? "animate-pulse" : ""}
        />
        <path 
          d="M50 85 V 95" 
          stroke="rgba(63,94,251,0.8)" 
          strokeWidth="2"
          className={isAnimating ? "animate-pulse" : ""}
        />
        <path 
          d="M5 50 H 15" 
          stroke="rgba(63,94,251,0.8)" 
          strokeWidth="2"
          className={isAnimating ? "animate-pulse" : ""}
        />
        <path 
          d="M85 50 H 95" 
          stroke="rgba(63,94,251,0.8)" 
          strokeWidth="2"
          className={isAnimating ? "animate-pulse" : ""}
        />
      </svg>
    </div>
  );
} 
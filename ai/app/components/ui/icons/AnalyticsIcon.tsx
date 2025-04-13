'use client';

import { useState, useEffect } from 'react';

// Base animation props for icons
interface AnimationProps {
  animate?: boolean;
  className?: string;
}

export function AnalyticsIcon({ animate = true, className = '' }: AnimationProps) {
  const [barHeights, setBarHeights] = useState([15, 25, 35, 20, 30]);
  
  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        setBarHeights([
          Math.floor(Math.random() * 30) + 10,
          Math.floor(Math.random() * 30) + 10,
          Math.floor(Math.random() * 30) + 10,
          Math.floor(Math.random() * 30) + 10,
          Math.floor(Math.random() * 30) + 10,
        ]);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [animate]);
  
  return (
    <div className={`relative w-20 h-20 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Chart background */}
        <rect 
          x="10" 
          y="10" 
          width="80" 
          height="80" 
          rx="4" 
          fill="rgba(63,94,251,0.1)" 
          stroke="rgba(63,94,251,0.6)" 
          strokeWidth="1"
        />
        
        {/* Chart grid lines */}
        <path 
          d="M20 25 H 80 M20 45 H 80 M20 65 H 80" 
          stroke="rgba(63,94,251,0.3)" 
          strokeWidth="0.5" 
          strokeDasharray="2,2"
        />
        
        {/* X and Y axis */}
        <path 
          d="M20 80 H 80 M20 20 V 80" 
          stroke="rgba(63,94,251,0.8)" 
          strokeWidth="1.5"
        />
        
        {/* Animated bars */}
        <rect 
          x="25" 
          y={80 - barHeights[0]} 
          width="8" 
          height={barHeights[0]} 
          fill="rgba(252,70,107,0.7)" 
          style={{ transition: "y 1s ease-out, height 1s ease-out" }}
        />
        <rect 
          x="40" 
          y={80 - barHeights[1]} 
          width="8" 
          height={barHeights[1]} 
          fill="rgba(252,70,107,0.8)" 
          style={{ transition: "y 1s ease-out, height 1s ease-out" }}
        />
        <rect 
          x="55" 
          y={80 - barHeights[2]} 
          width="8" 
          height={barHeights[2]} 
          fill="rgba(252,70,107,0.9)" 
          style={{ transition: "y 1s ease-out, height 1s ease-out" }}
        />
        <rect 
          x="70" 
          y={80 - barHeights[3]} 
          width="8" 
          height={barHeights[3]} 
          fill="rgba(252,70,107,0.8)" 
          style={{ transition: "y 1s ease-out, height 1s ease-out" }}
        />
        
        {/* Trend line */}
        <path 
          d={`M29 ${85 - barHeights[0]} L44 ${85 - barHeights[1]} L59 ${85 - barHeights[2]} L74 ${85 - barHeights[3]}`}
          stroke="rgba(63,94,251,0.9)" 
          strokeWidth="2" 
          fill="none"
          style={{ transition: "d 1s ease-out" }}
        />
      </svg>
    </div>
  );
} 
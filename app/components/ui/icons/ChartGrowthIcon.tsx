'use client';

import { useState, useEffect } from 'react';

// Base animation props for icons
interface AnimationProps {
  animate?: boolean;
  className?: string;
}

export function ChartGrowthIcon({ animate = true, className = '' }: AnimationProps) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (animate) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress = 0;
        const animation = setInterval(() => {
          currentProgress += 0.02;
          setProgress(Math.min(currentProgress, 1));
          if (currentProgress >= 1) {
            clearInterval(animation);
          }
        }, 20);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [animate]);
  
  const pathD = `M10,70 Q30,${70 - 20 * progress} 50,${70 - 40 * progress} T90,${10 + (1 - progress) * 50}`;
  
  return (
    <div className={`relative w-20 h-20 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Chart background */}
        <rect 
          x="10" 
          y="10" 
          width="80" 
          height="70" 
          fill="rgba(63,94,251,0.05)" 
          stroke="rgba(63,94,251,0.2)" 
          strokeWidth="1"
        />
        
        {/* Grid lines */}
        <path 
          d="M10 25 H 90 M10 40 H 90 M10 55 H 90 M25 10 V 80 M40 10 V 80 M55 10 V 80 M70 10 V 80" 
          stroke="rgba(63,94,251,0.1)" 
          strokeWidth="0.5" 
          strokeDasharray="2,2"
        />
        
        {/* X and Y axis */}
        <path 
          d="M10 80 H 90 M10 10 V 80" 
          stroke="rgba(63,94,251,0.5)" 
          strokeWidth="1"
        />
        
        {/* Growth curve */}
        <path 
          d={pathD}
          stroke="rgba(252,70,107,0.8)" 
          strokeWidth="3" 
          fill="none"
          strokeLinecap="round"
          style={{ transition: "d 0.5s ease-out" }}
        />
        
        {/* Area under curve */}
        <path 
          d={`${pathD} L90,80 L10,80 Z`}
          fill="rgba(252,70,107,0.1)"
          style={{ transition: "d 0.5s ease-out" }}
        />
        
        {/* Growth point - follows the path */}
        <circle 
          cx={90 * progress} 
          cy={70 - Math.sin(progress * Math.PI) * 60}
          r="3" 
          fill="rgba(252,70,107,1)"
          style={{ transition: "cx 0.5s ease-out, cy 0.5s ease-out" }}
        />
      </svg>
    </div>
  );
} 
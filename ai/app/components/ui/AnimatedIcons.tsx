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
        
        {/* Data points */}
        <circle cx="29" cy={85 - barHeights[0]} r="3" fill="rgba(63,94,251,1)" />
        <circle cx="44" cy={85 - barHeights[1]} r="3" fill="rgba(63,94,251,1)" />
        <circle cx="59" cy={85 - barHeights[2]} r="3" fill="rgba(63,94,251,1)" />
        <circle cx="74" cy={85 - barHeights[3]} r="3" fill="rgba(63,94,251,1)" />
      </svg>
    </div>
  );
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

export function GearIcon({ animate = true, className = '' }: AnimationProps) {
  return (
    <div className={`relative w-20 h-20 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Large gear - constant slow rotation */}
        <g className={animate ? "animate-spin-slow" : ""} style={{ transformOrigin: '50px 50px', animationDuration: '10s' }}>
          <path 
            d="M50,20 L53,13 L58,15 L60,7 L65,10 L70,3 L75,8 L82,3 L85,10 L93,7 L93,15 L100,15 L97,23 L100,30 L93,35 L93,43 L85,45 L82,53 L75,50 L70,58 L65,53 L60,58 L58,50 L53,48 L50,55 L47,48 L42,50 L40,58 L35,53 L30,58 L25,50 L18,53 L15,45 L7,43 L7,35 L0,30 L3,23 L0,15 L7,15 L7,7 L15,10 L18,3 L25,8 L30,3 L35,10 L40,7 L42,15 L47,13 Z" 
            fill="rgba(63,94,251,0.2)" 
            stroke="rgba(63,94,251,0.8)" 
            strokeWidth="1"
          />
          <circle 
            cx="50" 
            cy="30" 
            r="12" 
            fill="rgba(63,94,251,0.1)" 
            stroke="rgba(63,94,251,0.5)" 
            strokeWidth="1"
          />
        </g>
        
        {/* Small gear - opposite rotation, faster */}
        <g 
          className={animate ? "animate-spin-reverse" : ""} 
          style={{ transformOrigin: '75px 70px', animationDuration: '5s' }}
        >
          <path 
            d="M75,60 L77,57 L80,58 L81,55 L84,57 L86,53 L89,56 L93,53 L94,57 L98,55 L98,59 L100,60 L98,64 L100,68 L98,70 L98,74 L94,75 L93,79 L89,76 L86,79 L84,76 L81,79 L80,76 L77,77 L75,80 L73,77 L70,76 L69,79 L66,76 L64,79 L62,76 L58,79 L57,75 L53,74 L53,70 L50,68 L53,64 L50,60 L53,60 L53,55 L57,57 L58,53 L62,56 L64,53 L66,56 L69,53 L70,58 L73,57 Z" 
            fill="rgba(252,70,107,0.2)" 
            stroke="rgba(252,70,107,0.8)" 
            strokeWidth="1"
          />
          <circle 
            cx="75" 
            cy="70" 
            r="8" 
            fill="rgba(252,70,107,0.1)" 
            stroke="rgba(252,70,107,0.5)" 
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
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

// Export a collection of all icons
export default function AnimatedIcons() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <TargetIcon />
      <AIBrainIcon />
      <AnalyticsIcon />
      <RocketIcon />
      <GearIcon />
      <ChartGrowthIcon />
    </div>
  );
} 
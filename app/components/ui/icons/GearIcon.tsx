'use client';

// Base animation props for icons
interface AnimationProps {
  animate?: boolean;
  className?: string;
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
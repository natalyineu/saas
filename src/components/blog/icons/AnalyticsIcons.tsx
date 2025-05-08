import React from 'react';

// Econometrics and Marketing Mix Modeling Icon
export const EconometricsIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <g className="transform transition-transform duration-700 origin-center hover:rotate-12">
        {/* Chart/graph base */}
        <rect x="25" y="25" width="50" height="50" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" rx="2" />
        
        {/* Bar chart elements */}
        <rect x="30" y="55" width="7" height="15" fill="rgba(252,70,107,0.8)" />
        <rect x="40" y="45" width="7" height="25" fill="rgba(63,94,251,0.8)" />
        <rect x="50" y="35" width="7" height="35" fill="rgba(252,70,107,0.8)" />
        <rect x="60" y="50" width="7" height="20" fill="rgba(63,94,251,0.8)" />
        
        {/* Line graph overlay */}
        <path d="M33.5 50 L43.5 40 L53.5 45 L63.5 30" stroke="rgba(252,70,107,1)" strokeWidth="2" fill="none" className="animate-dash-slow" />
        <circle cx="33.5" cy="50" r="2" fill="rgba(252,70,107,1)" />
        <circle cx="43.5" cy="40" r="2" fill="rgba(252,70,107,1)" />
        <circle cx="53.5" cy="45" r="2" fill="rgba(252,70,107,1)" />
        <circle cx="63.5" cy="30" r="2" fill="rgba(252,70,107,1)" />
        
        {/* Dollar sign to indicate ROI */}
        <text x="70" y="35" fontSize="8" fill="rgba(63,94,251,1)" fontWeight="bold">+43%</text>
      </g>
    </svg>
  </div>
); 
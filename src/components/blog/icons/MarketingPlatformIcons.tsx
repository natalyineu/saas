import React from 'react';

// Pinterest Advertising Icon
export const PinterestIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Pinterest stylized "P" */}
      <circle cx="50" cy="50" r="20" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      <path d="M50 30 C45 30, 40 35, 40 45 C40 52, 43 55, 47 55 C51 55, 52 52, 52 49 C52 46, 50 43, 47 43 C45 43, 44 44, 44 46"
        stroke="rgba(252,70,107,1)" strokeWidth="2.5" fill="none" />
      
      <path d="M47 55 L44 70"
        stroke="rgba(252,70,107,1)" strokeWidth="2.5" />
      
      {/* Pinterest pins/boards */}
      <rect x="25" y="35" width="10" height="8" rx="1" fill="white" stroke="rgba(63,94,251,0.7)" strokeWidth="1" 
        className="animate-float-slow" />
      <rect x="65" y="35" width="10" height="8" rx="1" fill="white" stroke="rgba(63,94,251,0.7)" strokeWidth="1" 
        className="animate-float-slow opacity-70" />
      
      <rect x="20" y="50" width="10" height="8" rx="1" fill="white" stroke="rgba(63,94,251,0.7)" strokeWidth="1" 
        className="animate-float-slow opacity-80" />
      <rect x="70" y="50" width="10" height="8" rx="1" fill="white" stroke="rgba(63,94,251,0.7)" strokeWidth="1" 
        className="animate-float-slow opacity-90" />
      
      <rect x="25" y="65" width="10" height="8" rx="1" fill="white" stroke="rgba(63,94,251,0.7)" strokeWidth="1" 
        className="animate-float-slow opacity-60" />
      <rect x="65" y="65" width="10" height="8" rx="1" fill="white" stroke="rgba(63,94,251,0.7)" strokeWidth="1" 
        className="animate-float-slow opacity-50" />
      
      {/* Connection lines for visual discovery */}
      <path d="M30 35 L40 45" stroke="rgba(252,70,107,0.4)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M70 35 L60 45" stroke="rgba(252,70,107,0.4)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow opacity-80" />
      <path d="M20 54 L30 54" stroke="rgba(252,70,107,0.4)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow opacity-60" />
      <path d="M70 54 L80 54" stroke="rgba(252,70,107,0.4)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow opacity-90" />
      <path d="M30 65 L40 55" stroke="rgba(252,70,107,0.4)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow opacity-70" />
      <path d="M70 65 L60 55" stroke="rgba(252,70,107,0.4)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow opacity-50" />
    </svg>
  </div>
);

// Yahoo DSP Icon
export const YahooDspIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Yahoo stylized exclamation mark */}
      <path d="M40 30 L60 30 L55 55 L45 55 Z" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      <circle cx="50" cy="65" r="5" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      
      {/* DSP data flow elements */}
      <path d="M25 40 C15 50, 15 60, 25 70" stroke="rgba(252,70,107,0.6)" strokeWidth="1.5" strokeDasharray="2 2" 
        className="animate-dash-slow" fill="none" />
      <path d="M75 40 C85 50, 85 60, 75 70" stroke="rgba(252,70,107,0.6)" strokeWidth="1.5" strokeDasharray="2 2" 
        className="animate-dash-slow" fill="none" />
      
      {/* Ads/devices representation */}
      <rect x="20" y="35" width="10" height="6" rx="1" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow" />
      <rect x="70" y="35" width="10" height="6" rx="1" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow opacity-80" />
      
      <circle cx="20" cy="50" r="4" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow opacity-60" />
      <circle cx="80" cy="50" r="4" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow opacity-70" />
      
      <rect x="20" y="65" width="10" height="8" rx="1" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow opacity-90" />
      <rect x="70" y="65" width="10" height="8" rx="1" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow opacity-50" />
      
      {/* Programmatic bidding */}
      <text x="69" y="40" fill="rgba(63,94,251,1)" fontSize="5" className="animate-pulse-slow">DSP</text>
    </svg>
  </div>
);

// Xandr Advertising Icon
export const XandrIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Xandr X */}
      <path d="M35 35 L65 65" stroke="rgba(252,70,107,1)" strokeWidth="3" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      <path d="M65 35 L35 65" stroke="rgba(252,70,107,1)" strokeWidth="3" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Ad exchange flow */}
      <path d="M20 50 L35 50" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" strokeDasharray="2 2" 
        className="animate-dash-slow" />
      <path d="M65 50 L80 50" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" strokeDasharray="2 2" 
        className="animate-dash-slow" />
      
      {/* Programmatic advertising elements */}
      <circle cx="20" cy="50" r="5" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <text x="19" y="52" fill="rgba(63,94,251,1)" fontSize="5">D</text>
      
      <circle cx="80" cy="50" r="5" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <text x="79" y="52" fill="rgba(63,94,251,1)" fontSize="5">S</text>
      
      {/* Data flow representation */}
      <path d="M30 30 C20 35, 20 65, 30 70" stroke="rgba(252,70,107,0.4)" strokeWidth="1" strokeDasharray="2 2" 
        className="animate-dash-slow" fill="none" />
      <path d="M70 30 C80 35, 80 65, 70 70" stroke="rgba(252,70,107,0.4)" strokeWidth="1" strokeDasharray="2 2" 
        className="animate-dash-slow" fill="none" />
      
      {/* Bid flow indicators */}
      <circle cx="30" cy="30" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      <circle cx="30" cy="70" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      <circle cx="70" cy="30" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      <circle cx="70" cy="70" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
    </svg>
  </div>
);

// Google Ads Search Icon
export const GoogleSearchIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Search bar */}
      <rect x="25" y="40" width="50" height="12" rx="6" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Search magnifying glass */}
      <circle cx="35" cy="46" r="5" stroke="rgba(252,70,107,1)" strokeWidth="2" fill="none" />
      <path d="M38 49 L42 53" stroke="rgba(252,70,107,1)" strokeWidth="2" fill="none" />
      
      {/* Ad label */}
      <rect x="30" y="60" width="10" height="5" rx="1" fill="rgba(252,70,107,0.2)" stroke="rgba(252,70,107,1)" strokeWidth="1" />
      <text x="32" y="64" fill="rgba(252,70,107,1)" fontSize="4">AD</text>
      
      {/* Search results */}
      <rect x="30" y="67" width="40" height="3" rx="1.5" fill="rgba(63,94,251,0.3)" className="animate-pulse-slow" />
      <rect x="30" y="72" width="30" height="2" rx="1" fill="rgba(63,94,251,0.3)" className="animate-pulse-slow opacity-80" />
      <rect x="30" y="76" width="35" height="2" rx="1" fill="rgba(63,94,251,0.3)" className="animate-pulse-slow opacity-60" />
      
      {/* Keywords/bidding */}
      <path d="M15 40 C10 50, 10 60, 15 70" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" 
        className="animate-dash-slow" fill="none" />
      <circle cx="15" cy="40" r="2" fill="rgba(252,70,107,0.8)" />
      <text x="9" y="36" fill="rgba(252,70,107,0.8)" fontSize="4">keyword</text>
      
      <path d="M85 40 C90 50, 90 60, 85 70" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" 
        className="animate-dash-slow" fill="none" />
      <circle cx="85" cy="40" r="2" fill="rgba(252,70,107,0.8)" />
      <text x="81" y="36" fill="rgba(252,70,107,0.8)" fontSize="4">bid</text>
    </svg>
  </div>
); 
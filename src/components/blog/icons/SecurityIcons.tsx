import React from 'react';

// Privacy-First Advertising Icon
export const PrivacyIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Shield outline */}
      <path d="M30 35 L50 25 L70 35 L70 60 C70 70, 60 75, 50 80 C40 75, 30 70, 30 60 L30 35" 
        fill="white" 
        stroke="rgba(63,94,251,1)" 
        strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Privacy lock */}
      <rect x="42" y="45" width="16" height="18" rx="3" fill="rgba(252,70,107,0.1)" stroke="rgba(252,70,107,1)" strokeWidth="1.5" />
      <path d="M45 45 V40 C45 37, 47 35, 50 35 C53 35, 55 37, 55 40 V45" stroke="rgba(252,70,107,1)" strokeWidth="1.5" />
      
      {/* Keyhole */}
      <circle cx="50" cy="52" r="3" fill="rgba(63,94,251,0.2)" stroke="rgba(63,94,251,1)" strokeWidth="1" />
      <rect x="49" y="52" width="2" height="6" fill="rgba(63,94,251,1)" />
      
      {/* Privacy shield pulse */}
      <path d="M30 35 L50 25 L70 35 L70 60 C70 70, 60 75, 50 80 C40 75, 30 70, 30 60 L30 35" 
        fill="none" 
        stroke="rgba(252,70,107,0.3)" 
        strokeWidth="6" 
        className="animate-pulse-slow opacity-50" />
    </svg>
  </div>
);

// UK Advertising Landscape Icon focusing on compliance
export const UkLandscapeIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* UK flag stylized representation */}
      <rect x="30" y="35" width="40" height="30" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2"
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Simplified UK flag elements */}
      <path d="M30 35 L70 65" stroke="rgba(252,70,107,0.8)" strokeWidth="3" />
      <path d="M30 65 L70 35" stroke="rgba(252,70,107,0.8)" strokeWidth="3" />
      
      <path d="M50 35 L50 65" stroke="rgba(63,94,251,1)" strokeWidth="4" />
      <path d="M30 50 L70 50" stroke="rgba(63,94,251,1)" strokeWidth="4" />
      
      {/* Digital advertising representation */}
      <rect x="25" y="70" width="50" height="10" rx="2" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="1" />
      <text x="37" y="77" fill="rgba(63,94,251,1)" fontSize="6" fontWeight="bold" className="animate-pulse-slow">DIGITAL</text>
      
      {/* Compliance/regulatory elements */}
      <circle cx="25" cy="30" r="5" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="1" />
      <text x="23" y="32" fill="rgba(252,70,107,1)" fontSize="6" fontWeight="bold">✓</text>
      
      <circle cx="75" cy="30" r="5" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="1" />
      <text x="73" y="32" fill="rgba(252,70,107,1)" fontSize="6" fontWeight="bold">✓</text>
      
      {/* 2025 indicator */}
      <text x="40" y="25" fill="rgba(63,94,251,1)" fontSize="8" fontWeight="bold">2025</text>
    </svg>
  </div>
);

// Animation component for describing animation behaviors in the icons
export const AnimationNote = () => (
  <div className="text-xs text-gray-500 italic mt-2">
    <span className="inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Icons include subtle animations for better engagement
    </span>
  </div>
); 
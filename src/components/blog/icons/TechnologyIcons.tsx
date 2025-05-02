import React from 'react';

// AI in Digital Advertising Icon
export const AiAdvertisingIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Digital billboard/screen */}
      <rect x="25" y="30" width="50" height="35" rx="2" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2"
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* AI neural network representation */}
      <circle cx="35" cy="40" r="3" fill="rgba(252,70,107,1)" />
      <circle cx="50" cy="40" r="3" fill="rgba(252,70,107,1)" />
      <circle cx="65" cy="40" r="3" fill="rgba(252,70,107,1)" />
      
      <circle cx="40" cy="50" r="3" fill="rgba(63,94,251,1)" />
      <circle cx="60" cy="50" r="3" fill="rgba(63,94,251,1)" />
      
      <circle cx="50" cy="60" r="3" fill="rgba(252,70,107,1)" />
      
      {/* Connections that animate */}
      <path d="M35 40 L40 50" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" className="animate-pulse-slow" />
      <path d="M50 40 L40 50" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" className="animate-pulse-slow opacity-70" />
      <path d="M50 40 L60 50" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" className="animate-pulse-slow opacity-80" />
      <path d="M65 40 L60 50" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" className="animate-pulse-slow opacity-90" />
      
      <path d="M40 50 L50 60" stroke="rgba(252,70,107,0.7)" strokeWidth="1.5" className="animate-pulse-slow" />
      <path d="M60 50 L50 60" stroke="rgba(252,70,107,0.7)" strokeWidth="1.5" className="animate-pulse-slow" />
      
      {/* Data stream */}
      <path d="M20 70 L80 70" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="3 2" 
        className="animate-pulse-slow" />
    </svg>
  </div>
);

// Programmatic Advertising Icon
export const ProgrammaticIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Automation/gear representation */}
      <circle cx="50" cy="50" r="20" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-700 origin-center group-hover:rotate-45" />
      
      {/* Gear teeth */}
      <path d="M50 30 L50 27" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M59 32.5 L62 30" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M67.5 41 L70 38" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M70 50 L73 50" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M67.5 59 L70 62" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M59 67.5 L62 70" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M50 70 L50 73" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M41 67.5 L38 70" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M32.5 59 L30 62" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M30 50 L27 50" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M32.5 41 L30 38" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M41 32.5 L38 30" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      
      {/* Data flow visualization */}
      <circle cx="50" cy="50" r="10" fill="rgba(252,70,107,0.7)" className="animate-pulse-slow" />
      
      {/* Binary data representation */}
      <text x="47" y="47" fill="rgba(63,94,251,1)" fontSize="5" className="animate-pulse-slow">01</text>
      <text x="47" y="53" fill="rgba(63,94,251,1)" fontSize="5" className="animate-pulse-slow">10</text>
    </svg>
  </div>
);

// Metaverse Marketing Icon
export const MetaverseIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* VR headset */}
      <rect x="30" y="40" width="40" height="25" rx="5" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Lenses */}
      <circle cx="40" cy="52.5" r="7" fill="rgba(63,94,251,0.2)" />
      <circle cx="60" cy="52.5" r="7" fill="rgba(63,94,251,0.2)" />
      
      {/* Headset straps */}
      <path d="M30 45 C25 45, 20 40, 25 35" stroke="rgba(252,70,107,0.8)" strokeWidth="1.5" fill="none" />
      <path d="M70 45 C75 45, 80 40, 75 35" stroke="rgba(252,70,107,0.8)" strokeWidth="1.5" fill="none" />
      
      {/* Virtual world elements */}
      <path d="M40 30 L60 30 L65 40 L35 40 Z" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 1" fill="none" 
        className="animate-float-slow" />
      <circle cx="35" cy="25" r="2" fill="rgba(63,94,251,0.8)" className="animate-pulse-slow" />
      <circle cx="65" cy="25" r="2" fill="rgba(63,94,251,0.8)" className="animate-pulse-slow opacity-80" />
      <circle cx="50" cy="20" r="2" fill="rgba(63,94,251,0.8)" className="animate-pulse-slow opacity-60" />
    </svg>
  </div>
);

// Ecommerce Personalization Icon
export const EcommerceIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Shopping bag */}
      <path d="M35 40 L35 70 L65 70 L65 40" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Bag handles */}
      <path d="M35 40 C35 30, 45 25, 50 30 C55 25, 65 30, 65 40" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
      
      {/* Personalization elements */}
      <text x="44" y="55" fill="rgba(252,70,107,1)" fontSize="12" fontWeight="bold" className="animate-pulse-slow">P</text>
      
      {/* Items in bag */}
      <rect x="40" y="60" width="7" height="5" rx="1" fill="rgba(252,70,107,0.2)" />
      <rect x="52" y="60" width="7" height="5" rx="1" fill="rgba(252,70,107,0.2)" />
      
      {/* Personalization data flow */}
      <path d="M25 40 C20 50, 20 60, 25 70" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 1" 
        className="animate-dash-slow" fill="none" />
      <path d="M75 40 C80 50, 80 60, 75 70" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 1" 
        className="animate-dash-slow" fill="none" />
      
      {/* Data points */}
      <circle cx="25" cy="40" r="2" fill="rgba(252,70,107,1)" className="animate-pulse-slow" />
      <circle cx="25" cy="70" r="2" fill="rgba(252,70,107,1)" className="animate-pulse-slow opacity-80" />
      <circle cx="75" cy="40" r="2" fill="rgba(252,70,107,1)" className="animate-pulse-slow opacity-70" />
      <circle cx="75" cy="70" r="2" fill="rgba(252,70,107,1)" className="animate-pulse-slow opacity-90" />
    </svg>
  </div>
); 
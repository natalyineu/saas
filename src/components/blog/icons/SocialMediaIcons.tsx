import React from 'react';

// Social Media Advertising Icon
export const SocialMediaAdsIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Social media phone */}
      <rect x="35" y="25" width="30" height="50" rx="3" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Screen content */}
      <rect x="38" y="30" width="24" height="36" fill="rgba(252,70,107,0.05)" />
      
      {/* Post representation */}
      <rect x="40" y="33" width="20" height="7" rx="1" fill="rgba(63,94,251,0.2)" />
      <rect x="40" y="42" width="20" height="10" rx="1" fill="rgba(252,70,107,0.2)" />
      <rect x="40" y="54" width="20" height="7" rx="1" fill="rgba(63,94,251,0.2)" />
      
      {/* Notification animations */}
      <circle cx="65" cy="35" r="3" fill="rgba(252,70,107,1)" className="animate-ping-slow" />
      <circle cx="70" cy="45" r="2" fill="rgba(252,70,107,0.8)" className="animate-ping-slow opacity-80" />
      <circle cx="65" cy="55" r="2" fill="rgba(252,70,107,0.6)" className="animate-ping-slow opacity-60" />
      
      {/* Shares/likes representation */}
      <circle cx="30" cy="40" r="2.5" fill="rgba(63,94,251,1)" className="animate-pulse-slow" />
      <path d="M30 40 L35 33" stroke="rgba(63,94,251,0.6)" strokeWidth="1" />
      
      <circle cx="25" cy="50" r="2.5" fill="rgba(63,94,251,1)" className="animate-pulse-slow opacity-80" />
      <path d="M25 50 L35 43" stroke="rgba(63,94,251,0.6)" strokeWidth="1" />
      
      <circle cx="30" cy="60" r="2.5" fill="rgba(63,94,251,1)" className="animate-pulse-slow opacity-60" />
      <path d="M30 60 L35 55" stroke="rgba(63,94,251,0.6)" strokeWidth="1" />
    </svg>
  </div>
);

// Facebook Advertising Icon
export const FacebookAdsIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Facebook logo stylized */}
      <rect x="30" y="30" width="40" height="40" rx="5" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Facebook "f" */}
      <path d="M57 50H53V70H47V50H43V44H47V40C47 37 49 34 52 34H58V40H54C53 40 53 40.5 53 41V44H58L57 50Z" 
        fill="rgba(63,94,251,1)" 
        className="transform transition-transform duration-500 origin-center" />
      
      {/* Animated ad elements */}
      <circle cx="25" cy="35" r="3" fill="rgba(252,70,107,0.8)" className="animate-ping-slow" />
      <circle cx="75" cy="35" r="3" fill="rgba(252,70,107,0.8)" className="animate-ping-slow opacity-70" />
      <circle cx="25" cy="65" r="3" fill="rgba(252,70,107,0.8)" className="animate-ping-slow opacity-50" />
      <circle cx="75" cy="65" r="3" fill="rgba(252,70,107,0.8)" className="animate-ping-slow opacity-90" />
      
      {/* Target/audience representation */}
      <circle cx="50" cy="50" r="20" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="3 1" 
        className="animate-spin-slow" fill="none" />
    </svg>
  </div>
);

// AI Content Icon for social media
export const AiContentIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Document base */}
      <rect x="30" y="25" width="40" height="50" rx="2" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Text lines */}
      <rect x="35" y="30" width="30" height="3" rx="1" fill="rgba(63,94,251,0.3)" />
      <rect x="35" y="36" width="25" height="2" rx="1" fill="rgba(63,94,251,0.2)" />
      <rect x="35" y="40" width="28" height="2" rx="1" fill="rgba(63,94,251,0.2)" />
      <rect x="35" y="44" width="20" height="2" rx="1" fill="rgba(63,94,251,0.2)" />
      
      {/* AI generated content animation */}
      <rect x="35" y="52" width="30" height="3" rx="1" fill="rgba(252,70,107,0.3)" 
        className="animate-pulse-slow" />
      <rect x="35" y="58" width="25" height="2" rx="1" fill="rgba(252,70,107,0.2)" 
        className="animate-pulse-slow opacity-80" />
      <rect x="35" y="62" width="28" height="2" rx="1" fill="rgba(252,70,107,0.2)" 
        className="animate-pulse-slow opacity-70" />
      <rect x="35" y="66" width="20" height="2" rx="1" fill="rgba(252,70,107,0.2)" 
        className="animate-pulse-slow opacity-90" />
      
      {/* AI processing animation */}
      <path d="M70 30 C80 40, 80 60, 70 70" stroke="rgba(252,70,107,0.5)" strokeWidth="1.5" strokeDasharray="2 2" 
        className="animate-dash-slow" fill="none" />
      <circle cx="70" cy="30" r="2" fill="rgba(252,70,107,1)" className="animate-pulse-slow" />
      <circle cx="70" cy="70" r="2" fill="rgba(252,70,107,1)" className="animate-pulse-slow opacity-80" />
    </svg>
  </div>
); 
import React from 'react';

// 1. Email Marketing Automation Icon
export const EmailMarketingIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Envelope */}
      <rect x="25" y="35" width="50" height="35" rx="2" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Envelope flap */}
      <path d="M25 35 L50 50 L75 35" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
      
      {/* Automation gears */}
      <circle cx="35" cy="60" r="5" fill="rgba(252,70,107,0.2)" 
        className="animate-spin-slow" />
      <circle cx="65" cy="60" r="5" fill="rgba(252,70,107,0.2)" 
        className="animate-spin-slow" />
      
      {/* AI/Automation element */}
      <path d="M42 45 L58 45" stroke="rgba(252,70,107,0.8)" strokeWidth="1.5" />
      <path d="M40 50 L60 50" stroke="rgba(252,70,107,0.8)" strokeWidth="1.5" />
      <path d="M42 55 L58 55" stroke="rgba(252,70,107,0.8)" strokeWidth="1.5" />
      
      {/* Animated email send indicator */}
      <path d="M75 50 C85 50, 90 40, 85 30" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 2" 
        className="animate-dash-slow" fill="none" />
      <circle cx="85" cy="30" r="2" fill="rgba(63,94,251,1)" className="animate-pulse-slow" />
    </svg>
  </div>
);

// 2. Video Marketing Strategy Icon
export const VideoMarketingIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Video frame */}
      <rect x="30" y="30" width="40" height="30" rx="2" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Play button */}
      <path d="M45 40 L55 45 L45 50 Z" fill="rgba(252,70,107,0.8)" />
      
      {/* Video timeline */}
      <rect x="30" y="65" width="40" height="3" rx="1.5" fill="rgba(63,94,251,0.2)" />
      <rect x="30" y="65" width="15" height="3" rx="1.5" fill="rgba(63,94,251,0.8)" />
      <circle cx="45" cy="66.5" r="2.5" fill="rgba(63,94,251,1)" />
      
      {/* Metrics animation */}
      <path d="M75 40 L85 40" stroke="rgba(252,70,107,0.7)" strokeWidth="1.5" className="animate-pulse-slow" />
      <path d="M75 45 L82 45" stroke="rgba(252,70,107,0.7)" strokeWidth="1.5" className="animate-pulse-slow opacity-80" />
      <path d="M75 50 L80 50" stroke="rgba(252,70,107,0.7)" strokeWidth="1.5" className="animate-pulse-slow opacity-60" />
      
      {/* Views/engagement indicator */}
      <path d="M20 40 C15 45, 15 55, 20 60" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" fill="none" />
      <circle cx="20" cy="40" r="2" fill="rgba(63,94,251,1)" className="animate-pulse-slow" />
      <circle cx="20" cy="60" r="2" fill="rgba(63,94,251,1)" className="animate-pulse-slow" />
    </svg>
  </div>
);

// 3. Voice Search Optimization Icon
export const VoiceSearchIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Microphone */}
      <rect x="45" y="30" width="10" height="20" rx="5" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Microphone stand */}
      <path d="M50 50 L50 60" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M40 60 L60 60" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      
      {/* Sound waves */}
      <path d="M40 40 C35 40, 35 50, 40 50" stroke="rgba(252,70,107,0.7)" strokeWidth="1.5" 
        className="animate-pulse-slow" />
      <path d="M60 40 C65 40, 65 50, 60 50" stroke="rgba(252,70,107,0.7)" strokeWidth="1.5" 
        className="animate-pulse-slow" />
      <path d="M35 35 C25 35, 25 55, 35 55" stroke="rgba(252,70,107,0.5)" strokeWidth="1.5" 
        className="animate-pulse-slow opacity-80" />
      <path d="M65 35 C75 35, 75 55, 65 55" stroke="rgba(252,70,107,0.5)" strokeWidth="1.5" 
        className="animate-pulse-slow opacity-80" />
      
      {/* Search results */}
      <rect x="35" y="70" width="30" height="3" rx="1.5" fill="rgba(63,94,251,0.3)" className="animate-pulse-slow" />
      <rect x="40" y="75" width="20" height="2" rx="1" fill="rgba(63,94,251,0.3)" className="animate-pulse-slow opacity-80" />
    </svg>
  </div>
);

// 4. Influencer Marketing Strategy Icon
export const InfluencerMarketingIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Central influencer */}
      <circle cx="50" cy="50" r="10" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      <circle cx="50" cy="45" r="3" fill="rgba(252,70,107,0.8)" /> {/* head */}
      <path d="M50 48 L50 54" stroke="rgba(252,70,107,0.8)" strokeWidth="2" /> {/* body */}
      <path d="M47 52 L53 52" stroke="rgba(252,70,107,0.8)" strokeWidth="2" /> {/* arms */}
      
      {/* Audience/followers */}
      <circle cx="35" cy="35" r="5" fill="rgba(63,94,251,0.2)" className="animate-pulse-slow" />
      <circle cx="30" cy="50" r="5" fill="rgba(63,94,251,0.2)" className="animate-pulse-slow opacity-80" />
      <circle cx="35" cy="65" r="5" fill="rgba(63,94,251,0.2)" className="animate-pulse-slow opacity-60" />
      <circle cx="65" cy="35" r="5" fill="rgba(63,94,251,0.2)" className="animate-pulse-slow opacity-70" />
      <circle cx="70" cy="50" r="5" fill="rgba(63,94,251,0.2)" className="animate-pulse-slow opacity-50" />
      <circle cx="65" cy="65" r="5" fill="rgba(63,94,251,0.2)" className="animate-pulse-slow opacity-90" />
      
      {/* Connection lines */}
      <path d="M45 45 L35 35" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M40 50 L30 50" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M45 55 L35 65" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M55 45 L65 35" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M60 50 L70 50" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M55 55 L65 65" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
    </svg>
  </div>
);

// 5. Marketing Attribution Models Icon
export const AttributionModelIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Chart/graph base */}
      <rect x="30" y="30" width="40" height="40" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Attribution paths */}
      <path d="M35 65 L45 50 L55 45 L65 35" stroke="rgba(252,70,107,0.8)" strokeWidth="2" fill="none" 
        className="animate-dash-slow" />
      <path d="M35 65 L45 60 L55 55 L65 35" stroke="rgba(63,94,251,0.8)" strokeWidth="2" fill="none" 
        className="animate-dash-slow" />
      <path d="M35 65 L40 55 L50 40 L65 35" stroke="rgba(252,70,107,0.5)" strokeWidth="1.5" fill="none" 
        className="animate-dash-slow" />
      
      {/* Touchpoints */}
      <circle cx="35" cy="65" r="3" fill="rgba(63,94,251,1)" className="animate-pulse-slow" />
      <circle cx="45" cy="50" r="2" fill="rgba(252,70,107,1)" className="animate-pulse-slow" />
      <circle cx="55" cy="45" r="2" fill="rgba(252,70,107,1)" className="animate-pulse-slow" />
      <circle cx="65" cy="35" r="3" fill="rgba(63,94,251,1)" className="animate-pulse-slow" />
      <circle cx="45" cy="60" r="2" fill="rgba(63,94,251,0.8)" className="animate-pulse-slow" />
      <circle cx="55" cy="55" r="2" fill="rgba(63,94,251,0.8)" className="animate-pulse-slow" />
      <circle cx="40" cy="55" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      <circle cx="50" cy="40" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      
      {/* Data flow */}
      <path d="M25 50 C15 50, 15 65, 25 65" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="3 2" 
        className="animate-dash-slow" />
      <path d="M75 35 C85 35, 85 50, 75 50" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="3 2" 
        className="animate-dash-slow" />
    </svg>
  </div>
); 
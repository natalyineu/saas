import React from 'react';

/**
 * Collection of animated SVG illustrations for blog posts
 * Each illustration is designed to be lightweight, accessible, and visually engaging
 * with subtle animations that enhance the user experience without being distracting
 */

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
      
      <rect x="42" y="25" width="16" height="12" rx="1" stroke="rgba(63,94,251,0.4)" strokeWidth="1" strokeDasharray="2 1" fill="none" 
        className="animate-float-slow" />
      
      <circle cx="50" cy="20" r="4" stroke="rgba(252,70,107,0.4)" strokeWidth="1" strokeDasharray="2 1" fill="none" 
        className="animate-float-slow opacity-80" />
    </svg>
  </div>
);

// E-commerce Personalization Icon
export const EcommerceIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Shopping bag */}
      <path d="M35 40 L35 70 L65 70 L65 40 L55 40 L55 35 C55 30, 50 25, 50 25 C50 25, 45 30, 45 35 L45 40 Z" 
        fill="white" 
        stroke="rgba(63,94,251,1)" 
        strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Bag handle */}
      <path d="M45 40 L45 35 C45 30, 50 25, 50 25 C50 25, 55 30, 55 35 L55 40" 
        fill="none" 
        stroke="rgba(63,94,251,1)" 
        strokeWidth="2" />
      
      {/* Personalization elements */}
      <rect x="40" y="45" width="20" height="5" rx="1" fill="rgba(252,70,107,0.7)" className="animate-pulse-slow" />
      <rect x="40" y="55" width="15" height="5" rx="1" fill="rgba(252,70,107,0.5)" className="animate-pulse-slow opacity-80" />
      <rect x="40" y="65" width="18" height="1" fill="rgba(252,70,107,0.3)" />
      
      {/* User profile circle */}
      <circle cx="70" cy="30" r="5" fill="rgba(252,70,107,0.1)" stroke="rgba(252,70,107,1)" strokeWidth="1.5" />
      <circle cx="70" cy="27" r="1.5" fill="rgba(252,70,107,1)" />
      <path d="M65 33 C65 31, 67.5 29, 70 29 C72.5 29, 75 31, 75 33" stroke="rgba(252,70,107,1)" strokeWidth="1.5" fill="none" />
      
      {/* Connection between user and products */}
      <path d="M65 32 C60 35, 55 40, 50 45" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 1" 
        className="animate-pulse-slow" />
    </svg>
  </div>
);

// AI Content Creation Icon
export const AiContentIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Document with AI elements */}
      <rect x="30" y="30" width="40" height="45" rx="3" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Text lines being generated */}
      <line x1="35" y1="38" x2="65" y2="38" stroke="rgba(252,70,107,0.8)" strokeWidth="2" 
        className="animate-grow-x origin-left" />
      <line x1="35" y1="45" x2="60" y2="45" stroke="rgba(252,70,107,0.7)" strokeWidth="2" 
        className="animate-grow-x origin-left animation-delay-100" />
      <line x1="35" y1="52" x2="55" y2="52" stroke="rgba(252,70,107,0.6)" strokeWidth="2" 
        className="animate-grow-x origin-left animation-delay-200" />
      <line x1="35" y1="59" x2="65" y2="59" stroke="rgba(252,70,107,0.5)" strokeWidth="2" 
        className="animate-grow-x origin-left animation-delay-300" />
      <line x1="35" y1="66" x2="50" y2="66" stroke="rgba(252,70,107,0.4)" strokeWidth="2" 
        className="animate-grow-x origin-left animation-delay-400" />
      
      {/* AI element */}
      <circle cx="20" cy="35" r="4" fill="rgba(63,94,251,1)" className="animate-pulse-slow" />
      <circle cx="20" cy="55" r="4" fill="rgba(63,94,251,0.8)" className="animate-pulse-slow" />
      <circle cx="20" cy="75" r="4" fill="rgba(63,94,251,0.6)" className="animate-pulse-slow" />
      
      {/* AI to content connections */}
      <path d="M24 35 L35 38" stroke="rgba(63,94,251,0.7)" strokeWidth="1" className="animate-pulse-slow" />
      <path d="M24 55 L35 52" stroke="rgba(63,94,251,0.7)" strokeWidth="1" className="animate-pulse-slow" />
      <path d="M24 75 L35 66" stroke="rgba(63,94,251,0.7)" strokeWidth="1" className="animate-pulse-slow" />
    </svg>
  </div>
);

// UK Advertising Landscape Icon
export const UkLandscapeIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* UK outline map stylized */}
      <path d="M40 30 L45 32 L43 37 L47 40 L45 45 L40 50 L45 55 L40 60 L45 65 L50 67 L55 65 L60 70 L55 75 L45 75 L40 70 L38 65 L35 60 L38 55 L37 45 L40 30" 
        fill="white" 
        stroke="rgba(252,70,107,1)" 
        strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Major cities/advertising hubs */}
      <circle cx="45" cy="65" r="2" fill="rgba(63,94,251,1)" className="animate-pulse-slow" />
      <circle cx="40" cy="45" r="2" fill="rgba(63,94,251,1)" className="animate-pulse-slow opacity-80" />
      <circle cx="50" cy="55" r="2" fill="rgba(63,94,251,1)" className="animate-pulse-slow opacity-60" />
      
      {/* Digital connections */}
      <path d="M45 65 L40 45" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 1" />
      <path d="M40 45 L50 55" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 1" />
      <path d="M50 55 L45 65" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 1" />
      
      {/* 2024 marker */}
      <rect x="60" y="35" width="15" height="10" rx="2" fill="rgba(252,70,107,0.1)" stroke="rgba(252,70,107,1)" strokeWidth="1" />
      <text x="62" y="43" fill="rgba(252,70,107,1)" fontSize="7" fontWeight="bold">24</text>
    </svg>
  </div>
);

// Telegram Channel Strategy Icon
export const TelegramIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Telegram paper plane stylized */}
      <path d="M25 45 L75 30 L60 75 L40 55 Z" 
        fill="white" 
        stroke="rgba(63,94,251,1)" 
        strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      <path d="M40 55 L35 70 L45 60" 
        fill="white" 
        stroke="rgba(63,94,251,1)" 
        strokeWidth="2" />
      
      {/* Folding line */}
      <path d="M40 55 L75 30" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 1" />
      
      {/* Data/message content */}
      <rect x="45" y="40" width="15" height="3" rx="1" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      <rect x="45" y="45" width="10" height="3" rx="1" fill="rgba(252,70,107,0.6)" className="animate-pulse-slow opacity-80" />
      
      {/* Transmission waves */}
      <path d="M80 30 A 40 40 0 0 1 65 80" stroke="rgba(252,70,107,0.3)" strokeWidth="1" strokeDasharray="3 2" 
        className="animate-pulse-slow" />
      <path d="M75 35 A 30 30 0 0 1 60 75" stroke="rgba(252,70,107,0.4)" strokeWidth="1" strokeDasharray="2 2" 
        className="animate-pulse-slow opacity-80" />
      <path d="M70 40 A 20 20 0 0 1 55 70" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="1 2" 
        className="animate-pulse-slow opacity-60" />
    </svg>
  </div>
);

// Add any missing animations to tailwind.config.js to support these animations
const AnimationNote = () => {
  return null; // This is just a note, not a component
  /* 
    Add these animations to tailwind.config.js:
    
    animations: {
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      'spin-slow': 'spin 8s linear infinite',
      'float-slow': 'float 5s ease-in-out infinite',
      'grow-x': 'growX 2s ease-out forwards',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      growX: {
        '0%': { transform: 'scaleX(0)' },
        '100%': { transform: 'scaleX(1)' },
      },
    },
  */
}; 
import React from 'react';

/**
 * Blog case study icons using the same style as the main CaseStudyIcons
 * These are simplified versions that match the homepage style
 */
export const BlogCoffeeShopIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
        <rect x="35" y="25" width="30" height="10" rx="5" fill="rgba(252,70,107,1)" />
        <path d="M30 60 L70 60" stroke="rgba(63,94,251,1)" strokeWidth="3" />
        <path d="M40 50 C40 40, 60 40, 60 50" stroke="rgba(63,94,251,1)" strokeWidth="3" fill="none" />
        <path d="M30 70 L40 60 L60 60 L70 70" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
      </g>
    </svg>
  </div>
);

export const BlogRestaurantIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="50" cy="50" r="40" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Restaurant plate */}
      <circle cx="50" cy="50" r="30" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" className="transform transition-transform duration-500 group-hover:scale-105" />
      
      {/* Fork and knife */}
      <path d="M35 30 L35 70" stroke="rgba(252,70,107,1)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 30 C40 40, 38 50, 40 70" stroke="rgba(252,70,107,1)" strokeWidth="2.5" strokeLinecap="round" />
      
      <path d="M65 30 L65 40 C65 45, 60 50, 65 55 L65 70" stroke="rgba(63,94,251,1)" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Food on plate */}
      <circle cx="50" cy="50" r="12" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow" />
      <path d="M44 48 C47 44, 53 44, 56 48" stroke="rgba(63,94,251,1)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 52 C47 56, 53 56, 56 52" stroke="rgba(63,94,251,1)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

export const BlogFashionIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className="transform transition-transform duration-500 group-hover:scale-105" x="25" y="30" width="50" height="40" rx="4" fill="rgba(252,70,107,0.8)" />
      <rect className="transform origin-top transition-transform duration-500 group-hover:scale-y-105" x="30" y="35" width="40" height="30" rx="2" fill="white" />
      <rect className="transition-colors duration-500 group-hover:fill-purple-600" x="30" y="35" width="40" height="7" rx="1" fill="rgba(63,94,251,1)" />
      <rect className="animate-pulse-slow" x="33" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
      <rect className="animate-pulse-slow" x="45" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
      <rect className="animate-pulse-slow" x="57" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
      <text className="animate-pulse-slow" x="80" y="40" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
      <text className="animate-pulse-slow" x="20" y="40" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
      <text className="animate-pulse-slow" x="80" y="60" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
      <text className="animate-pulse-slow" x="20" y="60" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
    </svg>
  </div>
);

// Additional icons for other blog posts in the same style
export const BlogAiTechIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" className="animate-pulse-slow" />
      
      {/* Brain circuit representation */}
      <path d="M30 50 C30 40, 40 30, 50 30 C60 30, 70 40, 70 50 C70 60, 60 70, 50 70 C40 70, 30 60, 30 50" 
        fill="none" 
        stroke="rgba(252,70,107,1)" 
        strokeWidth="2" 
        className="transform transition-transform duration-700 origin-center" 
      />
      
      {/* Circuit nodes */}
      <circle cx="50" cy="30" r="3" fill="rgba(63,94,251,1)" />
      <circle cx="30" cy="50" r="3" fill="rgba(63,94,251,1)" />
      <circle cx="50" cy="70" r="3" fill="rgba(63,94,251,1)" />
      <circle cx="70" cy="50" r="3" fill="rgba(63,94,251,1)" />
      
      {/* Inner connections */}
      <path d="M50 30 L30 50 L50 70 L70 50 L50 30" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" />
      <path d="M40 40 L60 40 L60 60 L40 60 L40 40" stroke="rgba(252,70,107,0.8)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="5" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
    </svg>
  </div>
);

export const BlogPrivacyIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" className="animate-pulse-slow" />
      
      {/* Shield */}
      <path d="M35 40 L50 30 L65 40 L65 60 C65 65, 60 70, 50 75 C40 70, 35 65, 35 60 L35 40" 
        fill="white" 
        stroke="rgba(252,70,107,1)" 
        strokeWidth="2" 
        className="transform transition-transform duration-500 group-hover:scale-105" 
      />
      
      {/* Lock */}
      <rect x="43" y="50" width="14" height="14" rx="2" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <path d="M47 50 L47 45 C47 42, 48 40, 50 40 C52 40, 53 42, 53 45 L53 50" stroke="rgba(63,94,251,1)" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="56" r="2" fill="rgba(252,70,107,1)" />
    </svg>
  </div>
);

export const BlogSocialMediaIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" className="animate-pulse-slow" />
      
      {/* Social network representation */}
      <circle cx="50" cy="50" r="8" fill="rgba(252,70,107,1)" className="animate-pulse-slow" />
      
      <circle cx="30" cy="35" r="5" fill="rgba(63,94,251,1)" />
      <circle cx="70" cy="35" r="5" fill="rgba(63,94,251,1)" />
      <circle cx="30" cy="65" r="5" fill="rgba(63,94,251,1)" />
      <circle cx="70" cy="65" r="5" fill="rgba(63,94,251,1)" />
      
      <path d="M50 50 L30 35" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M50 50 L70 35" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M50 50 L30 65" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M50 50 L70 65" stroke="rgba(63,94,251,1)" strokeWidth="2" />
    </svg>
  </div>
);

export const BlogMetaverseIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" className="animate-pulse-slow" />
      
      {/* VR headset */}
      <rect x="30" y="40" width="40" height="25" rx="10" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="2" className="transform transition-transform duration-500 group-hover:scale-105" />
      
      <rect x="35" y="45" width="10" height="15" rx="2" fill="rgba(63,94,251,0.3)" />
      <rect x="55" y="45" width="10" height="15" rx="2" fill="rgba(63,94,251,0.3)" />
      
      {/* Straps */}
      <path d="M30 50 C25 50, 20 45, 20 40 C20 35, 25 30, 30 30" stroke="rgba(252,70,107,1)" strokeWidth="1.5" fill="none" />
      <path d="M70 50 C75 50, 80 45, 80 40 C80 35, 75 30, 70 30" stroke="rgba(252,70,107,1)" strokeWidth="1.5" fill="none" />
      
      {/* Virtual world elements */}
      <rect x="42" y="25" width="16" height="10" rx="1" stroke="rgba(63,94,251,0.6)" strokeWidth="1" strokeDasharray="2 1" fill="none" />
      <circle cx="50" cy="20" r="5" stroke="rgba(63,94,251,0.6)" strokeWidth="1" strokeDasharray="2 1" fill="none" />
    </svg>
  </div>
);

export const BlogAnalyticsIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" className="animate-pulse-slow" />
      
      {/* Data visualization */}
      <rect x="30" y="30" width="40" height="40" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="1.5" rx="2" />
      
      {/* Bar chart */}
      <rect x="35" y="55" width="5" height="10" fill="rgba(252,70,107,1)" />
      <rect x="45" y="50" width="5" height="15" fill="rgba(252,70,107,1)" />
      <rect x="55" y="40" width="5" height="25" fill="rgba(252,70,107,1)" />
      <rect x="65" y="45" width="5" height="20" fill="rgba(252,70,107,1)" />
      
      {/* Trend line */}
      <path d="M35 40 L45 35 L55 30 L65 35" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" strokeDasharray="1 1" />
      <circle cx="35" cy="40" r="2" fill="rgba(63,94,251,1)" />
      <circle cx="45" cy="35" r="2" fill="rgba(63,94,251,1)" />
      <circle cx="55" cy="30" r="2" fill="rgba(63,94,251,1)" />
      <circle cx="65" cy="35" r="2" fill="rgba(63,94,251,1)" />
    </svg>
  </div>
);

export const BlogStrategyIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" className="animate-pulse-slow" />
      
      {/* Chess board simplified */}
      <rect x="30" y="30" width="40" height="40" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="1.5" />
      
      {/* Chess board pattern */}
      <rect x="30" y="30" width="10" height="10" fill="rgba(252,70,107,0.1)" />
      <rect x="50" y="30" width="10" height="10" fill="rgba(252,70,107,0.1)" />
      <rect x="40" y="40" width="10" height="10" fill="rgba(252,70,107,0.1)" />
      <rect x="60" y="40" width="10" height="10" fill="rgba(252,70,107,0.1)" />
      <rect x="30" y="50" width="10" height="10" fill="rgba(252,70,107,0.1)" />
      <rect x="50" y="50" width="10" height="10" fill="rgba(252,70,107,0.1)" />
      <rect x="40" y="60" width="10" height="10" fill="rgba(252,70,107,0.1)" />
      <rect x="60" y="60" width="10" height="10" fill="rgba(252,70,107,0.1)" />
      
      {/* Chess pieces */}
      <circle cx="35" cy="35" r="3" fill="rgba(63,94,251,1)" />
      <polygon points="55,65 60,60 65,65 60,70" fill="rgba(63,94,251,1)" />
    </svg>
  </div>
);

export const BlogDefaultIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" className="animate-pulse-slow" />
      
      {/* Document/article representation */}
      <rect x="35" y="30" width="30" height="40" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="2" rx="2" />
      
      {/* Text lines */}
      <line x1="40" y1="40" x2="60" y2="40" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <line x1="40" y1="45" x2="60" y2="45" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <line x1="40" y1="50" x2="55" y2="50" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <line x1="40" y1="55" x2="60" y2="55" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <line x1="40" y1="60" x2="50" y2="60" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
    </svg>
  </div>
); 
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

// Default document icon for blog posts without a specific icon
export const BlogDefaultIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" className="animate-pulse-slow" />
      
      {/* Document with folded corner */}
      <path d="M35 30 L65 30 L65 70 L35 70 Z" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" />
      <path d="M65 30 L65 40 L55 30" fill="rgba(252,70,107,0.2)" stroke="rgba(252,70,107,1)" strokeWidth="1" />
      
      {/* Document lines */}
      <path d="M40 40 L60 40" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <path d="M40 45 L60 45" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" />
      <path d="M40 50 L60 50" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" />
      <path d="M40 55 L55 55" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" />
      <path d="M40 60 L50 60" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" />
    </svg>
  </div>
); 
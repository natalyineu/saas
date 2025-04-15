import React from 'react';

type IconType = 'coffee-shop' | 'restaurant' | 'boutique';

interface CaseStudyIconProps {
  type: IconType;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
  badgeValue?: string;
}

/**
 * A reusable component for case study icons to avoid duplication across components
 */
export default function CaseStudyIcon({ 
  type, 
  size = 'md', 
  showBadge = true, 
  badgeValue 
}: CaseStudyIconProps) {
  // Set the size based on the prop
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };
  
  // Set badge size based on the icon size
  const badgeClasses = {
    sm: 'text-[8px] px-1.5 py-0.5 top-0 right-0',
    md: 'text-xs px-2 py-1 top-0 right-0',
    lg: 'text-xs font-bold px-2 py-1 top-0 right-0'
  };
  
  // Default badge values for each icon type
  const defaultBadgeValues = {
    'coffee-shop': '+143%',
    'restaurant': '+87%',
    'boutique': '+215%'
  };

  // Use the provided badge value or the default one
  const badge = badgeValue || defaultBadgeValues[type];
  
  const renderIcon = () => {
    switch (type) {
      case 'coffee-shop':
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
            <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
              <rect x="35" y="25" width="30" height="10" rx="5" fill="rgba(252,70,107,1)" />
              <path d="M30 60 L70 60" stroke="rgba(63,94,251,1)" strokeWidth="3" />
              <path d="M40 50 C40 40, 60 40, 60 50" stroke="rgba(63,94,251,1)" strokeWidth="3" fill="none" />
              <path d="M30 70 L40 60 L60 60 L70 70" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
            </g>
          </svg>
        );
      
      case 'restaurant':
        return (
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
        );
        
      case 'boutique':
        return (
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
        );
        
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${sizeClasses[size]} transform transition-transform duration-500 group-hover:scale-110`}>
      {renderIcon()}
      
      {showBadge && (
        <div className={`absolute bg-green-500 text-white font-medium rounded-full transform shadow-lg ${badgeClasses[size]}`}>
          {badge}
        </div>
      )}
    </div>
  );
} 
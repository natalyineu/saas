import React from 'react';

// Simple E-commerce Icon (Shopping/Fashion)
export const SimpleEcommerceIcon = () => (
  <div className="relative w-full h-full">
    <svg viewBox="0 0 100 100" className="absolute inset-0">
      <rect x="25" y="25" width="50" height="50" rx="4" fill="#FF87B2" stroke="#FFF" strokeWidth="2" />
      <rect x="35" y="35" width="30" height="30" rx="2" fill="#FFF" />
      <line x1="35" y1="45" x2="65" y2="45" stroke="#FF87B2" strokeWidth="2" />
      <line x1="35" y1="55" x2="65" y2="55" stroke="#FF87B2" strokeWidth="2" />
      <circle cx="65" cy="25" r="8" fill="#6366F1" />
      <text x="65" y="28" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="bold">$</text>
    </svg>
  </div>
);

// Simple Restaurant Icon
export const SimpleRestaurantIcon = () => (
  <div className="relative w-full h-full">
    <svg viewBox="0 0 100 100" className="absolute inset-0">
      <circle cx="50" cy="50" r="35" fill="#818CF8" stroke="#FFF" strokeWidth="2" />
      <line x1="30" y1="50" x2="70" y2="50" stroke="#FFF" strokeWidth="2" />
      <line x1="40" y1="40" x2="60" y2="40" stroke="#FFF" strokeWidth="2" />
      <line x1="40" y1="60" x2="60" y2="60" stroke="#FFF" strokeWidth="2" />
      <rect x="45" y="30" width="10" height="40" rx="2" fill="#FFF" />
    </svg>
  </div>
);

// Simple Coffee Shop Icon
export const SimpleCoffeeIcon = () => (
  <div className="relative w-full h-full">
    <svg viewBox="0 0 100 100" className="absolute inset-0">
      <rect x="30" y="30" width="40" height="40" rx="4" fill="#10B981" stroke="#FFF" strokeWidth="2" />
      <path d="M30 45 L70 45" stroke="#FFF" strokeWidth="2" />
      <path d="M40 30 L40 70" stroke="#FFF" strokeWidth="2" />
      <path d="M60 30 L60 70" stroke="#FFF" strokeWidth="2" />
      <circle cx="50" cy="50" r="10" fill="#FFF" />
      <circle cx="50" cy="50" r="5" fill="#10B981" />
    </svg>
  </div>
);

// Simple Success Icon (Default)
export const SimpleSuccessIcon = () => (
  <div className="relative w-full h-full">
    <svg viewBox="0 0 100 100" className="absolute inset-0">
      <rect x="25" y="25" width="50" height="50" rx="25" fill="#8B5CF6" stroke="#FFF" strokeWidth="2" />
      <path d="M40 50 L45 55 L60 40" stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
); 
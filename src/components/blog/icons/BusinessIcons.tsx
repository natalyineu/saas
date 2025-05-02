import React from 'react';

// Coffee Shop Icon with detailed coffee elements
export const CoffeeCupIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4263EB" />
          <stop offset="100%" stopColor="#EB429E" />
        </linearGradient>
        <radialGradient id="steamGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      
      {/* Coffee shop storefront */}
      <rect x="25" y="40" width="50" height="35" rx="2" fill="white" stroke="url(#coffeeGradient)" strokeWidth="2" />
      
      {/* Awning */}
      <path d="M20 40 L50 30 L80 40" stroke="#4263EB" strokeWidth="2" fill="none" />
      <path d="M25 40 L50 32 L75 40" stroke="#EB429E" strokeWidth="1" fill="none" strokeDasharray="2 1" />
      
      {/* Door */}
      <rect x="40" y="55" width="20" height="20" rx="1" fill="rgba(66,99,235,0.2)" />
      <circle cx="55" cy="65" r="2" fill="#4263EB" />
      
      {/* Window with coffee cup */}
      <rect x="30" y="45" width="15" height="15" rx="1" fill="rgba(66,99,235,0.1)" />
      <path d="M35 52 L35 57 C35 58, 37 59, 40 59 C43 59, 45 58, 45 57 L45 52 Z" fill="#EB429E" fillOpacity="0.7" stroke="#4263EB" strokeWidth="1" />
      <path d="M45 54 Q48 54, 48 51 Q48 48, 45 48" stroke="#4263EB" strokeWidth="1" fill="none" />
      
      {/* Steam from cup */}
      <path d="M37 50 Q38 48, 39 50 Q40 48, 41 50" stroke="rgba(255,255,255,0.8)" strokeWidth="1" className="animate-float-delay" />
      
      {/* Sign */}
      <rect x="55" y="48" width="15" height="10" rx="1" fill="rgba(252,70,107,0.15)" />
      <path d="M58 53 L67 53" stroke="#EB429E" strokeWidth="1" />
      <path d="M60 50 L65 50" stroke="#EB429E" strokeWidth="1" />
      <path d="M62 56 L64 56" stroke="#EB429E" strokeWidth="1" />
    </svg>
  </div>
);

// Italian Restaurant Icon with detailed food elements
export const RestaurantIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="restaurantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4263EB" />
          <stop offset="100%" stopColor="#EB429E" />
        </linearGradient>
      </defs>
      
      {/* Plate */}
      <circle cx="50" cy="55" r="25" fill="white" stroke="url(#restaurantGradient)" strokeWidth="2" />
      <circle cx="50" cy="55" r="22" fill="none" stroke="rgba(235,66,158,0.3)" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* Pizza */}
      <circle cx="50" cy="55" r="18" fill="rgba(252,176,69,0.2)" stroke="#EB429E" strokeWidth="1" />
      
      {/* Pizza slices */}
      <path d="M50 55 L65 45" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      <path d="M50 55 L70 55" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      <path d="M50 55 L65 65" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      <path d="M50 55 L55 73" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      <path d="M50 55 L40 73" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      <path d="M50 55 L30 65" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      <path d="M50 55 L30 55" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      <path d="M50 55 L35 45" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      
      {/* Toppings */}
      <circle cx="58" cy="50" r="2" fill="#EB429E" />
      <circle cx="45" cy="60" r="2" fill="#EB429E" />
      <circle cx="60" cy="63" r="2" fill="#EB429E" />
      <circle cx="40" cy="50" r="2" fill="#EB429E" />
      
      {/* Utensils */}
      <path d="M75 30 L75 50" stroke="#4263EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M75 50 Q71 55, 75 60" stroke="#4263EB" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M25 30 L25 60" stroke="#4263EB" strokeWidth="2" strokeLinecap="round" />
      <circle cx="25" cy="30" r="3" fill="#4263EB" />
    </svg>
  </div>
);

// Fashion/E-commerce Icon with clothing and shopping elements
export const FashionIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="fashionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EB429E" />
          <stop offset="100%" stopColor="#4263EB" />
        </linearGradient>
      </defs>
      
      {/* Clothing rack */}
      <path d="M25 40 L75 40" stroke="#4263EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 40 L30 35" stroke="#4263EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 40 L70 35" stroke="#4263EB" strokeWidth="2" strokeLinecap="round" />
      
      {/* Clothing items */}
      <path d="M35 40 L35 50 L40 55 L50 55 L55 50 L55 40" fill="none" stroke="#EB429E" strokeWidth="1.5" /> {/* Dress */}
      <path d="M35 43 L55 43" stroke="#EB429E" strokeWidth="1" />
      
      <path d="M60 40 L60 55" stroke="#4263EB" strokeWidth="1.5" /> {/* Shirt */}
      <path d="M60 45 L65 45 L65 55" stroke="#4263EB" strokeWidth="1.5" />
      <path d="M60 45 L55 45 L55 55" stroke="#4263EB" strokeWidth="1.5" />
      
      {/* Shopping bag */}
      <path d="M35 65 L45 65 L45 75 L35 75 Z" fill="white" stroke="url(#fashionGradient)" strokeWidth="1.5" />
      <path d="M35 65 L35 60 L45 60 L45 65" fill="none" stroke="url(#fashionGradient)" strokeWidth="1.5" />
      <path d="M38 60 L38 55" stroke="url(#fashionGradient)" strokeWidth="1.5" />
      <path d="M42 60 L42 55" stroke="url(#fashionGradient)" strokeWidth="1.5" />
      
      {/* Price tag */}
      <rect x="55" y="65" width="15" height="10" rx="2" fill="rgba(252,70,107,0.2)" stroke="#EB429E" strokeWidth="1" />
      <path d="M58 70 L67 70" stroke="#EB429E" strokeWidth="1" strokeDasharray="1 1" />
      <circle cx="60" cy="67" r="1" fill="#EB429E" />
    </svg>
  </div>
); 
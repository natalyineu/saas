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

// Marketing Dashboard Icon
export const DashboardIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Dashboard screen */}
      <rect x="30" y="30" width="40" height="35" rx="2" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Dashboard stand */}
      <path d="M45 65 L55 65 L55 70 L45 70 Z" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      
      {/* Dashboard charts and metrics */}
      <rect x="35" y="35" width="14" height="10" rx="1" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow" />
      <path d="M37 40 L41 38 L45 42" stroke="rgba(252,70,107,1)" strokeWidth="1" fill="none" />
      
      <rect x="51" y="35" width="14" height="10" rx="1" fill="rgba(63,94,251,0.2)" className="animate-pulse-slow" />
      <circle cx="58" cy="40" r="3" stroke="rgba(63,94,251,1)" strokeWidth="1" fill="none" />
      <path d="M56 40 L60 40" stroke="rgba(63,94,251,1)" strokeWidth="1" />
      <path d="M58 38 L58 42" stroke="rgba(63,94,251,1)" strokeWidth="1" />
      
      <rect x="35" y="48" width="30" height="6" rx="1" fill="rgba(252,70,107,0.1)" className="animate-pulse-slow opacity-70" />
      <rect x="37" y="50" width="20" height="2" rx="1" fill="rgba(252,70,107,0.5)" className="animate-pulse-slow" />
      
      <rect x="35" y="57" width="30" height="6" rx="1" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow opacity-80" />
      <rect x="37" y="59" width="15" height="2" rx="1" fill="rgba(63,94,251,0.5)" className="animate-pulse-slow" />
      
      {/* Data flow */}
      <path d="M20 45 L30 45" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 2" 
        className="animate-dash-slow" />
      <path d="M70 45 L80 45" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 2" 
        className="animate-dash-slow" />
    </svg>
  </div>
);

// Singapore Marketing Icon
export const SingaporeIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Singapore skyline simplified */}
      <path d="M25 60 L35 60 L35 50 L40 45 L45 50 L45 40 L50 35 L55 40 L55 45 L60 35 L65 45 L65 50 L70 50 L75 60" 
        fill="none" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Marina Bay Sands simplified */}
      <rect x="45" y="45" width="10" height="15" rx="1" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <path d="M40 45 L60 45" stroke="rgba(63,94,251,1)" strokeWidth="1.5" fill="none" />
      
      {/* Digital elements overlaid on skyline */}
      <path d="M30 40 L35 40" stroke="rgba(252,70,107,0.7)" strokeWidth="1.5" 
        className="animate-pulse-slow" />
      <path d="M55 30 L60 30" stroke="rgba(252,70,107,0.7)" strokeWidth="1.5" 
        className="animate-pulse-slow opacity-80" />
      <path d="M70 40 L75 40" stroke="rgba(252,70,107,0.7)" strokeWidth="1.5" 
        className="animate-pulse-slow opacity-60" />
      
      {/* Mobile/digital representation */}
      <rect x="30" y="65" width="40" height="8" rx="4" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="1.5" />
      <circle cx="35" cy="69" r="2" fill="rgba(252,70,107,0.5)" />
      <circle cx="42" cy="69" r="2" fill="rgba(252,70,107,0.5)" />
      <circle cx="49" cy="69" r="2" fill="rgba(252,70,107,0.5)" />
      <circle cx="56" cy="69" r="2" fill="rgba(252,70,107,0.5)" />
      <circle cx="63" cy="69" r="2" fill="rgba(252,70,107,0.5)" />
      
      {/* Merlion suggestion */}
      <circle cx="25" cy="55" r="3" fill="white" stroke="rgba(63,94,251,0.7)" strokeWidth="1" />
    </svg>
  </div>
);

// AI Marketing Agents Icon
export const AiAgentIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Robot/Agent head */}
      <rect x="40" y="30" width="20" height="25" rx="5" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Robot eyes */}
      <circle cx="45" cy="40" r="3" fill="rgba(252,70,107,0.7)" className="animate-pulse-slow" />
      <circle cx="55" cy="40" r="3" fill="rgba(252,70,107,0.7)" className="animate-pulse-slow" />
      
      {/* Robot mouth/speaker */}
      <rect x="45" y="48" width="10" height="2" rx="1" fill="rgba(63,94,251,0.7)" />
      
      {/* Robot antennas */}
      <path d="M45 30 L40 25" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <circle cx="40" cy="25" r="2" fill="rgba(252,70,107,0.7)" className="animate-pulse-slow" />
      
      <path d="M55 30 L60 25" stroke="rgba(63,94,251,1)" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="2" fill="rgba(252,70,107,0.7)" className="animate-pulse-slow" />
      
      {/* Marketing connections */}
      <path d="M35 60 C25 50, 20 40, 30 30" stroke="rgba(252,70,107,0.5)" strokeWidth="1.5" strokeDasharray="2 2" 
        className="animate-dash-slow" fill="none" />
      <path d="M65 60 C75 50, 80 40, 70 30" stroke="rgba(252,70,107,0.5)" strokeWidth="1.5" strokeDasharray="2 2" 
        className="animate-dash-slow" fill="none" />
      
      {/* Agent connections to marketing channels */}
      <rect x="25" y="60" width="10" height="8" rx="1" fill="white" stroke="rgba(63,94,251,0.7)" strokeWidth="1" />
      <text x="27" y="66" fill="rgba(63,94,251,1)" fontSize="5">A</text>
      
      <rect x="45" y="65" width="10" height="8" rx="1" fill="white" stroke="rgba(63,94,251,0.7)" strokeWidth="1" />
      <text x="47" y="71" fill="rgba(63,94,251,1)" fontSize="5">B</text>
      
      <rect x="65" y="60" width="10" height="8" rx="1" fill="white" stroke="rgba(63,94,251,0.7)" strokeWidth="1" />
      <text x="67" y="66" fill="rgba(63,94,251,1)" fontSize="5">C</text>
      
      {/* Data processing circuits */}
      <path d="M40 55 L60 55" stroke="rgba(252,70,107,1)" strokeWidth="1" strokeDasharray="1 1" className="animate-dash-slow" />
      <path d="M50 55 L50 65" stroke="rgba(252,70,107,1)" strokeWidth="1" strokeDasharray="1 1" className="animate-dash-slow" />
    </svg>
  </div>
);

// China Marketing Icon
export const ChinaIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Great Wall suggestion */}
      <path d="M25 45 C30 40, 35 45, 40 40 C45 35, 50 40, 55 35 C60 30, 65 35, 70 30 C75 25, 80 30, 75 35" 
        fill="none" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Chinese character suggestion (simplified) */}
      <path d="M45 50 L55 50" stroke="rgba(252,70,107,1)" strokeWidth="2" />
      <path d="M50 45 L50 60" stroke="rgba(252,70,107,1)" strokeWidth="2" />
      <path d="M45 55 L55 55" stroke="rgba(252,70,107,1)" strokeWidth="2" />
      
      {/* Digital platforms */}
      <circle cx="35" cy="65" r="5" fill="white" stroke="rgba(63,94,251,0.8)" strokeWidth="1.5" />
      <text x="33" y="67" fill="rgba(63,94,251,1)" fontSize="4">W</text>
      
      <circle cx="50" cy="70" r="5" fill="white" stroke="rgba(63,94,251,0.8)" strokeWidth="1.5" />
      <text x="49" y="72" fill="rgba(63,94,251,1)" fontSize="4">T</text>
      
      <circle cx="65" cy="65" r="5" fill="white" stroke="rgba(63,94,251,0.8)" strokeWidth="1.5" />
      <text x="63" y="67" fill="rgba(63,94,251,1)" fontSize="4">B</text>
      
      {/* Connection lines between platforms */}
      <path d="M35 60 L40 55" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M50 65 L50 60" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M65 60 L60 55" stroke="rgba(252,70,107,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      
      {/* Mobile device */}
      <rect x="43" y="25" width="14" height="20" rx="2" fill="white" stroke="rgba(252,70,107,0.8)" strokeWidth="1.5" />
      <rect x="45" y="28" width="10" height="14" rx="1" fill="rgba(252,70,107,0.1)" />
    </svg>
  </div>
);

// Media Planning Metrics Icon
export const MediaMetricsIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Clipboard base */}
      <rect x="35" y="30" width="30" height="40" rx="2" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Clipboard top */}
      <path d="M45 30 C45 25, 55 25, 55 30" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
      
      {/* Chart/metrics elements */}
      <rect x="40" y="35" width="20" height="8" rx="1" fill="rgba(252,70,107,0.1)" />
      <path d="M42 39 L47 36 L52 41 L57 38" stroke="rgba(252,70,107,0.8)" strokeWidth="1.5" fill="none" 
        className="animate-dash-slow" />
      
      {/* Key metrics */}
      <rect x="40" y="45" width="8" height="3" rx="1" fill="rgba(63,94,251,0.2)" />
      <rect x="50" y="45" width="10" height="3" rx="1" fill="rgba(252,70,107,0.2)" />
      
      <rect x="40" y="50" width="8" height="3" rx="1" fill="rgba(63,94,251,0.2)" />
      <rect x="50" y="50" width="10" height="3" rx="1" fill="rgba(252,70,107,0.2)" />
      
      <rect x="40" y="55" width="8" height="3" rx="1" fill="rgba(63,94,251,0.2)" />
      <rect x="50" y="55" width="10" height="3" rx="1" fill="rgba(252,70,107,0.2)" />
      
      <rect x="40" y="60" width="8" height="3" rx="1" fill="rgba(63,94,251,0.2)" />
      <rect x="50" y="60" width="10" height="3" rx="1" fill="rgba(252,70,107,0.2)" />
      
      {/* Media channels */}
      <circle cx="25" cy="35" r="3" fill="rgba(63,94,251,0.5)" className="animate-pulse-slow" />
      <circle cx="25" cy="45" r="3" fill="rgba(63,94,251,0.5)" className="animate-pulse-slow opacity-80" />
      <circle cx="25" cy="55" r="3" fill="rgba(63,94,251,0.5)" className="animate-pulse-slow opacity-60" />
      <circle cx="25" cy="65" r="3" fill="rgba(63,94,251,0.5)" className="animate-pulse-slow opacity-90" />
      
      {/* Connections from channels to metrics */}
      <path d="M28 35 L35 35" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M28 45 L35 45" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M28 55 L35 55" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M28 65 L35 65" stroke="rgba(63,94,251,0.5)" strokeWidth="1" strokeDasharray="2 2" className="animate-dash-slow" />
      
      {/* Results indicators */}
      <path d="M65 35 L75 35" stroke="rgba(252,70,107,0.5)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-dash-slow" />
      <circle cx="75" cy="35" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      
      <path d="M65 45 L75 45" stroke="rgba(252,70,107,0.5)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-dash-slow" />
      <circle cx="75" cy="45" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      
      <path d="M65 55 L75 55" stroke="rgba(252,70,107,0.5)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-dash-slow" />
      <circle cx="75" cy="55" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      
      <path d="M65 65 L75 65" stroke="rgba(252,70,107,0.5)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-dash-slow" />
      <circle cx="75" cy="65" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
    </svg>
  </div>
); 
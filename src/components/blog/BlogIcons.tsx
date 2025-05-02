import React from 'react';

// Social Media Icon - Redesigned with connected platforms theme
export const SocialMediaIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4263EB" />
          <stop offset="100%" stopColor="#EB429E" />
        </linearGradient>
      </defs>
      {/* Central hub with connecting nodes representing social platforms */}
      <circle cx="50" cy="50" r="10" fill="url(#socialGradient)" className="transform origin-center transition-transform duration-700" />
      
      {/* Platform nodes with connecting lines */}
      <circle cx="30" cy="30" r="8" fill="rgba(252,70,107,0.8)" className="transform origin-center transition-transform duration-700 animate-float" />
      <path d="M40 40 L33 33" stroke="url(#socialGradient)" strokeWidth="2" strokeLinecap="round" />
      
      <circle cx="70" cy="30" r="8" fill="rgba(66,99,235,0.8)" className="transform origin-center transition-transform duration-700 animate-float-delay" />
      <path d="M60 40 L67 33" stroke="url(#socialGradient)" strokeWidth="2" strokeLinecap="round" />
      
      <circle cx="30" cy="70" r="8" fill="rgba(66,99,235,0.8)" className="transform origin-center transition-transform duration-700 animate-float-delay-long" />
      <path d="M40 60 L33 67" stroke="url(#socialGradient)" strokeWidth="2" strokeLinecap="round" />
      
      <circle cx="70" cy="70" r="8" fill="rgba(252,70,107,0.8)" className="transform origin-center transition-transform duration-700 animate-float" />
      <path d="M60 60 L67 67" stroke="url(#socialGradient)" strokeWidth="2" strokeLinecap="round" />
      
      {/* User icon in center */}
      <circle cx="50" cy="50" r="15" fill="none" stroke="url(#socialGradient)" strokeWidth="2" />
      <circle cx="50" cy="45" r="5" fill="url(#socialGradient)" />
      <path d="M40 58 C40 52, 60 52, 60 58" stroke="url(#socialGradient)" strokeWidth="2" fill="none" />
    </svg>
  </div>
);

// Detailed Article Icon
export const DocumentIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EB429E" />
          <stop offset="100%" stopColor="#4263EB" />
        </linearGradient>
      </defs>
      {/* Main document */}
      <rect x="30" y="25" width="40" height="50" rx="4" stroke="url(#docGradient)" strokeWidth="2" fill="rgba(255,255,255,0.8)" className="transform origin-center transition-transform duration-700 group-hover:scale-105" />
      
      {/* Document details */}
      <rect x="36" y="32" width="28" height="4" rx="1" fill="#EB429E" fillOpacity="0.7" />
      <rect x="36" y="40" width="18" height="3" rx="1" fill="#4263EB" fillOpacity="0.5" />
      <rect x="36" y="46" width="22" height="3" rx="1" fill="#4263EB" fillOpacity="0.5" />
      <rect x="36" y="52" width="15" height="3" rx="1" fill="#4263EB" fillOpacity="0.5" />
      <rect x="36" y="58" width="20" height="3" rx="1" fill="#4263EB" fillOpacity="0.5" />
      <rect x="36" y="64" width="12" height="3" rx="1" fill="#4263EB" fillOpacity="0.5" />
      
      {/* Bookmark */}
      <path d="M60 25 V35 L65 30 L70 35 V25" fill="#EB429E" className="animate-pulse-slow" />
    </svg>
  </div>
);

// Coffee Shop Icon with more detailed coffee elements
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

// Analytics and Data Icon with detailed charts
export const AnalyticsIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="analyticsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4263EB" />
          <stop offset="100%" stopColor="#EB429E" />
        </linearGradient>
      </defs>
      
      {/* Dashboard frame */}
      <rect x="20" y="25" width="60" height="50" rx="3" fill="white" stroke="url(#analyticsGradient)" strokeWidth="2" />
      
      {/* Graphs and charts */}
      <rect x="25" y="30" width="30" height="20" rx="2" fill="rgba(66,99,235,0.1)" />
      <polyline points="28,45 33,38 38,42 43,35 48,40 53,33" fill="none" stroke="#4263EB" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Pie chart */}
      <circle cx="70" cy="40" r="10" fill="none" stroke="#EB429E" strokeWidth="1.5" />
      <path d="M70 40 L70 30 A10 10 0 0 1 78 44" fill="rgba(235,66,158,0.3)" stroke="#EB429E" strokeWidth="1.5" />
      
      {/* Bar chart */}
      <rect x="25" y="55" width="5" height="15" rx="1" fill="rgba(66,99,235,0.7)" className="transform origin-bottom transition-transform duration-500 group-hover:scale-y-110" />
      <rect x="35" y="60" width="5" height="10" rx="1" fill="rgba(66,99,235,0.5)" className="transform origin-bottom transition-transform duration-500 group-hover:scale-y-110" />
      <rect x="45" y="58" width="5" height="12" rx="1" fill="rgba(66,99,235,0.7)" className="transform origin-bottom transition-transform duration-500 group-hover:scale-y-110" />
      <rect x="55" y="53" width="5" height="17" rx="1" fill="rgba(235,66,158,0.7)" className="transform origin-bottom transition-transform duration-500 group-hover:scale-y-110" />
      <rect x="65" y="62" width="5" height="8" rx="1" fill="rgba(235,66,158,0.5)" className="transform origin-bottom transition-transform duration-500 group-hover:scale-y-110" />
      <rect x="75" y="57" width="5" height="13" rx="1" fill="rgba(235,66,158,0.7)" className="transform origin-bottom transition-transform duration-500 group-hover:scale-y-110" />
    </svg>
  </div>
);

// Strategy/Planning Icon with detailed elements
export const StrategyIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="strategyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EB429E" />
          <stop offset="100%" stopColor="#4263EB" />
        </linearGradient>
      </defs>
      
      {/* Chess board */}
      <rect x="30" y="30" width="40" height="40" rx="2" fill="white" stroke="url(#strategyGradient)" strokeWidth="2" />
      
      {/* Chess board grid */}
      <rect x="30" y="30" width="10" height="10" fill="rgba(66,99,235,0.1)" />
      <rect x="50" y="30" width="10" height="10" fill="rgba(66,99,235,0.1)" />
      <rect x="40" y="40" width="10" height="10" fill="rgba(66,99,235,0.1)" />
      <rect x="60" y="40" width="10" height="10" fill="rgba(66,99,235,0.1)" />
      <rect x="30" y="50" width="10" height="10" fill="rgba(66,99,235,0.1)" />
      <rect x="50" y="50" width="10" height="10" fill="rgba(66,99,235,0.1)" />
      <rect x="40" y="60" width="10" height="10" fill="rgba(66,99,235,0.1)" />
      <rect x="60" y="60" width="10" height="10" fill="rgba(66,99,235,0.1)" />
      
      {/* Chess pieces */}
      <circle cx="45" cy="35" r="4" fill="#EB429E" />
      <polygon points="55,65 60,60 60,65 55,70 50,65 50,60" fill="#4263EB" />
      <rect x="35" y="55" width="5" height="5" fill="#EB429E" />
      
      {/* Strategy arrow */}
      <path d="M20 75 Q30 55, 50 75 Q70 95, 80 75" fill="none" stroke="url(#strategyGradient)" strokeWidth="2" strokeDasharray="2 2" className="animate-pulse-slow" />
      <polygon points="80,75 77,70 83,70" fill="#EB429E" />
    </svg>
  </div>
);

// Privacy/Security Icon for privacy-related articles
export const PrivacyIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="privacyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4263EB" />
          <stop offset="100%" stopColor="#EB429E" />
        </linearGradient>
      </defs>
      
      {/* Shield */}
      <path d="M50 25 L75 35 V55 C75 65 65 75 50 80 C35 75 25 65 25 55 V35 Z" fill="white" stroke="url(#privacyGradient)" strokeWidth="2" />
      
      {/* Lock */}
      <rect x="40" y="50" width="20" height="15" rx="2" fill="rgba(66,99,235,0.2)" stroke="#4263EB" strokeWidth="1.5" />
      <path d="M45 50 V40 C45 37, 47 35, 50 35 C53 35, 55 37, 55 40 V50" fill="none" stroke="#4263EB" strokeWidth="1.5" />
      <circle cx="50" cy="57" r="3" fill="#EB429E" />
      <line x1="50" y1="57" x2="50" y2="62" stroke="#EB429E" strokeWidth="1.5" />
      
      {/* Privacy elements */}
      <path d="M30 30 L40 35" stroke="rgba(235,66,158,0.5)" strokeWidth="1" strokeDasharray="1 1" />
      <path d="M70 30 L60 35" stroke="rgba(235,66,158,0.5)" strokeWidth="1" strokeDasharray="1 1" />
      <circle cx="50" cy="43" r="8" fill="none" stroke="rgba(235,66,158,0.3)" strokeWidth="1" strokeDasharray="2 1" className="animate-pulse-slow" />
    </svg>
  </div>
);

// AI Technology Icon for AI-related articles
export const AiTechIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EB429E" />
          <stop offset="100%" stopColor="#4263EB" />
        </linearGradient>
      </defs>
      
      {/* Brain outline */}
      <path d="M30 50 Q25 35, 35 30 Q40 25, 50 30 Q60 25, 65 30 Q75 35, 70 50 Q75 65, 65 70 Q60 75, 50 70 Q40 75, 35 70 Q25 65, 30 50" 
        fill="white" stroke="url(#aiGradient)" strokeWidth="2" />
      
      {/* Neural connections */}
      <circle cx="40" cy="40" r="3" fill="#4263EB" />
      <circle cx="60" cy="40" r="3" fill="#4263EB" />
      <circle cx="35" cy="55" r="3" fill="#EB429E" />
      <circle cx="50" cy="60" r="3" fill="#4263EB" />
      <circle cx="65" cy="55" r="3" fill="#EB429E" />
      <circle cx="50" cy="35" r="3" fill="#EB429E" />
      
      <path d="M40 40 L60 40" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      <path d="M40 40 L35 55" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      <path d="M35 55 L50 60" stroke="rgba(235,66,158,0.5)" strokeWidth="1" />
      <path d="M50 60 L65 55" stroke="rgba(66,99,235,0.5)" strokeWidth="1" />
      <path d="M65 55 L60 40" stroke="rgba(235,66,158,0.5)" strokeWidth="1" />
      <path d="M50 35 L40 40" stroke="rgba(235,66,158,0.5)" strokeWidth="1" />
      <path d="M50 35 L60 40" stroke="rgba(235,66,158,0.5)" strokeWidth="1" />
      
      {/* Digital elements */}
      <circle cx="35" cy="55" r="6" fill="none" stroke="#EB429E" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse-slow" />
      <circle cx="65" cy="55" r="6" fill="none" stroke="#4263EB" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse-slow" />
    </svg>
  </div>
);

// Telegram/Communication Icon for messaging platforms
export const TelegramIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="telegramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4263EB" />
          <stop offset="100%" stopColor="#EB429E" />
        </linearGradient>
      </defs>
      
      {/* Paper plane */}
      <path d="M25 50 L75 25 L60 55 L75 75 Z" fill="white" stroke="url(#telegramGradient)" strokeWidth="2" />
      <path d="M60 55 L40 45" stroke="url(#telegramGradient)" strokeWidth="1.5" />
      
      {/* Message bubbles */}
      <rect x="25" y="35" width="20" height="15" rx="5" fill="rgba(66,99,235,0.2)" />
      <rect x="30" y="55" width="25" height="15" rx="5" fill="rgba(235,66,158,0.2)" />
      
      {/* Small details */}
      <path d="M45 35 L55 25" stroke="rgba(66,99,235,0.5)" strokeWidth="1" strokeDasharray="2 1" />
      <path d="M70 75 L80 80" stroke="rgba(235,66,158,0.5)" strokeWidth="1" strokeDasharray="2 1" />
      <path d="M25 50 L20 55" stroke="rgba(66,99,235,0.5)" strokeWidth="1" strokeDasharray="2 1" />
      
      {/* Flying effect */}
      <path d="M70 30 Q75 25, 80 30" stroke="rgba(66,99,235,0.3)" strokeWidth="1" className="animate-float" />
      <path d="M75 35 Q80 30, 85 35" stroke="rgba(66,99,235,0.3)" strokeWidth="1" className="animate-float-delay" />
    </svg>
  </div>
);

// Virtual Reality/Metaverse Icon
export const MetaverseIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-pulse-slow"></div>
    <svg viewBox="0 0 100 100" className="absolute inset-0 p-4">
      <defs>
        <linearGradient id="metaverseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EB429E" />
          <stop offset="100%" stopColor="#4263EB" />
        </linearGradient>
      </defs>
      
      {/* VR Headset */}
      <path d="M30 45 H70 V60 C70 65, 60 70, 50 70 C40 70, 30 65, 30 60 Z" fill="white" stroke="url(#metaverseGradient)" strokeWidth="2" />
      <rect x="35" y="50" width="10" height="8" rx="2" fill="rgba(235,66,158,0.3)" />
      <rect x="55" y="50" width="10" height="8" rx="2" fill="rgba(235,66,158,0.3)" />
      <path d="M30 52 L25 52 C23 52, 20 50, 20 48 C20 46, 23 44, 25 44 L30 44" stroke="#4263EB" strokeWidth="1.5" fill="none" />
      <path d="M70 52 L75 52 C77 52, 80 50, 80 48 C80 46, 77 44, 75 44 L70 44" stroke="#4263EB" strokeWidth="1.5" fill="none" />
      
      {/* Virtual world elements */}
      <circle cx="50" cy="30" r="8" fill="none" stroke="url(#metaverseGradient)" strokeWidth="1.5" strokeDasharray="3 1" className="animate-pulse-slow" />
      <rect x="42" y="22" width="16" height="16" rx="2" fill="none" stroke="url(#metaverseGradient)" strokeWidth="1.5" strokeDasharray="3 1" className="animate-pulse-slow" />
      <polygon points="50,35 45,25 55,25" fill="none" stroke="url(#metaverseGradient)" strokeWidth="1.5" strokeDasharray="3 1" className="animate-pulse-slow" />
      
      {/* Connection lines */}
      <path d="M40 52 L40 30" stroke="rgba(66,99,235,0.3)" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M60 52 L60 30" stroke="rgba(66,99,235,0.3)" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  </div>
); 
import React from 'react';

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
      
      {/* Analytics dashboard */}
      <rect x="25" y="30" width="50" height="40" rx="3" fill="white" stroke="url(#analyticsGradient)" strokeWidth="2" />
      
      {/* Bar chart */}
      <rect x="30" y="60" width="5" height="5" fill="#4263EB" />
      <rect x="38" y="55" width="5" height="10" fill="#4263EB" />
      <rect x="46" y="50" width="5" height="15" fill="#4263EB" />
      <rect x="54" y="45" width="5" height="20" fill="#4263EB" />
      <rect x="62" y="40" width="5" height="25" fill="#4263EB" />
      <path d="M30 65 L70 65" stroke="#EB429E" strokeWidth="1" />
      <path d="M30 40 L30 65" stroke="#EB429E" strokeWidth="1" />
      
      {/* Line chart */}
      <path d="M30 35 L35 33 L40 34 L45 32 L50 35 L55 30 L60 32 L65 31 L70 33" fill="none" stroke="#EB429E" strokeWidth="1.5" />
      <circle cx="35" cy="33" r="1.5" fill="#EB429E" />
      <circle cx="45" cy="32" r="1.5" fill="#EB429E" />
      <circle cx="55" cy="30" r="1.5" fill="#EB429E" />
      <circle cx="65" cy="31" r="1.5" fill="#EB429E" />
      
      {/* Data points animation */}
      <circle cx="75" cy="30" r="3" fill="rgba(252,70,107,0.7)" className="animate-ping-slow" />
      <circle cx="75" cy="40" r="3" fill="rgba(252,70,107,0.7)" className="animate-ping-slow opacity-80" />
      <circle cx="75" cy="50" r="3" fill="rgba(252,70,107,0.7)" className="animate-ping-slow opacity-60" />
      <circle cx="75" cy="60" r="3" fill="rgba(252,70,107,0.7)" className="animate-ping-slow opacity-40" />
    </svg>
  </div>
);

// Strategy Icon with puzzle pieces and plan elements
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
      
      {/* Puzzle pieces representing strategy components */}
      <path d="M35 35 L50 35 C50 30, 55 30, 55 35 L65 35 L65 50 C70 50, 70 55, 65 55 L65 65 L50 65 C50 70, 45 70, 45 65 L35 65 L35 50 C30 50, 30 45, 35 45 Z" 
        fill="white" 
        stroke="url(#strategyGradient)" 
        strokeWidth="2" 
        className="transform origin-center transition-transform duration-700" />
      
      {/* Center target/goal */}
      <circle cx="50" cy="50" r="8" fill="rgba(252,70,107,0.2)" stroke="#EB429E" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="4" fill="rgba(252,70,107,0.4)" />
      <circle cx="50" cy="50" r="1" fill="#EB429E" />
      
      {/* Strategy elements/arrows */}
      <path d="M30 30 L40 40" stroke="#4263EB" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M30 70 L40 60" stroke="#4263EB" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M70 30 L60 40" stroke="#4263EB" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M70 70 L60 60" stroke="#4263EB" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      
      <circle cx="30" cy="30" r="3" fill="rgba(66,99,235,0.8)" />
      <circle cx="30" cy="70" r="3" fill="rgba(66,99,235,0.8)" />
      <circle cx="70" cy="30" r="3" fill="rgba(66,99,235,0.8)" />
      <circle cx="70" cy="70" r="3" fill="rgba(66,99,235,0.8)" />
    </svg>
  </div>
); 
import React from 'react';

// Basic Telegram Icon
export const TelegramIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Paper plane (Telegram logo stylized) */}
      <path d="M30 50 L45 60 L70 35 L45 55 Z" 
        fill="white" 
        stroke="rgba(63,94,251,1)" 
        strokeWidth="2"
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      <path d="M45 60 L48 70 L51 62 L70 35" 
        fill="white"
        stroke="rgba(63,94,251,1)"
        strokeWidth="2" />
      
      {/* Message flow animation */}
      <path d="M75 30 C85 40, 85 60, 75 70" 
        stroke="rgba(63,94,251,0.4)" 
        strokeWidth="1" 
        strokeDasharray="2 2"
        className="animate-dash-slow"
        fill="none" />
      
      <path d="M25 30 C15 40, 15 60, 25 70" 
        stroke="rgba(63,94,251,0.4)" 
        strokeWidth="1" 
        strokeDasharray="2 2"
        className="animate-dash-slow"
        fill="none" />
      
      {/* Message bubbles */}
      <circle cx="30" cy="40" r="3" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow" />
      <circle cx="28" cy="50" r="2" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow opacity-80" />
      <circle cx="30" cy="60" r="3" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow opacity-60" />
      
      <circle cx="70" cy="40" r="2" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow opacity-70" />
      <circle cx="72" cy="50" r="3" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow opacity-60" />
      <circle cx="70" cy="60" r="2" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow opacity-90" />
    </svg>
  </div>
);

// AI-Enhanced Telegram Icon
export const TelegramAIIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Paper plane (Telegram logo stylized) */}
      <path d="M30 50 L45 60 L70 35 L45 55 Z" 
        fill="white" 
        stroke="rgba(63,94,251,1)" 
        strokeWidth="2"
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      <path d="M45 60 L48 70 L51 62 L70 35" 
        fill="white"
        stroke="rgba(63,94,251,1)"
        strokeWidth="2" />
      
      {/* AI Enhancement elements */}
      <path d="M25 40 L35 45" stroke="rgba(252,70,107,0.8)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-dash-slow" />
      <path d="M25 60 L35 55" stroke="rgba(252,70,107,0.8)" strokeWidth="1.5" strokeDasharray="2 2" className="animate-dash-slow" />
      <circle cx="25" cy="40" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      <circle cx="25" cy="60" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      
      {/* AI nodes */}
      <rect x="20" y="48" width="10" height="4" rx="2" fill="white" stroke="rgba(252,70,107,0.8)" strokeWidth="1" />
      <path d="M20 48 L20 44 L30 44 L30 48" stroke="rgba(252,70,107,0.5)" strokeWidth="1" />
      <path d="M20 52 L20 56 L30 56 L30 52" stroke="rgba(252,70,107,0.5)" strokeWidth="1" />
      
      {/* Message flow with AI processing */}
      <path d="M75 30 C85 40, 85 60, 75 70" 
        stroke="rgba(63,94,251,0.4)" 
        strokeWidth="1" 
        strokeDasharray="2 2"
        className="animate-dash-slow"
        fill="none" />
      
      {/* Automated responses */}
      <circle cx="70" cy="40" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      <circle cx="72" cy="50" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      <circle cx="70" cy="60" r="2" fill="rgba(252,70,107,0.8)" className="animate-pulse-slow" />
      
      {/* Channel representation */}
      <path d="M70 75 C60 80, 40 80, 30 75" stroke="rgba(63,94,251,0.7)" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="77" r="3" fill="rgba(63,94,251,0.2)" className="animate-pulse-slow" />
      <circle cx="40" cy="76" r="2" fill="rgba(63,94,251,0.2)" className="animate-pulse-slow" />
      <circle cx="60" cy="76" r="2" fill="rgba(63,94,251,0.2)" className="animate-pulse-slow" />
    </svg>
  </div>
); 
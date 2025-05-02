import React from 'react';

// Telegram Icon for AI Channel Selection
export const TelegramIcon = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 rounded-full border-2 border-primary-purple animate-pulse-slow" aria-hidden="true"></div>
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
      
      {/* Telegram paper plane stylized */}
      <path d="M25 50 L40 60 L35 75 L45 65 L65 80 L75 25 L25 50Z" 
        fill="white" 
        stroke="rgba(63,94,251,1)" 
        strokeWidth="2" 
        className="transform transition-transform duration-500 origin-center group-hover:scale-105" />
      
      {/* Telegram fold line */}
      <path d="M40 60 L65 45" stroke="rgba(63,94,251,0.7)" strokeWidth="1" />
      
      {/* Message dots animation */}
      <circle cx="45" cy="35" r="2" fill="rgba(252,70,107,0.8)" className="animate-ping-slow" />
      <circle cx="50" cy="35" r="2" fill="rgba(252,70,107,0.8)" className="animate-ping-slow opacity-60 animation-delay-300" />
      <circle cx="55" cy="35" r="2" fill="rgba(252,70,107,0.8)" className="animate-ping-slow opacity-30 animation-delay-600" />
      
      {/* AI selection elements */}
      <rect x="40" y="85" width="20" height="5" rx="2" fill="rgba(252,70,107,1)" className="animate-pulse-slow" />
      <rect x="30" y="75" width="40" height="7" rx="3" fill="white" stroke="rgba(252,70,107,1)" strokeWidth="1" />
      <text x="37" y="80" fill="rgba(252,70,107,1)" fontSize="5" fontWeight="bold">AI SELECT</text>
      
      {/* Notification/selection circles */}
      <circle cx="25" cy="40" r="3" fill="rgba(63,94,251,1)" className="animate-pulse-slow" />
      <circle cx="25" cy="60" r="3" fill="rgba(63,94,251,1)" className="animate-pulse-slow opacity-80" />
      <circle cx="75" cy="40" r="3" fill="rgba(63,94,251,1)" className="animate-pulse-slow opacity-70" />
      <circle cx="75" cy="60" r="3" fill="rgba(63,94,251,1)" className="animate-pulse-slow opacity-90" />
    </svg>
  </div>
); 
import React from 'react';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-5 pointer-events-none">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink blur-3xl animate-pulse-slow opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-primary-purple blur-3xl animate-pulse-slow opacity-30 animation-delay-1000"></div>
    </div>
  );
} 
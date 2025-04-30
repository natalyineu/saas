import React from 'react';

export function TargetingIcon({ className = "h-10 w-10 text-primary-purple" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

export function LaunchIcon({ className = "h-10 w-10 text-primary-purple" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

export function BudgetIcon({ className = "h-10 w-10 text-primary-purple" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function AnalyticsIcon({ className = "h-10 w-10 text-primary-purple" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5 text-primary-purple mr-2 mt-0.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function SupportIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.2c-.55 0-.84-.15-.98-.28C4.15 13.6 4 13.3 4 12.75V11.5c0-.55.18-1.04.46-1.38C4.75 9.8 5.13 9.5 5.5 9.5H6m4 5h9.5" />
    </svg>
  );
}

export function TargetBullseyeIcon({ className = "w-4 h-4 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  );
}

// Case Study Icons
export function CoffeeShopIcon() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white/50">
      <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
        <rect x="35" y="25" width="30" height="10" rx="5" fill="rgba(252,70,107,1)" />
        <path d="M30 60 L70 60" stroke="rgba(63,94,251,1)" strokeWidth="3" />
        <path d="M40 50 C40 40, 60 40, 60 50" stroke="rgba(63,94,251,1)" strokeWidth="3" fill="none" />
        <path d="M30 70 L40 60 L60 60 L70 70" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
      </svg>
      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        +143%
      </div>
    </div>
  );
}

export function RestaurantIcon() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white/50">
      <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="60" height="40" rx="4" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" />
        <rect x="30" y="20" width="40" height="10" rx="2" fill="rgba(252,70,107,1)" />
        <rect x="35" y="40" width="30" height="20" rx="2" fill="rgba(63,94,251,0.1)" />
        <circle cx="40" cy="50" r="3" fill="rgba(63,94,251,1)" />
        <circle cx="50" cy="50" r="3" fill="rgba(63,94,251,1)" />
        <circle cx="60" cy="50" r="3" fill="rgba(63,94,251,1)" />
      </svg>
      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        +87%
      </div>
    </div>
  );
}

export function BoutiqueIcon() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white/50">
      <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="30" width="50" height="40" rx="4" fill="rgba(252,70,107,1)" />
        <rect x="30" y="35" width="40" height="30" rx="2" fill="white" />
        <rect x="30" y="35" width="40" height="7" rx="1" fill="rgba(63,94,251,1)" />
        <rect x="33" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
        <rect x="45" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
        <rect x="57" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
      </svg>
      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        +215%
      </div>
    </div>
  );
}

const BasicIcons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Interface Icons</h3>
        <div className="flex gap-2">
          <TargetingIcon className="h-6 w-6" />
          <LaunchIcon className="h-6 w-6" />
          <BudgetIcon className="h-6 w-6" />
          <AnalyticsIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default BasicIcons; 
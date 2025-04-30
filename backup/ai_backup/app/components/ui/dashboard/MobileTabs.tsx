import React from 'react';

interface MobileTabsProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export default function MobileTabs({ selectedTab, setSelectedTab }: MobileTabsProps) {
  return (
    <div className="flex border-b">
      <button 
        className={`px-2 py-1.5 text-[10px] font-medium flex items-center ${selectedTab === 'overview' ? 'text-primary-purple border-b-2 border-primary-purple bg-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
        onClick={() => setSelectedTab('overview')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Overview
      </button>
      <button 
        className={`px-2 py-1.5 text-[10px] font-medium flex items-center ${selectedTab === 'performance' ? 'text-primary-purple border-b-2 border-primary-purple bg-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
        onClick={() => setSelectedTab('performance')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Perform
      </button>
      <button 
        className={`px-2 py-1.5 text-[10px] font-medium flex items-center ${selectedTab === 'settings' ? 'text-primary-purple border-b-2 border-primary-purple bg-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
        onClick={() => setSelectedTab('settings')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Settings
      </button>
    </div>
  );
} 
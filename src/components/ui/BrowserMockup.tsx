'use client';

import React from 'react';
import { DASHBOARD_URL } from '@/lib/utils/constants';

interface BrowserMockupProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

const BrowserMockup: React.FC<BrowserMockupProps> = ({ 
  children, 
  className = '',
  url = `${DASHBOARD_URL}campaign/coffee-shop`
}) => {
  return (
    <div className={`browser-mockup rounded-xl overflow-hidden shadow-md sm:shadow-2xl ${className}`}>
      {/* Browser toolbar */}
      <div className="bg-gradient-to-r from-[#F0F0F0] to-[#E5E5E5] px-2 sm:px-3 py-1.5 sm:py-2 flex items-center">
        {/* Window control buttons */}
        <div className="flex space-x-1 sm:space-x-1.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F57]"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#28CA41]"></div>
        </div>
        
        {/* URL bar */}
        <div className="mx-auto max-w-md w-full">
          <div className="bg-white rounded-md h-5 sm:h-6 px-1.5 sm:px-2 flex items-center text-[10px] sm:text-xs text-gray-500 overflow-hidden">
            <div className="flex items-center w-full">
              <span className="mr-1 text-green-600 hidden xs:inline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 sm:h-3 sm:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <span className="truncate">{url}</span>
            </div>
          </div>
        </div>
        
        {/* Placeholder for additional browser buttons */}
        <div className="w-12 sm:w-24 flex justify-end space-x-2">
          <div className="text-gray-400 hover:text-gray-600 cursor-pointer hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Browser content */}
      <div className="bg-white">
        {children}
      </div>
    </div>
  );
};

export default BrowserMockup; 
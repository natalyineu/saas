import React from 'react';
import DynamicChart from '@/components/ui/DynamicChart';

export default function PerformanceChart() {
  return (
    <div className="h-40 bg-white rounded-lg shadow mb-3 relative overflow-hidden border border-gray-100">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    
      <div className="flex justify-between px-2 pt-2 items-center relative z-10">
        <div className="text-sm font-medium text-gray-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Performance Trend (6 Months)
        </div>
        <div className="flex space-x-3">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#9c8bda] mr-1.5"></div>
            <span className="text-xs text-gray-600">Ad Spend</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#16bd9c] mr-1.5"></div>
            <span className="text-xs text-gray-600">Revenue</span>
          </div>
        </div>
      </div>
      <div className="h-32 mt-1 px-2">
        <DynamicChart tooltips={true} />
      </div>
    </div>
  );
} 
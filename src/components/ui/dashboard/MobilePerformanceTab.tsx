import React from 'react';

export default function MobilePerformanceTab() {
  return (
    <div className="space-y-2 relative">
      <div className="bg-white rounded-lg p-1.5 shadow-sm border border-gray-100">
        <h3 className="text-[10px] font-semibold text-gray-800 mb-1 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          A/B Test Results
        </h3>
        <div className="space-y-1.5">
          <div className="p-1 rounded-md border border-green-100 bg-green-50 flex justify-between items-center">
            <div>
              <p className="text-[9px] font-medium text-gray-800">"Taste the Difference"</p>
              <p className="text-[8px] text-gray-500">Coffee with sunrise</p>
            </div>
            <span className="text-[9px] text-green-600">4.8% CTR</span>
          </div>
          <div className="p-1 rounded-md border border-gray-200 flex justify-between items-center">
            <div>
              <p className="text-[9px] font-medium text-gray-800">"Morning Boost"</p>
              <p className="text-[8px] text-gray-500">Person with coffee</p>
            </div>
            <span className="text-[9px] text-gray-600">3.2% CTR</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-1.5 shadow-sm border border-gray-100">
        <h3 className="text-[10px] font-semibold text-gray-800 mb-1 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Campaign Performance
        </h3>
        <div className="space-y-1">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-gray-600">Conversion Rate</span>
              <span className="text-[9px] font-medium text-gray-800">4.8%</span>
            </div>
            <div className="mt-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary-purple to-primary-pink rounded-full" style={{ width: '48%' }}></div>
            </div>
          </div>
          
          <div className="flex flex-col mt-1">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-gray-600">Click-Through Rate</span>
              <span className="text-[9px] font-medium text-gray-800">8.5%</span>
            </div>
            <div className="mt-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary-purple to-primary-pink rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="flex flex-col mt-1">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-gray-600">Cost per Acquisition</span>
              <span className="text-[9px] font-medium text-gray-800">$12.40</span>
            </div>
            <div className="mt-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary-purple to-primary-pink rounded-full" style={{ width: '62%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import React from 'react';

export default function PerformanceTab() {
  return (
    <div className="space-y-2 relative">
      <div className="bg-white rounded-lg p-2.5 shadow-sm border border-gray-100">
        <h3 className="text-xs font-semibold text-gray-800 mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Creative A/B Test Results
        </h3>
        <div className="space-y-2">
          <div className="p-2 rounded-md border border-green-100 bg-green-50 flex justify-between items-center">
            <div>
              <p className="text-xs font-medium text-gray-800">"Taste the Difference"</p>
              <p className="text-[10px] text-gray-500">Coffee with sunrise</p>
            </div>
            <div className="ml-2">
              <span className="text-xs font-semibold text-green-600">4.8% CTR</span>
            </div>
          </div>
          <div className="p-2 rounded-md border border-gray-200 flex justify-between items-center">
            <div>
              <p className="text-xs font-medium text-gray-800">"Morning Boost"</p>
              <p className="text-[10px] text-gray-500">Person with coffee</p>
            </div>
            <span className="text-xs text-gray-600">3.2% CTR</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
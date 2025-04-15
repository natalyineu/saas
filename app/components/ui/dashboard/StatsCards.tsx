import React from 'react';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-3 mb-3">
      <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
        <div className="flex justify-between">
          <p className="text-xs font-medium text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            IMPRESSIONS
          </p>
          <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-600 rounded-md border border-green-200">+24.7%</span>
        </div>
        <div className="text-base font-bold mt-1">86,429</div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
        <div className="flex justify-between">
          <p className="text-xs font-medium text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            CLICKS
          </p>
          <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-600 rounded-md border border-green-200">+18.2%</span>
        </div>
        <div className="text-base font-bold mt-1">7,328</div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
        <div className="flex justify-between">
          <p className="text-xs font-medium text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            REACH
          </p>
          <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-600 rounded-md border border-green-200">+29.5%</span>
        </div>
        <div className="text-base font-bold mt-1">42,167</div>
      </div>
    </div>
  );
} 
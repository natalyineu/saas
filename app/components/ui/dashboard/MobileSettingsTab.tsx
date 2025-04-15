import React from 'react';

export default function MobileSettingsTab() {
  return (
    <div className="relative">
      <div className="bg-white rounded-lg shadow-sm p-1.5 relative z-10 border border-gray-100">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-[10px] font-semibold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </h3>
          <span className="text-[8px] text-white bg-primary-purple/90 px-1 py-0.5 rounded-md border border-primary-purple font-medium">
            AI-Managed
          </span>
        </div>
        
        <div className="grid grid-cols-1 gap-1 mb-2">
          <div className="flex justify-between py-1 border-b border-gray-100 hover:bg-gray-50 rounded px-1 transition-colors">
            <span className="text-[9px] text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Budget
            </span>
            <span className="text-[9px] font-medium text-gray-800">$1,200/month</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-100 hover:bg-gray-50 rounded px-1 transition-colors">
            <span className="text-[9px] text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Bid Strategy
            </span>
            <span className="text-[9px] font-medium text-gray-800">Maximize Conversions</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-100 hover:bg-gray-50 rounded px-1 transition-colors">
            <span className="text-[9px] text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Targeting
            </span>
            <span className="text-[9px] font-medium text-gray-800">5 mile radius</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-100 hover:bg-gray-50 rounded px-1 transition-colors">
            <span className="text-[9px] text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule
            </span>
            <span className="text-[9px] font-medium text-gray-800">7:00 AM - 9:00 PM</span>
          </div>
          <div className="flex justify-between py-1 hover:bg-gray-50 rounded px-1 transition-colors">
            <span className="text-[9px] text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Creative Refresh
            </span>
            <span className="text-[9px] font-medium text-gray-800">Every 14 days</span>
          </div>
        </div>
        
        <div className="bg-gray-50 p-1 rounded-md border border-gray-100">
          <div className="flex justify-between mb-0.5">
            <p className="text-[9px] font-medium text-gray-800">AI Optimization Status</p>
            <span className="text-[8px] text-green-600 flex items-center">
              <span className="w-1 h-1 rounded-full bg-green-500 mr-0.5"></span>
              Active
            </span>
          </div>
          <p className="text-[8px] text-gray-600">Last optimized 2 hours ago</p>
        </div>
      </div>
    </div>
  );
} 
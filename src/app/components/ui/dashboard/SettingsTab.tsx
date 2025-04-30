import React from 'react';

export default function SettingsTab() {
  return (
    <div className="relative">
      <div className="bg-white rounded-lg shadow-sm p-2.5 relative z-10 border border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs font-semibold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Campaign Settings
          </h3>
          <span className="text-xs text-white bg-primary-purple/90 px-1.5 py-0.5 rounded-md border border-primary-purple font-medium">
            AI-Managed
          </span>
        </div>
        
        <div className="grid grid-cols-1 gap-2 mb-3">
          <div className="flex justify-between py-1.5 border-b border-gray-100 hover:bg-gray-50 rounded px-1.5 transition-colors">
            <span className="text-xs text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Budget
            </span>
            <span className="text-xs font-medium text-gray-800">$279/month</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-gray-100 hover:bg-gray-50 rounded px-1.5 transition-colors">
            <span className="text-xs text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Regions
            </span>
            <span className="text-xs font-medium text-gray-800">US, Canada</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-gray-100 hover:bg-gray-50 rounded px-1.5 transition-colors">
            <span className="text-xs text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI Optimization
            </span>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              <span className="text-xs font-medium text-green-600">ON</span>
            </div>
          </div>
          <div className="flex justify-between py-1.5 border-b border-gray-100 hover:bg-gray-50 rounded px-1.5 transition-colors">
            <span className="text-xs text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              Retargeting
            </span>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              <span className="text-xs font-medium text-green-600">Enabled</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button className="text-xs px-3 py-1.5 bg-white rounded-md text-primary-purple hover:bg-gray-50 transition-colors font-medium flex items-center border border-primary-purple/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Report
          </button>
        </div>
      </div>
    </div>
  );
} 
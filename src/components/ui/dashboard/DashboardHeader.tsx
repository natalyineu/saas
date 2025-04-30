import React from 'react';

export default function DashboardHeader() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink flex items-center justify-center text-white font-bold text-sm">AB</div>
          <div className="ml-2">
            <h3 className="font-bold text-gray-800 text-sm">AI-Vertise Dashboard</h3>
            <p className="text-xs text-gray-500">Welcome back, Admin</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center bg-white px-2 py-1 rounded-lg shadow-sm border border-gray-100">
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary-purple to-primary-pink mr-1.5"></div>
            <div className="mr-1.5">
              <p className="text-xs font-medium">Coffee Shop</p>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>
              <p className="text-xs text-gray-500">Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* Report banner */}
      <div className="bg-white rounded-lg shadow-sm p-1.5 mb-3 flex justify-between items-center border border-gray-100">
        <div className="flex items-center">
          <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md mr-2 border border-blue-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Weekly Report Sent
          </span>
        </div>
        <div className="text-xs text-white bg-primary-purple/90 px-2 py-1 rounded-md border border-primary-purple font-medium">
          <span className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI-Managed
          </span>
        </div>
      </div>
    </>
  );
} 
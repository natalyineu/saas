'use client';

import { useState, useEffect } from 'react';
import DynamicChart from './DynamicChart';

interface TabletDashboardViewProps {
  scrollToCaseStudies: () => void;
}

export default function TabletDashboardView({ scrollToCaseStudies }: TabletDashboardViewProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [metricsVisible, setMetricsVisible] = useState(false);
  
  useEffect(() => {
    const metricsTimer = setTimeout(() => setMetricsVisible(true), 700);
    return () => clearTimeout(metricsTimer);
  }, []);

  return (
    <div className="relative h-[520px] sm:h-[520px] md:h-[580px] bg-[#f8f9fc]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple to-primary-pink opacity-5" />
      <div className="relative h-full w-full p-3 sm:p-5">
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

        {/* Main dashboard content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-3 border border-gray-100">
          <div className="flex border-b">
            <button 
              className={`px-4 py-2.5 text-sm font-medium flex items-center ${selectedTab === 'overview' ? 'text-primary-purple border-b-2 border-primary-purple bg-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setSelectedTab('overview')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Overview
            </button>
            <button 
              className={`px-4 py-2.5 text-sm font-medium flex items-center ${selectedTab === 'performance' ? 'text-primary-purple border-b-2 border-primary-purple bg-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setSelectedTab('performance')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Performance
            </button>
            <button 
              className={`px-4 py-2.5 text-sm font-medium flex items-center ${selectedTab === 'settings' ? 'text-primary-purple border-b-2 border-primary-purple bg-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setSelectedTab('settings')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </button>
          </div>

          <div className="p-3">
            {selectedTab === 'overview' && (
              <div className={`transition-opacity duration-500 ${metricsVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Background pattern decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 z-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Circle pattern */}
                <div className="absolute bottom-8 left-8 w-24 h-24 opacity-5 z-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                
                {/* Stats cards */}
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
                
                {/* Chart */}
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

                {/* Bottom buttons */}
                <div className="flex justify-between">
                  <button 
                    onClick={scrollToCaseStudies}
                    className="text-sm px-4 py-2 rounded-lg text-primary-purple border border-primary-purple hover:bg-primary-purple hover:text-white transition-colors flex items-center ai-glow"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Details
                  </button>
                  <a 
                    href="#pricing"
                    className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-primary-purple to-primary-pink text-white hover:shadow-lg transition-all flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Check Price
                  </a>
                </div>
              </div>
            )}

            {selectedTab === 'performance' && (
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
            )}

            {selectedTab === 'settings' && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
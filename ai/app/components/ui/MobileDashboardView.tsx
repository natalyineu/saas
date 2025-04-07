'use client';

import { useState, useEffect } from 'react';
import DynamicChart from './DynamicChart';

interface MobileDashboardViewProps {
  scrollToCaseStudies: () => void;
}

export default function MobileDashboardView({ scrollToCaseStudies }: MobileDashboardViewProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [metricsVisible, setMetricsVisible] = useState(false);
  
  useEffect(() => {
    const metricsTimer = setTimeout(() => setMetricsVisible(true), 700);
    return () => clearTimeout(metricsTimer);
  }, []);

  return (
    <div className="relative h-[600px] bg-[#f8f9fc]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple to-primary-pink opacity-5" />
      <div className="relative h-full w-full p-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink flex items-center justify-center text-white font-bold text-xs">AB</div>
            <div className="ml-1.5">
              <h3 className="font-bold text-gray-800 text-xs">AI-Vertise Dashboard</h3>
              <p className="text-[10px] text-gray-500">Welcome back, Admin</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center bg-white px-1.5 py-0.5 rounded-lg shadow-sm border border-gray-100">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary-purple to-primary-pink mr-1"></div>
              <div className="mr-1">
                <p className="text-[10px] font-medium">Coffee Shop</p>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-1 h-1 rounded-full bg-green-500 mr-0.5"></span>
                <p className="text-[9px] text-gray-500">Active</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-1.5 mb-2 flex justify-between items-center border border-gray-100">
          <div className="flex items-center">
            <span className="bg-blue-50 text-blue-600 text-[9px] px-1.5 py-0.5 rounded-md mr-1.5 border border-blue-100 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 inline mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Weekly Report
            </span>
          </div>
          <div className="text-[9px] text-white bg-primary-purple/90 px-1.5 py-0.5 rounded-md border border-primary-purple font-medium">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mr-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI-Managed
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-2 border border-gray-100">
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

          <div className="p-2">
            {selectedTab === 'overview' && (
              <div className={`transition-opacity duration-500 ${metricsVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-white p-1.5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex justify-between">
                      <p className="text-[9px] font-medium text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        IMPRESSIONS
                      </p>
                      <span className="text-[8px] px-1 py-0.5 bg-green-100 text-green-600 rounded-md border border-green-200">+24.7%</span>
                    </div>
                    <div className="text-sm font-bold mt-0.5">86,429</div>
                  </div>
                  <div className="bg-white p-1.5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex justify-between">
                      <p className="text-[9px] font-medium text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                        CLICKS
                      </p>
                      <span className="text-[8px] px-1 py-0.5 bg-green-100 text-green-600 rounded-md border border-green-200">+18.2%</span>
                    </div>
                    <div className="text-sm font-bold mt-0.5">7,328</div>
                  </div>
                  <div className="bg-white p-1.5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex justify-between">
                      <p className="text-[9px] font-medium text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        REACH
                      </p>
                      <span className="text-[8px] px-1 py-0.5 bg-green-100 text-green-600 rounded-md border border-green-200">+29.5%</span>
                    </div>
                    <div className="text-sm font-bold mt-0.5">42,167</div>
                  </div>
                  <div className="bg-white p-1.5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex justify-between">
                      <p className="text-[9px] font-medium text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        CONV. RATE
                      </p>
                      <span className="text-[8px] px-1 py-0.5 bg-green-100 text-green-600 rounded-md border border-green-200">+12.3%</span>
                    </div>
                    <div className="text-sm font-bold mt-0.5">4.8%</div>
                  </div>
                </div>

                <div className="h-44 bg-white rounded-lg shadow mb-4 relative overflow-hidden border border-gray-100">
                  <div className="flex justify-between px-1.5 pt-1.5 items-center relative z-10">
                    <div className="text-[9px] font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      6 Months
                    </div>
                    <div className="flex space-x-1.5">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9c8bda] mr-0.5"></div>
                        <span className="text-[8px] text-gray-600">Ad</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#16bd9c] mr-0.5"></div>
                        <span className="text-[8px] text-gray-600">Revenue</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-36 mt-1 px-1.5">
                    <DynamicChart tooltips={false} />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button 
                    onClick={scrollToCaseStudies}
                    className="text-[9px] px-2 py-1 rounded-lg text-primary-purple border border-primary-purple hover:bg-primary-purple hover:text-white transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Details
                  </button>
                  <a 
                    href="#pricing"
                    className="text-[9px] px-2 py-1 rounded-lg bg-gradient-to-r from-primary-purple to-primary-pink text-white hover:shadow-lg transition-all flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Check Price
                  </a>
                </div>
              </div>
            )}

            {selectedTab === 'performance' && (
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
              </div>
            )}

            {selectedTab === 'settings' && (
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
                      <span className="text-[9px] font-medium text-gray-800">$279/month</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100 hover:bg-gray-50 rounded px-1 transition-colors">
                      <span className="text-[9px] text-gray-600 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Regions
                      </span>
                      <span className="text-[9px] font-medium text-gray-800">US, Canada</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100 hover:bg-gray-50 rounded px-1 transition-colors">
                      <span className="text-[9px] text-gray-600 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        AI Optimization
                      </span>
                      <div className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-0.5"></span>
                        <span className="text-[9px] font-medium text-green-600">ON</span>
                      </div>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100 hover:bg-gray-50 rounded px-1 transition-colors">
                      <span className="text-[9px] text-gray-600 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                        </svg>
                        Retargeting
                      </span>
                      <div className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-0.5"></span>
                        <span className="text-[9px] font-medium text-green-600">Enabled</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button className="text-[9px] px-2 py-1 bg-white rounded-md text-primary-purple hover:bg-gray-50 transition-colors font-medium flex items-center border border-primary-purple/50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
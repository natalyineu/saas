import React from 'react';
import MobileMetricCard from './MobileMetricCard';
import DynamicChart from '@/components/ui/DynamicChart';

interface MobileOverviewTabProps {
  scrollToCaseStudies: () => void;
  metricsVisible: boolean;
}

export default function MobileOverviewTab({ scrollToCaseStudies, metricsVisible }: MobileOverviewTabProps) {
  return (
    <div className={`transition-opacity duration-500 ${metricsVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <MobileMetricCard 
          label="IMPRESSIONS"
          value="86,429"
          percentage="+24.7%"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          }
        />
        <MobileMetricCard 
          label="CLICKS"
          value="7,328"
          percentage="+18.2%"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          }
        />
        <MobileMetricCard 
          label="REACH"
          value="42,167"
          percentage="+29.5%"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        />
        <MobileMetricCard 
          label="CONV. RATE"
          value="4.8%"
          percentage="+12.3%"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
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
  );
} 
'use client';

import React from 'react';
import DynamicChart from './DynamicChart';

interface CampaignDetailsProps {
  className?: string;
}

const CampaignDetails: React.FC<CampaignDetailsProps> = ({ className }) => {
  return (
    <div className={`campaign-details ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Coffee Shop Campaign</h3>
        <div className="flex items-center mb-2">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-sm text-gray-600">Active</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-600">Started: May 15, 2023</span>
        </div>
        <p className="text-gray-600 mb-4">
          Local coffee shop campaign targeting young professionals within a 5-mile radius of downtown.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Campaign Goal</h4>
          <p className="text-sm text-gray-600">Increase in-store visits</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Daily Budget</h4>
          <p className="text-sm text-gray-600">$25.00 USD</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Target Audience</h4>
          <p className="text-sm text-gray-600">Ages 25-40, Coffee Enthusiasts</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Ad Format</h4>
          <p className="text-sm text-gray-600">Image + Text Ads</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3">Performance Trend</h4>
        <div className="bg-gray-50 p-4 rounded-lg h-48">
          <DynamicChart />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3">Key Metrics</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">IMPRESSIONS</p>
            <p className="text-xl font-bold">12,548</p>
            <div className="flex items-center mt-1">
              <span className="text-xs text-green-600">+12.5%</span>
              <svg className="w-3 h-3 ml-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v1zm-6 2a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1V9z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12 3a1 1 0 011 1v2a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 011-1h1zm-8 6a1 1 0 011-1h1a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">CLICKS</p>
            <p className="text-xl font-bold">1,024</p>
            <div className="flex items-center mt-1">
              <span className="text-xs text-green-600">+8.3%</span>
              <svg className="w-3 h-3 ml-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v1zm-6 2a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1V9z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12 3a1 1 0 011 1v2a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 011-1h1zm-8 6a1 1 0 011-1h1a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">CONVERSIONS</p>
            <p className="text-xl font-bold">186</p>
            <div className="flex items-center mt-1">
              <span className="text-xs text-green-600">+15.7%</span>
              <svg className="w-3 h-3 ml-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v1zm-6 2a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1V9z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12 3a1 1 0 011 1v2a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 011-1h1zm-8 6a1 1 0 011-1h1a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right">
        <button className="px-4 py-2 bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded hover:shadow-md transition-shadow">
          Download Full Report
        </button>
      </div>
    </div>
  );
};

export default CampaignDetails; 
'use client';

import React from 'react';

/**
 * Header row for the desktop comparison table
 */
export default function ComparisonTableHeader() {
  return (
    <div className="grid grid-cols-5 text-sm">
      <div className="py-3 px-4 font-semibold text-gray-700 border-b bg-gray-50 border-r border-gray-200">
        Marketing Function
      </div>
      <div className="py-3 px-4 font-semibold text-gray-700 border-b bg-gray-50 border-r border-gray-200">
        In-House Team
      </div>
      <div className="py-3 px-4 font-semibold text-gray-700 border-b bg-gray-50 border-r border-gray-200">
        Marketing Agency
      </div>
      <div className="py-3 px-4 font-semibold text-primary-purple border-b bg-primary-purple/5 border-r border-gray-200">
        <div className="flex items-center">
          <span>AI-Vertise</span>
          <div className="ml-2 px-2 py-0.5 bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs rounded-full">
            Best Value
          </div>
        </div>
      </div>
      <div className="py-3 px-4 font-semibold text-gray-700 border-b bg-gray-50">
        Your Advantage
      </div>
    </div>
  );
} 
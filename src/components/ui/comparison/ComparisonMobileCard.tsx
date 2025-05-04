'use client';

import React from 'react';
import { ComparisonItem } from '@/lib/types/comparison';

interface ComparisonMobileCardProps {
  row: ComparisonItem;
  index: number;
  totalRows: number;
  isVisible: boolean;
}

/**
 * A mobile card view for cost comparison data
 * Used in small screens instead of the desktop table
 */
export default function ComparisonMobileCard({ row, index, totalRows, isVisible }: ComparisonMobileCardProps) {
  const isLastRow = index === totalRows - 1;

  return (
    <div 
      className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} border border-gray-200 ${isLastRow ? 'border-primary-purple/30 shadow-md' : ''}`}
    >
      <div className="bg-gradient-to-r from-primary-purple to-primary-pink text-white py-2 px-4 font-medium text-sm">
        {row.category}
      </div>
      <div className="divide-y divide-gray-200 text-sm">
        <div className="py-3 px-4 flex flex-col">
          <span className="font-medium text-gray-700">In-House Team</span>
          <span className="font-medium text-gray-700 mt-1">{row.inHouse.split('+')[0].trim()}</span>
          <span className="text-gray-500 text-xs">{row.inHouse.split('+')[1].trim()}</span>
        </div>
        <div className="py-3 px-4 flex flex-col">
          <span className="font-medium text-gray-700">Marketing Agency</span>
          <span className="font-medium text-gray-700 mt-1">{row.agency.split('+')[0].trim()}</span>
          <span className="text-gray-500 text-xs">{row.agency.split('+')[1].trim()}</span>
        </div>
        <div className="py-3 px-4 flex flex-col bg-primary-purple/5">
          <span className="font-medium text-primary-purple">AI-Vertise</span>
          <span className="font-bold text-primary-purple mt-1">{row.aiVertise.split('+')[0].trim()}</span>
          {row.aiVertise.includes('+') ? (
            <span className="text-primary-purple/80 text-xs font-medium">{row.aiVertise.split('+')[1].trim()}</span>
          ) : null}
        </div>
        <div className="py-3 px-4 bg-primary-purple/5 flex items-center text-primary-purple font-medium">
          <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{row.savings}</span>
        </div>
      </div>
    </div>
  );
} 
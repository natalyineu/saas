'use client';

import React from 'react';
import { ComparisonItem } from '@/lib/types/comparison';

interface ComparisonRowProps {
  row: ComparisonItem;
  index: number;
  totalRows: number;
  isVisible: boolean;
}

/**
 * A single row in the desktop cost comparison table
 */
export default function ComparisonRow({ row, index, totalRows, isVisible }: ComparisonRowProps) {
  const isLastRow = index === totalRows - 1;

  return (
    <div 
      className={`grid grid-cols-5 text-sm transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'} hover:bg-gray-50 ${isLastRow ? 'font-semibold bg-gray-50/50' : ''}`}
    >
      <div className="py-3 px-4 font-medium text-gray-800 border-b border-r border-gray-200">{row.category}</div>
      <div className="py-3 px-4 text-gray-600 border-b border-r border-gray-200">
        <div className="flex flex-col">
          <span className="font-medium">{row.inHouse.split('+')[0].trim()}</span>
          <span className="text-gray-500 text-xs mt-1">+ {row.inHouse.split('+')[1].trim()}</span>
        </div>
      </div>
      <div className="py-3 px-4 text-gray-600 border-b border-r border-gray-200">
        <div className="flex flex-col">
          <span className="font-medium">{row.agency.split('+')[0].trim()}</span>
          <span className="text-gray-500 text-xs mt-1">+ {row.agency.split('+')[1].trim()}</span>
        </div>
      </div>
      <div className={`py-3 px-4 font-bold text-primary-purple border-b border-r border-gray-200 bg-primary-purple/5 ${isLastRow ? 'bg-primary-purple/10' : ''}`}>
        <div className="flex flex-col">
          <span className="font-bold text-primary-purple">{row.aiVertise.split('+')[0].trim()}</span>
          {row.aiVertise.includes('+') ? (
            <span className="text-primary-purple/80 text-xs mt-1 font-medium">+ {row.aiVertise.split('+')[1].trim()}</span>
          ) : null}
        </div>
      </div>
      <div className={`py-3 px-4 font-medium text-primary-purple border-b border-gray-200 ${isLastRow ? 'bg-primary-purple/5' : ''}`}>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1.5 text-primary-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{row.savings}</span>
        </div>
      </div>
    </div>
  );
} 
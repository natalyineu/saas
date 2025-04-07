'use client';

import React from 'react';

interface UpdatedIndicatorProps {
  timestamp?: string;
  className?: string;
}

const UpdatedIndicator: React.FC<UpdatedIndicatorProps> = ({ 
  timestamp = '2 hours ago',
  className = ''
}) => {
  return (
    <div className={`flex items-center text-xs text-gray-500 ${className}`}>
      <div className="relative mr-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <span>Updated {timestamp}</span>
    </div>
  );
};

export default UpdatedIndicator; 
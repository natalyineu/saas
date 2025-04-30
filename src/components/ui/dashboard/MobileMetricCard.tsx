import React, { ReactNode } from 'react';

interface MobileMetricCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  percentage: string;
}

export default function MobileMetricCard({ label, value, icon, percentage }: MobileMetricCardProps) {
  return (
    <div className="bg-white p-1.5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex justify-between">
        <p className="text-[9px] font-medium text-gray-500 flex items-center">
          {icon}
          {label}
        </p>
        <span className="text-[8px] px-1 py-0.5 bg-green-100 text-green-600 rounded-md border border-green-200">
          {percentage}
        </span>
      </div>
      <div className="text-sm font-bold mt-0.5">{value}</div>
    </div>
  );
} 
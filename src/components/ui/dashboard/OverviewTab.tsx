import React from 'react';
import StatsCards from './StatsCards';
import PerformanceChart from './PerformanceChart';
import ActionButtons from './ActionButtons';

interface OverviewTabProps {
  scrollToCaseStudies: () => void;
  metricsVisible: boolean;
}

export default function OverviewTab({ scrollToCaseStudies, metricsVisible }: OverviewTabProps) {
  return (
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
      <StatsCards />
      
      {/* Chart */}
      <PerformanceChart />

      {/* Bottom buttons */}
      <ActionButtons scrollToCaseStudies={scrollToCaseStudies} />
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import MobileHeader from './dashboard/MobileHeader';
import MobileTabs from './dashboard/MobileTabs';
import MobileOverviewTab from './dashboard/MobileOverviewTab';
import MobilePerformanceTab from './dashboard/MobilePerformanceTab';
import MobileSettingsTab from './dashboard/MobileSettingsTab';

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
        <MobileHeader />

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-2 border border-gray-100">
          <MobileTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          <div className="p-2">
            {selectedTab === 'overview' && (
              <MobileOverviewTab 
                scrollToCaseStudies={scrollToCaseStudies} 
                metricsVisible={metricsVisible} 
              />
            )}

            {selectedTab === 'performance' && <MobilePerformanceTab />}

            {selectedTab === 'settings' && <MobileSettingsTab />}
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import DashboardHeader from './dashboard/DashboardHeader';
import DashboardTabs from './dashboard/DashboardTabs';
import OverviewTab from './dashboard/OverviewTab';
import PerformanceTab from './dashboard/PerformanceTab';
import SettingsTab from './dashboard/SettingsTab';

interface TabletDashboardViewProps {
  scrollToCaseStudies: () => void;
}

export default function TabletDashboardView({ scrollToCaseStudies }: TabletDashboardViewProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [metricsVisible, setMetricsVisible] = useState(false);
  
  useEffect(() => {
    const metricsTimer = setTimeout(() => setMetricsVisible(true), 700);
    return () => clearTimeout(metricsTimer);
  }, []);

  return (
    <div className="relative h-[520px] sm:h-[520px] md:h-[580px] bg-[#f8f9fc]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple to-primary-pink opacity-5" />
      <div className="relative h-full w-full p-3 sm:p-4 md:p-5">
        <DashboardHeader />

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-3 border border-gray-100">
          <DashboardTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          <div className="p-3">
            {selectedTab === 'overview' && (
              <OverviewTab 
                scrollToCaseStudies={scrollToCaseStudies} 
                metricsVisible={metricsVisible} 
              />
            )}

            {selectedTab === 'performance' && <PerformanceTab />}

            {selectedTab === 'settings' && <SettingsTab />}
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import React from 'react';
import { TargetIcon } from './TargetIcon';
import { AIBrainIcon } from './AIBrainIcon';
import { AnalyticsIcon as AnalyticsChartIcon } from './AnalyticsIcon';
import { RocketIcon } from './RocketIcon';
import { GearIcon } from './GearIcon';
import { ChartGrowthIcon } from './ChartGrowthIcon';

// Re-export with more specific names to avoid conflicts
export { TargetIcon as AnimatedTargetIcon } from './TargetIcon';
export { AIBrainIcon } from './AIBrainIcon';
export { AnalyticsIcon as AnimatedAnalyticsIcon } from './AnalyticsIcon';
export { RocketIcon } from './RocketIcon';
export { GearIcon } from './GearIcon';
export { ChartGrowthIcon } from './ChartGrowthIcon';

interface AnimatedIconsProps {
  className?: string;
}

const AnimatedIcons: React.FC<AnimatedIconsProps> = ({ className = '' }) => {
  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      <TargetIcon />
      <AIBrainIcon />
      <AnalyticsChartIcon />
      <RocketIcon />
      <GearIcon />
      <ChartGrowthIcon />
    </div>
  );
};

export default AnimatedIcons; 
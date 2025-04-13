'use client';

// This file is kept for backward compatibility
// Import and re-export the individual components from their new locations

import { TargetIcon } from './icons/TargetIcon';
import { AIBrainIcon } from './icons/AIBrainIcon';
import { AnalyticsIcon as AnimatedAnalyticsIcon } from './icons/AnalyticsIcon';
import { RocketIcon } from './icons/RocketIcon';
import { GearIcon } from './icons/GearIcon';
import { ChartGrowthIcon } from './icons/ChartGrowthIcon';

// Default export - all icons in a grid
const AnimatedIcons = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <TargetIcon />
      <AIBrainIcon />
      <AnimatedAnalyticsIcon />
      <RocketIcon />
      <GearIcon />
      <ChartGrowthIcon />
    </div>
  );
};

// Re-export the individual icons with consistent naming
export {
  TargetIcon,
  AIBrainIcon,
  AnimatedAnalyticsIcon as AnalyticsIcon, // For backward compatibility
  RocketIcon,
  GearIcon,
  ChartGrowthIcon
};

export default AnimatedIcons; 
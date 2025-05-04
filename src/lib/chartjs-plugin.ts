'use client';

/**
 * Chart.js initialization optimized for bundle size and tree-shaking
 * This file exports utilities for lazy-loading Chart.js components
 * 
 * @fileoverview Chart.js utilities
 */

// Import only the specific components needed
// Note: We're not importing all components at module level to improve tree-shaking
import { Chart, ChartOptions, registerables } from 'chart.js';

// Prevent duplicate registrations
let registered = false;

/**
 * Initialize Chart.js on the client side only
 * This function dynamically imports and registers only needed components
 * 
 * @returns {Promise<void>} A promise that resolves when Chart.js is initialized
 */
export async function initChartJS(): Promise<void> {
  if (typeof window === 'undefined') return;
  if (registered) return;

  try {
    // Use dynamic imports for better code splitting
    const { 
      Chart, 
      CategoryScale, 
      LinearScale, 
      PointElement, 
      LineElement, 
      Tooltip, 
      Legend, 
      Filler 
    } = await import('chart.js');
    
    // Register only components we need
    Chart.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Tooltip,
      Legend,
      Filler
    );
    
    registered = true;
    return;
  } catch (error) {
    console.error('Failed to load Chart.js components:', error);
    throw error;
  }
}

/**
 * Initialize Chart.js on component mount with minimal loading time
 * Use this for scenarios when you need to initialize in a synchronous context
 * 
 * @returns {void}
 * @todo Consider moving all chart dependencies to async loading
 */
export function initChartJSSync(): void {
  if (typeof window === 'undefined') return;
  if (registered) return;

  try {
    // Register all components but only use in development
    // In production, prefer initChartJS() for better tree-shaking
    Chart.register(...registerables);
    registered = true;
  } catch (error) {
    console.error('Failed to synchronously load Chart.js:', error);
  }
}

// Export types for use in components
export type { ChartOptions };
export { Chart }; 
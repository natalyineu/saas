'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Initialize Chart.js on the client side only
export function initChartJS() {
  if (typeof window !== 'undefined') {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Tooltip,
      Legend,
      Filler
    );
  }
}

// Export the register components for direct use
export {
  ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
}; 
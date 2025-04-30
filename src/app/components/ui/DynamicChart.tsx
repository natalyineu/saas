'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { initChartJS } from '../../lib/chartjs-plugin';

// Initialize Chart.js on component mount
initChartJS();

interface DynamicChartProps {
  className?: string;
  tooltips?: boolean;
}

// Strategic milestones to show in tooltips
const MONTHLY_MILESTONES = {
  'Month 1': 'Onboarding & Launch',
  'Month 2': 'A/B Testing',
  'Month 3': 'Retargeting Setup',
  'Month 4': 'Plan Upgrade + OLV Launch',
  'Month 5': 'ROAS Optimization',
  'Month 6': 'CTV Rollout'
};

const DynamicChart: React.FC<DynamicChartProps> = ({ className, tooltips = false }) => {
  const [labels] = useState(['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6']);
  const [adSpendData, setAdSpendData] = useState<number[]>([]);
  const [revenueData, setRevenueData] = useState<number[]>([]);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [refreshTime] = useState(new Date());
  const [chartReady, setChartReady] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // Initialize data
  useEffect(() => {
    // Don't run on server
    if (typeof window === 'undefined') {
      return;
    }

    setChartReady(true);
    
    // Generate data with smooth upward trend
    const generateSmoothTrendingData = (
      baseStart: number, 
      baseEnd: number, 
      variance: number, 
      min: number,
      exponential: boolean = false
    ): number[] => {
      const range = baseEnd - baseStart;
      
      return labels.map((_, index) => {
        // Calculate the progress as a percentage of the full range (0 to 1)
        const progress = index / (labels.length - 1);
        
        let trendValue;
        if (exponential) {
          // Exponential growth curve for more impressive growth
          trendValue = baseStart + range * Math.pow(progress, 1.6);
        } else {
          // Linear growth with slight upward curve
          trendValue = baseStart + (range * (progress + 0.1 * Math.pow(progress, 2)));
        }
        
        // Add some randomness, but less for later months to show stabilization
        const randomVarianceFactor = Math.max(0.2, 1 - (progress * 0.5));
        const randomVariance = (Math.random() * variance * 2 - variance) * randomVarianceFactor;
        
        return Math.max(min, Math.floor(trendValue + randomVariance));
      });
    };

    // Generate ad spend with moderate growth (2000 -> 5000)
    const adSpend = generateSmoothTrendingData(2000, 5000, 150, 1800, false);
    
    // Generate revenue with exponential growth (3000 -> 12000)
    const revenue = generateSmoothTrendingData(3000, 12000, 300, 2800, true);
    
    setAdSpendData(adSpend);
    setRevenueData(revenue);
    
    // Start animation
    let progress = 0;
    animationRef.current = setInterval(() => {
      progress += 0.008; // Slower animation to emphasize the growth
      setAnimationProgress(Math.min(progress, 1));
      
      if (progress >= 1 && animationRef.current) {
        clearInterval(animationRef.current);
      }
    }, 20); // 20ms interval for smooth animation
    
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [refreshTime, labels]);

  // Chart options
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.1)',
        },
        ticks: {
          font: {
            size: 10,
            family: 'Inter, sans-serif',
          },
          color: 'rgba(100, 100, 100, 0.8)',
          padding: 8,
        },
        border: {
          display: false,
        }
      },
      y: {
        display: true,
        position: 'right',
        grid: {
          color: 'rgba(200, 200, 200, 0.1)',
        },
        ticks: {
          display: false,
          font: {
            size: 10,
          },
          color: 'rgba(100, 100, 100, 0.7)',
        },
        border: {
          display: false,
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: 'rgba(200, 200, 200, 0.75)',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 6,
        displayColors: false,
        callbacks: {
          title: (tooltipItems) => {
            const month = tooltipItems[0].label || '';
            return month;
          },
          label: (context) => {
            const month = context.label as keyof typeof MONTHLY_MILESTONES;
            if (tooltips && MONTHLY_MILESTONES[month] && context.datasetIndex === 0) {
              return MONTHLY_MILESTONES[month];
            }
            return '';
          },
          labelTextColor: () => {
            return '#555555';
          }
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smooth curves
      },
      point: {
        radius: 3, // Small points
        hitRadius: 10, // Larger hit area for interaction
        hoverRadius: 5, // Medium points on hover
        borderWidth: 2,
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    animation: {
      duration: 1000, // Animation duration in ms
      easing: 'easeOutQuart',
    },
  };

  // Prepare chart data with animated drawing
  const data = {
    labels,
    datasets: [
      {
        label: 'Ad Spend',
        data: adSpendData.map((value, index) => 
          index <= (labels.length - 1) * animationProgress ? value : null
        ),
        borderColor: 'rgba(156, 139, 218, 1)', // soft purple
        backgroundColor: 'rgba(156, 139, 218, 0.05)',
        borderWidth: 2.5,
        fill: true,
        cubicInterpolationMode: 'monotone' as const,
        pointBackgroundColor: 'rgba(156, 139, 218, 1)',
        pointBorderColor: '#fff',
      },
      {
        label: 'Revenue',
        data: revenueData.map((value, index) => 
          index <= (labels.length - 1) * animationProgress ? value : null
        ),
        borderColor: 'rgba(22, 189, 156, 1)', // vivid green
        backgroundColor: 'rgba(22, 189, 156, 0.05)',
        borderWidth: 2.5,
        fill: true,
        cubicInterpolationMode: 'monotone' as const,
        pointBackgroundColor: 'rgba(22, 189, 156, 1)',
        pointBorderColor: '#fff',
      },
    ],
  };

  // Only render the chart on the client
  if (!chartReady || typeof window === 'undefined') {
    return <div className={`chart-container relative w-full h-full ${className}`}><div className="h-full w-full flex items-center justify-center">Loading chart...</div></div>;
  }

  return (
    <div className={`chart-container relative w-full h-full ${className}`}>
      <Line options={options} data={data} />
    </div>
  );
}

export default DynamicChart; 
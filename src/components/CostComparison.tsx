'use client';

import { Suspense, useEffect, useState, useRef } from 'react';
import CostComparisonBase from './CostComparisonBase';

// Default comparison data - the same data used in all existing components
const defaultComparisonData = [
  {
    category: 'Ad Setup & Campaign Creation',
    inHouse: '$2,500 + 2-3 people',
    agency: '$1,800 + 1-2 people',
    aiVertise: '$99 or more + AI-powered',
    savings: 'Save 90%+ & 0 staff'
  },
  {
    category: 'Media Planning & Strategy',
    inHouse: '$3,000 + 1-2 people',
    agency: '$2,500 + dedicated planner',
    aiVertise: '$99 or more + AI-powered',
    savings: 'Save 90%+ & 0 staff'
  },
  {
    category: 'Ad Creative Production',
    inHouse: '$1,500 + 1-2 people',
    agency: '$1,200 + creative team',
    aiVertise: '$99 or more + AI-generated',
    savings: 'Save 85%+ & 0 staff'
  },
  {
    category: 'Analytics & Reporting',
    inHouse: '$2,000 + 1 analyst',
    agency: '$1,200 + shared analyst',
    aiVertise: '$99 or more + real-time dashboard',
    savings: 'Save 90%+ & 0 staff'
  },
  {
    category: 'Optimization & Testing',
    inHouse: '$1,800 + 1-2 people',
    agency: '$1,500 + shared resource',
    aiVertise: '$99 or more + continuous AI',
    savings: '100% included & 0 staff'
  },
  {
    category: 'Total Monthly Investment',
    inHouse: '$10,800 + 6-10 people',
    agency: '$8,200 + shared team',
    aiVertise: '$99 or more package',
    savings: 'Save up to 90% & 0 staff'
  }
];

interface ComparisonItem {
  category: string;
  inHouse: string;
  agency: string;
  aiVertise: string;
  savings: string;
}

interface CostComparisonProps {
  // Mode flags
  isStatic?: boolean;
  withSuspense?: boolean;
  
  // Standard props
  title?: string;
  subtitle?: string;
  comparisonData?: ComparisonItem[];
  showCta?: boolean;
}

// Fallback component for Suspense
const LoadingFallback = () => (
  <section id="cost-comparison" className="py-12 bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-6 md:mb-8">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary-purple bg-primary-purple/10 rounded-full">SAVE THOUSANDS</span>
        <h2 className="text-2xl md:text-4xl mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">Why Pay More For Less?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Traditional marketing is expensive and slow. See how AI-Vertise delivers <span className="font-semibold">superior results at a fraction of the cost</span>.
        </p>
      </div>
      <div className="h-48 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <svg className="w-8 h-8 text-primary-purple/30 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <div className="text-primary-purple/50 text-sm">Loading comparison data...</div>
        </div>
      </div>
    </div>
  </section>
);

const AnimatedCostComparison = ({
  title = "Marketing Team Cost Comparison",
  subtitle = "See how AI-Vertise delivers <span class='font-medium'>the same marketing functions at a fraction of the cost</span> compared to traditional options.",
  comparisonData = defaultComparisonData,
  showCta = true,
  isStatic = false
}: CostComparisonProps) => {
  const [isVisible, setIsVisible] = useState(isStatic); // Always visible in static mode
  const sectionRef = useRef<HTMLDivElement>(null);

  // Only set up intersection observer if not in static mode
  useEffect(() => {
    if (isStatic) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [isStatic]);

  return (
    <div ref={sectionRef}>
      <CostComparisonBase 
        isVisible={isVisible}
        isStatic={isStatic}
        comparisonData={comparisonData}
        title={title}
        subtitle={subtitle}
        showCta={showCta}
      />
    </div>
  );
};

export default function CostComparison({
  // Mode flags
  isStatic = false,
  withSuspense = false,
  
  // Standard props
  title,
  subtitle,
  comparisonData = defaultComparisonData,
  showCta
}: CostComparisonProps) {
  // Static mode - directly render with data without animation or suspense
  if (isStatic) {
    return (
      <AnimatedCostComparison
        isStatic={true}
        comparisonData={comparisonData}
        title={title || "Marketing Team Cost Comparison"}
        subtitle={subtitle || "See how AI-Vertise delivers the same marketing functions at a fraction of the cost and staff requirements compared to traditional options."}
        showCta={showCta !== undefined ? showCta : false}
      />
    );
  }
  
  // Suspense mode - wrap in Suspense
  if (withSuspense) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <AnimatedCostComparison
          comparisonData={comparisonData}
          title={title}
          subtitle={subtitle}
          showCta={showCta !== undefined ? showCta : true}
        />
      </Suspense>
    );
  }
  
  // Default mode - just animated version
  return (
    <AnimatedCostComparison
      comparisonData={comparisonData}
      title={title}
      subtitle={subtitle}
      showCta={showCta !== undefined ? showCta : true}
    />
  );
} 
'use client';

import { useEffect, useState, useRef } from 'react';
import CostComparisonBase from './CostComparisonBase';

export default function CostComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  // Updated with more persuasive comparisons
  const comparisonData = [
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

  return (
    <div ref={sectionRef}>
      <CostComparisonBase 
        isVisible={isVisible}
        comparisonData={comparisonData}
        title="Marketing Team Cost Comparison"
        subtitle="See how AI-Vertise delivers <span class='font-medium'>the same marketing functions at a fraction of the cost</span> compared to traditional options."
        showCta={true}
      />
    </div>
  );
} 
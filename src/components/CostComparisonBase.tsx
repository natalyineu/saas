'use client';

import React, { memo } from 'react';
import { ComparisonSectionProps } from '@/lib/types/comparison';
import ComparisonRow from './ui/comparison/ComparisonRow';
import ComparisonMobileCard from './ui/comparison/ComparisonMobileCard';
import ComparisonTableHeader from './ui/comparison/ComparisonTableHeader';
import ErrorBoundary from './ui/ErrorBoundary';

/**
 * Base component for cost comparison section with both desktop and mobile views
 * Uses memoization to prevent unnecessary re-renders
 */
const CostComparisonBase = memo(function CostComparisonBase({
  isVisible = true,
  isStatic = false,
  title = "Marketing Team Cost Comparison", 
  subtitle = "See how AI-Vertise delivers the same marketing functions at a fraction of the cost and staff requirements compared to traditional options.",
  comparisonData,
  showCta = false
}: ComparisonSectionProps) {
  
  // Desktop view table (hidden on mobile)
  const renderDesktopTable = () => (
    <div className={`hidden md:block rounded-xl shadow-md overflow-hidden border border-gray-200 ${isStatic ? 'shadow-lg' : ''}`}>
      {/* Table header */}
      <ComparisonTableHeader />
      
      {/* Table body */}
      {comparisonData.map((row, index) => (
        <ComparisonRow 
          key={index} 
          row={row} 
          index={index} 
          totalRows={comparisonData.length} 
          isVisible={isVisible} 
        />
      ))}
    </div>
  );

  // Mobile view cards (hidden on desktop)
  const renderMobileCards = () => (
    <div className="md:hidden space-y-4">
      {comparisonData.map((row, index) => (
        <ComparisonMobileCard 
          key={index} 
          row={row} 
          index={index} 
          totalRows={comparisonData.length} 
          isVisible={isVisible} 
        />
      ))}
    </div>
  );

  return (
    <section id="cost-comparison" className="py-12 bg-soft-gradient">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'}`}>
          <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-primary-purple bg-primary-purple/10 rounded-full">SAVE THOUSANDS</span>
          <h2 className="text-3xl md:text-4xl mb-3 font-bold">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-sm" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
        </div>
        
        <div className="max-w-7xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}">
          <ErrorBoundary>
            {renderDesktopTable()}
            {renderMobileCards()}
          </ErrorBoundary>
        </div>
        
        {showCta && (
          <div className={`mt-10 text-center transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <a 
              href="#pricing" 
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary-purple to-primary-pink rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Start Saving Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
});

/**
 * Wrapped component with error boundary
 */
export default function CostComparisonBaseWithErrorBoundary(props: ComparisonSectionProps) {
  return (
    <ErrorBoundary>
      <CostComparisonBase {...props} />
    </ErrorBoundary>
  );
} 
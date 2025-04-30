'use client';

import { Suspense } from 'react';
import CostComparisonSection from './CostComparisonSection';

export default function ClientCostComparisonSection() {
  return (
    <Suspense fallback={
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
    }>
      <CostComparisonSection />
    </Suspense>
  );
} 
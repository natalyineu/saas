import React from 'react';

// This is a static version of the cost comparison table that doesn't use any client-side features
export default function StaticCostComparisonSection() {
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

  // Desktop view table (hidden on mobile) - more compact
  const renderDesktopTable = () => (
    <div className="hidden md:block rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Table header */}
      <div className="grid grid-cols-5 text-sm">
        <div className="py-4 px-5 font-semibold text-gray-800 border-b bg-gray-50 border-r border-gray-200">Marketing Function</div>
        <div className="py-4 px-5 font-semibold text-gray-800 border-b bg-gray-50 border-r border-gray-200">In-House Team</div>
        <div className="py-4 px-5 font-semibold text-gray-800 border-b bg-gray-50 border-r border-gray-200">Marketing Agency</div>
        <div className="py-4 px-5 font-semibold text-primary-purple border-b bg-primary-purple/5 border-r border-gray-200">
          <div className="flex items-center">
            <span>AI-Vertise</span>
            <div className="ml-2 px-2 py-0.5 bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs rounded-full">Best Value</div>
          </div>
        </div>
        <div className="py-4 px-5 font-semibold text-gray-800 border-b bg-gray-50">Your Advantage</div>
      </div>
      
      {/* Table body */}
      {comparisonData.map((row, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-5 text-sm hover:bg-primary-purple/5 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'} ${index === comparisonData.length - 1 ? 'font-semibold bg-gray-50' : ''}`}
        >
          <div className={`py-3.5 px-5 border-b border-r border-gray-200 ${index === comparisonData.length - 1 ? 'text-gray-800 font-semibold' : 'text-gray-700'}`}>
            {row.category}
          </div>
          <div className={`py-3.5 px-5 border-b border-r border-gray-200 ${index === comparisonData.length - 1 ? 'text-gray-800 font-semibold' : 'text-gray-600'}`}>
            <div className="flex flex-col">
              <span className="font-medium">{row.inHouse.split('+')[0].trim()}</span>
              <span className="text-gray-500 text-xs mt-1">+ {row.inHouse.split('+')[1].trim()}</span>
            </div>
          </div>
          <div className={`py-3.5 px-5 border-b border-r border-gray-200 ${index === comparisonData.length - 1 ? 'text-gray-800 font-semibold' : 'text-gray-600'}`}>
            <div className="flex flex-col">
              <span className="font-medium">{row.agency.split('+')[0].trim()}</span>
              <span className="text-gray-500 text-xs mt-1">+ {row.agency.split('+')[1].trim()}</span>
            </div>
          </div>
          <div className={`py-3.5 px-5 font-bold text-primary-purple border-b border-r border-gray-200 bg-primary-purple/5 ${index === comparisonData.length - 1 ? 'bg-primary-purple/10' : ''}`}>
            <div className="flex flex-col">
              <span className="font-bold text-primary-purple">{row.aiVertise.split('+')[0].trim()}</span>
              {row.aiVertise.includes('+') ? (
                <span className="text-primary-purple/80 text-xs mt-1 font-medium">+ {row.aiVertise.split('+')[1].trim()}</span>
              ) : null}
            </div>
          </div>
          <div className={`py-3.5 px-5 border-b border-gray-200 ${index === comparisonData.length - 1 ? 'bg-primary-purple/5' : ''}`}>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink flex items-center justify-center mr-2 flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-primary-purple font-medium">{row.savings}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Mobile view cards (hidden on desktop) - more compact
  const renderMobileCards = () => (
    <div className="md:hidden space-y-4">
      {comparisonData.map((row, index) => (
        <div 
          key={index} 
          className={`bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 ${index === comparisonData.length - 1 ? 'border-primary-purple/30 shadow-md' : ''}`}
        >
          <div className={`bg-gradient-to-r from-primary-purple to-primary-pink text-white py-2 px-4 font-medium text-sm ${index === comparisonData.length - 1 ? 'font-semibold' : ''}`}>
            {row.category}
          </div>
          <div className="divide-y divide-gray-200 text-sm">
            <div className="py-3 px-4 flex flex-col">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-700">In-House Team</span>
                <span className="font-medium text-gray-700">{row.inHouse.split('+')[0].trim()}</span>
              </div>
              <span className="text-gray-500 text-xs">{row.inHouse.split('+')[1].trim()}</span>
            </div>
            <div className="py-3 px-4 flex flex-col">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-700">Marketing Agency</span>
                <span className="font-medium text-gray-700">{row.agency.split('+')[0].trim()}</span>
              </div>
              <span className="text-gray-500 text-xs">{row.agency.split('+')[1].trim()}</span>
            </div>
            <div className="py-3 px-4 flex flex-col bg-primary-purple/5">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-primary-purple">AI-Vertise</span>
                <span className="font-bold text-primary-purple">{row.aiVertise.split('+')[0].trim()}</span>
              </div>
              {row.aiVertise.includes('+') ? (
                <span className="text-primary-purple/80 text-xs font-medium">{row.aiVertise.split('+')[1].trim()}</span>
              ) : null}
            </div>
            <div className="py-3 px-4 bg-primary-purple/5 flex items-center">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-primary-purple font-medium">{row.savings}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="cost-comparison" className="py-16 bg-soft-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary-purple bg-primary-purple/10 rounded-full">SAVE THOUSANDS</span>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">Marketing Team Cost Comparison</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how AI-Vertise delivers <span className="font-semibold">the same marketing functions at a fraction of the cost and staff requirements</span> compared to traditional options.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {renderDesktopTable()}
          {renderMobileCards()}
        </div>
      </div>
    </section>
  );
} 
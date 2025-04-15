'use client';

import { useEffect, useState, useRef } from 'react';

export default function CostComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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

  // Desktop view table (hidden on mobile) - more compact
  const renderDesktopTable = () => (
    <div className="hidden md:block rounded-2xl shadow-md overflow-hidden border border-gray-200">
      {/* Table header */}
      <div className="grid grid-cols-5 text-sm">
        <div className="py-2 px-3 font-semibold text-gray-700 border-b bg-gray-50 border-r border-gray-200">Marketing Function</div>
        <div className="py-2 px-3 font-semibold text-gray-700 border-b bg-gray-50 border-r border-gray-200">In-House Team</div>
        <div className="py-2 px-3 font-semibold text-gray-700 border-b bg-gray-50 border-r border-gray-200">Marketing Agency</div>
        <div className="py-2 px-3 font-semibold text-primary-purple border-b bg-primary-purple/5 border-r border-gray-200">
          <div className="flex items-center">
            <span>AI-Vertise</span>
            <div className="ml-2 px-1.5 py-0.5 bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs rounded-full">Best</div>
          </div>
        </div>
        <div className="py-2 px-3 font-semibold text-gray-700 border-b bg-gray-50">Your Advantage</div>
      </div>
      
      {/* Table body */}
      {comparisonData.map((row, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-5 text-sm transition-all duration-300 delay-${index * 50} ${isVisible ? 'opacity-100' : 'opacity-0'} hover:bg-gray-50 ${index === comparisonData.length - 1 ? 'font-semibold bg-gray-50/50' : ''}`}
        >
          <div className="py-2 px-3 font-medium text-gray-800 border-b border-r border-gray-200">{row.category}</div>
          <div className="py-2 px-3 text-gray-600 border-b border-r border-gray-200">{row.inHouse}</div>
          <div className="py-2 px-3 text-gray-600 border-b border-r border-gray-200">{row.agency}</div>
          <div className="py-2 px-3 font-bold text-primary-purple border-b border-r border-gray-200 bg-primary-purple/5">{row.aiVertise}</div>
          <div className="py-2 px-3 font-medium text-primary-purple border-b border-gray-200">
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-1 text-primary-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{row.savings}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Mobile view cards (hidden on desktop) - more compact
  const renderMobileCards = () => (
    <div className="md:hidden space-y-3">
      {comparisonData.map((row, index) => (
        <div 
          key={index} 
          className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 delay-${index * 50} ${isVisible ? 'opacity-100' : 'opacity-0'} border border-gray-200 ${index === comparisonData.length - 1 ? 'border-primary-purple/30 shadow-md' : ''}`}
        >
          <div className={`bg-gradient-to-r from-primary-purple to-primary-pink text-white py-1.5 px-3 font-medium text-sm ${index === comparisonData.length - 1 ? 'font-semibold' : ''}`}>
            {row.category}
          </div>
          <div className="divide-y divide-gray-200 text-sm">
            <div className="py-1.5 px-3 flex justify-between">
              <span className="font-medium text-gray-700">In-House Team</span>
              <span className="text-gray-600">{row.inHouse}</span>
            </div>
            <div className="py-1.5 px-3 flex justify-between">
              <span className="font-medium text-gray-700">Marketing Agency</span>
              <span className="text-gray-600">{row.agency}</span>
            </div>
            <div className="py-1.5 px-3 flex justify-between bg-primary-purple/5">
              <span className="font-medium text-primary-purple">AI-Vertise</span>
              <span className="font-bold text-primary-purple">{row.aiVertise}</span>
            </div>
            <div className="py-1.5 px-3 bg-primary-purple/5 flex items-center text-primary-purple font-medium">
              <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{row.savings}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="cost-comparison" className="py-12 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-6 md:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'}`}>
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary-purple bg-primary-purple/10 rounded-full">SAVE THOUSANDS</span>
          <h2 className="text-2xl md:text-4xl mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">Marketing Team Cost Comparison</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how AI-Vertise delivers <span className="font-semibold">the same marketing functions at a fraction of the cost and staff requirements</span> compared to traditional options.
          </p>
        </div>
        
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
          {renderDesktopTable()}
          {renderMobileCards()}
        </div>
        
        <div className={`mt-8 text-center transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md max-w-2xl mx-auto border border-gray-200">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <div className="flex items-center text-sm">
                <div className="w-6 h-6 rounded-full bg-primary-purple/10 flex items-center justify-center mr-2">
                  <svg className="w-3 h-3 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">No contracts</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-6 h-6 rounded-full bg-primary-purple/10 flex items-center justify-center mr-2">
                  <svg className="w-3 h-3 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Cancel anytime</span>
              </div>
            </div>
            <a 
              href="#pricing" 
              className="inline-flex items-center px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-primary-purple to-primary-pink rounded-xl shadow-sm hover:shadow transition-all duration-200"
            >
              Start Saving Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
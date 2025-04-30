import React from 'react';

interface ActionButtonsProps {
  scrollToCaseStudies: () => void;
}

export default function ActionButtons({ scrollToCaseStudies }: ActionButtonsProps) {
  return (
    <div className="flex justify-between relative z-10">
      <button 
        onClick={scrollToCaseStudies}
        className="text-sm px-4 py-2 rounded-lg text-primary-purple border border-primary-purple hover:bg-primary-purple hover:text-white transition-colors flex items-center relative ai-glow"
        style={{ zIndex: 20 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        View Details
      </button>
      <a 
        href="#pricing"
        className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-primary-purple to-primary-pink text-white hover:shadow-lg transition-all flex items-center relative"
        style={{ zIndex: 20 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Check Price
      </a>
    </div>
  );
} 
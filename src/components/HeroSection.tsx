'use client';

import Link from 'next/link';
import { useState, useRef, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import BrowserMockup from './ui/BrowserMockup';
import MobileDashboardView from './ui/MobileDashboardView';
import TabletDashboardView from './ui/TabletDashboardView';
import ErrorBoundary from './ui/ErrorBoundary';
import { DASHBOARD_URL } from '@/lib/utils/constants';

// Dynamic imports with proper Suspense fallbacks
const Modal = dynamic(() => import('./ui/Modal'), {
  ssr: false,
});

const CampaignDetails = dynamic(() => import('./ui/CampaignDetails'), { 
  ssr: false,
});

const OptimizationSuggestions = dynamic(() => import('./ui/OptimizationSuggestions'), {
  ssr: false,
});

// Fallback components for Suspense
const LoadingModal = () => (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg">Loading...</div>
  </div>
);

const LoadingContent = () => (
  <div className="p-4 text-center">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function HeroSection() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isOptimizeModalOpen, setIsOptimizeModalOpen] = useState(false);
  const caseStudiesRef = useRef<HTMLElement | null>(null);
  
  // Find the case studies section on mount
  useEffect(() => {
    // Using querySelector is more reliable than getElementById
    caseStudiesRef.current = document.querySelector('#case-studies');
  }, []);
  
  // Scroll to case studies section using ref
  const scrollToCaseStudies = () => {
    if (caseStudiesRef.current) {
      caseStudiesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsDetailsModalOpen(true);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-soft-gradient">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Hero content */}
          <div className="order-1 md:order-1">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
                <span className="gradient-text">AI-Vertise</span> Boost
              </h1>
              <h2 className="text-lg sm:text-xl mb-8 text-gray-700 font-medium leading-relaxed">
                You brief. We run. AI does the rest. AI-Vertise is a fully-managed, AI-powered ad platform built for small businesses. Just tell us your goals—we'll quickly create your ads, launch your campaigns within 24 hours, and deliver clear reports with actionable insights. No agencies, no delays, no complexity.
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-10">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2.5 rounded-full mr-4 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Fast Launch</h3>
                    <p className="text-gray-600 text-sm leading-snug">Start seeing ad results immediately</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2.5 rounded-full mr-4 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">AI Optimization</h3>
                    <p className="text-gray-600 text-sm leading-snug">From targeting to marketing results</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2.5 rounded-full mr-4 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Budget Management</h3>
                    <p className="text-gray-600 text-sm leading-snug">Maximize your marketing ROI</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2.5 rounded-full mr-4 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Audience Targeting</h3>
                    <p className="text-gray-600 text-sm leading-snug">Precision digital marketing</p>
                  </div>
                </div>
              </div>
              
              {/* Replace form with sign-up button */}
              <div className="mt-8 mb-14 max-w-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  <span className="gradient-text">Start Your Ad Campaign</span> — Create Your Account
                </h3>
                <div className="flex gap-4">
                  <a 
                    href="https://db.ai-vertise.com/register" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary-purple to-primary-pink text-white font-medium px-6 py-4 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center text-base shadow-md whitespace-nowrap justify-center flex-1"
                  >
                    Sign Up
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <Link 
                    href="/#pricing" 
                    className="border-2 border-primary-purple text-primary-purple font-medium px-6 py-4 rounded-lg hover:bg-primary-purple hover:text-white transition-all duration-200 flex items-center text-base whitespace-nowrap justify-center flex-1"
                    onClick={(e) => {
                      e.preventDefault();
                      // Get the current origin and pathname
                      const url = window.location.origin + '/#pricing';
                      window.location.href = url;
                    }}
                  >
                    See Packages
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard preview */}
          <div className="order-2 md:order-2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute -top-10 -right-6 bg-white text-gray-700 text-xs font-medium px-4 py-2 rounded-full shadow-md z-30 border border-gray-200 hidden sm:flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-2 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Dashboard Preview
              </div>
              {/* Mobile indicator */}
              <div className="absolute -top-12 left-0 right-0 text-center text-sm font-medium text-gray-700 block sm:hidden">
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ad Campaign Dashboard
                </span>
              </div>
              <a 
                href="https://db.ai-vertise.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] relative"
                aria-label="Visit AI-Vertise Dashboard"
              >
                {/* Click to register badge */}
                <div className="absolute bottom-4 right-4 z-30 bg-primary-purple text-white px-4 py-2 rounded-lg shadow-lg flex items-center font-medium text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Try Dashboard
                </div>
                <BrowserMockup className="shadow-2xl transform md:scale-110 md:origin-center">
                  {/* Mobile view */}
                  <div className="sm:hidden">
                    <ErrorBoundary>
                      <MobileDashboardView scrollToCaseStudies={scrollToCaseStudies} />
                    </ErrorBoundary>
                  </div>
                  
                  {/* Tablet and desktop view */}
                  <div className="hidden sm:block">
                    <ErrorBoundary>
                      <TabletDashboardView scrollToCaseStudies={scrollToCaseStudies} />
                    </ErrorBoundary>
                  </div>
                </BrowserMockup>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modals with proper Suspense and ErrorBoundary */}
      {isDetailsModalOpen && (
        <ErrorBoundary>
          <Suspense fallback={<LoadingModal />}>
            <Modal title="Campaign Details" onClose={() => setIsDetailsModalOpen(false)}>
              <Suspense fallback={<LoadingContent />}>
                <CampaignDetails />
              </Suspense>
            </Modal>
          </Suspense>
        </ErrorBoundary>
      )}
      
      {isOptimizeModalOpen && (
        <ErrorBoundary>
          <Suspense fallback={<LoadingModal />}>
            <Modal title="Optimization Suggestions" onClose={() => setIsOptimizeModalOpen(false)}>
              <Suspense fallback={<LoadingContent />}>
                <OptimizationSuggestions />
              </Suspense>
            </Modal>
          </Suspense>
        </ErrorBoundary>
      )}
    </section>
  );
} 
'use client';

import Link from 'next/link';
import { useState, lazy, Suspense } from 'react';
import BrowserMockup from './ui/BrowserMockup';
import MobileDashboardView from './ui/MobileDashboardView';
import TabletDashboardView from './ui/TabletDashboardView';
import { DASHBOARD_URL } from '../lib/utils/constants';

// Lazy load modal components
const Modal = lazy(() => import('./ui/Modal'));
const CampaignDetails = lazy(() => import('./ui/CampaignDetails'));
const OptimizationSuggestions = lazy(() => import('./ui/OptimizationSuggestions'));

export default function HeroSection() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isOptimizeModalOpen, setIsOptimizeModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Scroll to case studies section
  const scrollToCaseStudies = () => {
    const caseStudiesSection = document.getElementById('case-studies');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsDetailsModalOpen(true);
    }
  };
  
  // Handle form submission feedback
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Let Formspree handle the actual submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 500);
  };

  return (
    <section className="py-16 md:py-24 bg-soft-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="order-1 md:order-1">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
                <span className="gradient-text">AI-Vertise</span> Boost
              </h1>
              <h2 className="text-xl sm:text-2xl mb-10 text-gray-700 font-medium leading-relaxed">
                AI-powered advertising for small businesses — get results in 24 hours. Skip agencies, delays, and high costs — our AI builds and launches your campaign, fast.
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2.5 rounded-full mr-3.5 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Launch in 1 Day</h3>
                    <p className="text-gray-600 leading-relaxed">Start seeing results immediately</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2.5 rounded-full mr-3.5 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">AI-Powered Optimization</h3>
                    <p className="text-gray-600 leading-relaxed">From targeting to results</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2.5 rounded-full mr-3.5 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Smart Budget Management</h3>
                    <p className="text-gray-600 leading-relaxed">Maximize your ROI</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2.5 rounded-full mr-3.5 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Custom Audience Targeting</h3>
                    <p className="text-gray-600 leading-relaxed">Precise reach</p>
                  </div>
                </div>
              </div>
              
              {/* Standalone form with large rounded corners */}
              <div className="mt-8 mb-16 max-w-4xl">
                {formSubmitted ? (
                  <div className="bg-white border border-gray-200 rounded-full p-4">
                    <p className="text-gray-500 font-normal text-sm">
                      Thanks! We'll contact you shortly.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white rounded-full shadow-lg overflow-hidden flex w-full relative">
                    <div className="absolute inset-0 rounded-full opacity-10" style={{ background: 'linear-gradient(90deg, #4A00E0, #FF416C)' }}></div>
                    <input 
                      name="contact"
                      type="text" 
                      placeholder="Enter your email or phone" 
                      className="px-8 py-6 border-0 bg-transparent w-full focus:ring-0 focus:outline-none text-gray-500 text-lg relative z-10"
                      required
                      form="contact-form"
                    />
                    <div className="px-8 flex items-center relative z-10">
                      <button 
                        type="submit"
                        className="text-gray-600 font-normal flex items-center text-lg whitespace-nowrap"
                        form="contact-form"
                      >
                        Get AI Ads
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                    <form 
                      id="contact-form"
                      action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || ''}`}
                      method="POST"
                      onSubmit={handleFormSubmit}
                      className="hidden"
                    ></form>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Dashboard preview */}
          <div className="order-2 md:order-2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -top-8 -right-4 bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-md z-30 border border-gray-200 hidden sm:flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Dashboard Preview
              </div>
              {/* Mobile indicator */}
              <div className="absolute -top-10 left-0 right-0 text-center text-sm font-medium text-gray-700 block sm:hidden">
                <span className="bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Dashboard Preview Only
                </span>
              </div>
              <BrowserMockup className="shadow-2xl transform md:scale-110 md:origin-center">
                {/* Mobile view */}
                <div className="sm:hidden">
                  <MobileDashboardView scrollToCaseStudies={scrollToCaseStudies} />
                </div>
                
                {/* Tablet and desktop view */}
                <div className="hidden sm:block">
                  <TabletDashboardView scrollToCaseStudies={scrollToCaseStudies} />
                </div>
              </BrowserMockup>
            </div>
          </div>
        </div>
      </div>

      {/* Modals - Lazy loaded */}
      {isDetailsModalOpen && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">Loading...</div>
        </div>}>
          <Modal title="Campaign Details" onClose={() => setIsDetailsModalOpen(false)}>
            <CampaignDetails />
          </Modal>
        </Suspense>
      )}
      
      {isOptimizeModalOpen && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">Loading...</div>
        </div>}>
          <Modal title="Optimization Suggestions" onClose={() => setIsOptimizeModalOpen(false)}>
            <OptimizationSuggestions />
          </Modal>
        </Suspense>
      )}
    </section>
  );
} 
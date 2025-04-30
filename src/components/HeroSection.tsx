'use client';

import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import BrowserMockup from './ui/BrowserMockup';
import MobileDashboardView from './ui/MobileDashboardView';
import TabletDashboardView from './ui/TabletDashboardView';
import { DASHBOARD_URL } from '@/lib/utils/constants';

// Dynamic imports with explicit loading state and no SSR
const Modal = dynamic(() => import('./ui/Modal'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">Loading...</div>
    </div>
  )
});

const CampaignDetails = dynamic(() => import('./ui/CampaignDetails'), { 
  ssr: false,
  loading: () => <div className="p-4 text-center">Loading campaign details...</div>
});

const OptimizationSuggestions = dynamic(() => import('./ui/OptimizationSuggestions'), {
  ssr: false,
  loading: () => <div className="p-4 text-center">Loading optimization suggestions...</div>
});

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
              
              {/* Standalone form with large rounded corners */}
              <div className="mt-8 mb-14 max-w-xl">
                {formSubmitted ? (
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <p className="text-gray-500 font-normal text-sm">
                      Thanks! We'll contact you shortly about your ad campaign.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      <span className="gradient-text">Start Your Ad Campaign</span> — Enter Your Contact Info
                    </h3>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden relative border border-indigo-100 p-3">
                      <div className="absolute inset-0 rounded-xl opacity-10" style={{ background: 'linear-gradient(90deg, #4A00E0, #FF416C)' }}></div>
                      <div className="flex flex-row items-center gap-4 relative z-10">
                        <input 
                          name="contact"
                          type="text" 
                          placeholder="Enter your email or phone" 
                          className="px-6 py-5 border border-gray-100 rounded-lg bg-white/80 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none text-gray-700 text-base"
                          required
                          form="contact-form"
                        />
                        <button 
                          type="submit"
                          className="bg-gradient-to-r from-primary-purple to-primary-pink text-white font-medium px-6 py-5 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center text-base shadow-sm whitespace-nowrap"
                          form="contact-form"
                        >
                          Get AI Marketing
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                      <form 
                        id="contact-form"
                        action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xayzgbnw'}`}
                        method="POST"
                        onSubmit={handleFormSubmit}
                        className="hidden"
                      ></form>
                    </div>
                  </>
                )}
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

      {/* Modals rendered directly without Suspense wrapper */}
      {isDetailsModalOpen && (
        <Modal title="Campaign Details" onClose={() => setIsDetailsModalOpen(false)}>
          <CampaignDetails />
        </Modal>
      )}
      
      {isOptimizeModalOpen && (
        <Modal title="Optimization Suggestions" onClose={() => setIsOptimizeModalOpen(false)}>
          <OptimizationSuggestions />
        </Modal>
      )}
    </section>
  );
} 
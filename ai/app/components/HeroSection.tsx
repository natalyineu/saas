'use client';

import Link from 'next/link';
import { useState } from 'react';
import BrowserMockup from './ui/BrowserMockup';
import Modal from './ui/Modal';
import CampaignDetails from './ui/CampaignDetails';
import OptimizationSuggestions from './ui/OptimizationSuggestions';
import MobileDashboardView from './ui/MobileDashboardView';
import TabletDashboardView from './ui/TabletDashboardView';
import { DASHBOARD_URL } from '../lib/utils/constants';

export default function HeroSection() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isOptimizeModalOpen, setIsOptimizeModalOpen] = useState(false);
  
  // Scroll to case studies section
  const scrollToCaseStudies = () => {
    const caseStudiesSection = document.getElementById('case-studies');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsDetailsModalOpen(true);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="order-1 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-3 leading-tight">
              <span className="gradient-text">AI-Vertise</span> Boost
            </h1>
            <h2 className="text-xl sm:text-2xl mb-6 text-gray-700 font-medium">
              AI-powered advertising for small businesses — get results in 24 hours.
            </h2>
            <p className="text-lg mb-5 text-gray-600 max-w-md">
              Skip agencies, delays, and high costs — our AI builds and launches your campaign, fast.
            </p>
            
            <ul className="mb-8 space-y-2">
              <li className="flex items-start">
                <span className="text-xl mr-2">🚀</span>
                <span className="text-gray-700"><span className="font-medium">Launch in 1 Day</span> — start seeing results immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">🤖</span>
                <span className="text-gray-700"><span className="font-medium">AI handles everything</span> — from targeting to optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">💸</span>
                <span className="text-gray-700"><span className="font-medium">Smart budget optimization</span> — maximize your ROI</span>
              </li>
            </ul>
            
            <div className="mt-6 mb-8">
              <p className="text-base text-primary-purple/80 font-medium italic">
                No creatives? No problem — our AI picks the perfect visuals, and experts validate every campaign.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link 
                href="#pricing" 
                className="btn-primary inline-block"
              >
                Check Prices
              </Link>
              <Link 
                href={DASHBOARD_URL}
                className="btn-secondary ai-glow inline-block flex items-center text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Ads
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-3">Fully automated. Just URL.</p>
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

      {/* Modals */}
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
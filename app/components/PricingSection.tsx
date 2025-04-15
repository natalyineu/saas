'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import PricingPlan from './pricing/PricingPlan';
import { pricingPlans, getAnnualSavings, getAnnualImpressions } from '../data/pricing';

export default function PricingSection() {
  // Add client-side state to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);
  // Add state for billing period toggle
  const [isAnnual, setIsAnnual] = useState(false);
  
  // This will only run on the client after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use the imported plans from data file
  const plans = pricingPlans;

  return (
    <section id="pricing" className="py-12 bg-soft-gradient">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-primary-purple bg-primary-purple/10 rounded-full">PRICING</span>
          <h2 className="text-3xl md:text-4xl mb-3 font-bold">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-sm">
            Choose a plan that fits your business needs. All plans include AI-powered campaigns, creative, and optimization.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-6">
            <span className={`mr-3 text-sm font-medium ${isAnnual ? 'text-gray-500' : 'text-gray-900'}`}>Monthly</span>
            
            <button
              onClick={() => isClient && setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-purple/40 ${isAnnual ? 'bg-primary-purple' : 'bg-gray-300'}`}
              role="switch"
              aria-checked={isAnnual}
            >
              <span
                className={`${isAnnual ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
            
            <span className={`ml-3 text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                +20% impressions
              </span>
            </span>
          </div>
          
          {isAnnual && (
            <p className="text-sm text-gray-600 mt-2">
              Annual payment includes a bonus of 20% more impressions!
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index}
              plan={plan} 
              isAnnual={isAnnual}
              getAnnualSavings={getAnnualSavings}
              getAnnualImpressions={getAnnualImpressions}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-5 text-sm">All plans include access to our AI advertising platform</p>
          <Link
            href="/contact"
            className="text-primary-purple hover:text-primary-pink transition-colors duration-200 inline-flex items-center text-sm"
          >
            Need a custom plan? Talk to our team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 
import React from 'react';
import { Metadata } from 'next';
import { COMPANY_EMAIL } from '@/lib/utils/constants';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import Script from 'next/script';
import { faqs, generateFAQStructuredData } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | AI-Vertise Boost',
  description: 'Get answers to common questions about AI-Vertise Boost, our AI-powered advertising platform for small and medium businesses.',
  keywords: 'AI-Vertise FAQ, advertising FAQ, AI marketing questions, digital advertising help',
  openGraph: {
    title: 'Frequently Asked Questions | AI-Vertise Boost',
    description: 'Find answers to common questions about AI-Vertise Boost, our AI-powered advertising platform for small and medium businesses.',
    type: 'website',
    url: 'https://ai-vertise.com/faq',
  },
  twitter: {
    card: 'summary',
    title: 'Frequently Asked Questions | AI-Vertise Boost',
    description: 'Find answers to common questions about AI-Vertise Boost.'
  }
};

// Generate FAQ structured data using the shared generator function
const faqStructuredData = generateFAQStructuredData();

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs containerClasses="flex py-4 text-sm px-4 md:px-6 max-w-7xl mx-auto" />
      
      <Script 
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our AI-powered advertising platform.
            If you can't find what you're looking for, please contact our support team.
          </p>
        </div>
        
        <FAQSection />
      </main>
    </div>
  );
} 
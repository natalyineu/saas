import React from 'react';
import { Metadata } from 'next';
import { COMPANY_EMAIL } from '@/lib/utils/constants';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import Script from 'next/script';
import { faqs, generateFAQStructuredData } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | AI-Vertise Ads',
  description: 'Get comprehensive answers to common questions about AI-Vertise Ads. Learn how our AI-powered advertising platform streamlines campaigns, increases ROI, and helps small businesses succeed with digital marketing.',
  keywords: 'AI-Vertise FAQ, advertising FAQ, AI marketing questions, digital advertising help, small business marketing, ad campaign automation, marketing ROI, advertising platform',
  openGraph: {
    title: 'Frequently Asked Questions | AI-Vertise Ads',
    description: 'Find answers to common questions about AI-Vertise Ads, our AI-powered advertising platform designed specifically for small and medium businesses.',
    type: 'website',
    url: 'https://ai-vertise.com/faq',
    images: [
      {
        url: '/images/faq-header.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Vertise Ads FAQ - Find answers to your digital marketing questions'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Frequently Asked Questions | AI-Vertise Ads',
    description: 'Find answers to common questions about AI-Vertise Ads.',
    images: ['/images/faq-twitter-card.jpg']
  },
  alternates: {
    canonical: 'https://ai-vertise.com/faq'
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
      
      <Script 
        id="webpage-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI-Vertise FAQ",
            "description": "Frequently asked questions about AI-Vertise Ads, our AI-powered advertising platform.",
            "url": "https://ai-vertise.com/faq",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "url": `https://ai-vertise.com/faq/${faq.slug}`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          }) 
        }}
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
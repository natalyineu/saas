import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { COMPANY_EMAIL } from '../lib/utils/constants';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is AI-Vertise Boost?",
      answer: "AI-Vertise Boost is an AI-powered advertising platform designed specifically for small and medium businesses. We help you create, launch, and optimize digital advertising campaigns across multiple platforms with minimal effort and maximum ROI."
    },
    {
      question: "How does AI-powered targeting work?",
      answer: "Our AI algorithms analyze vast amounts of data to identify the most promising audience segments for your business. The system continuously learns from campaign performance to refine targeting and improve results over time."
    },
    {
      question: "Which ad platforms do you support?",
      answer: "We support major advertising platforms including Google Ads, Facebook/Instagram Ads, LinkedIn Ads, and TikTok Ads. Our different plans offer access to different combinations of these platforms."
    },
    {
      question: "How quickly can I launch my campaigns?",
      answer: "You can launch your first campaign within minutes of signing up. Our streamlined process guides you through the essential steps, and our AI handles the complex technical aspects automatically."
    },
    {
      question: "Do I need advertising experience to use your platform?",
      answer: "No, our platform is designed to be user-friendly for beginners. The AI handles the technical aspects while giving you easy-to-understand controls and insights that don't require prior advertising experience."
    },
    {
      question: "How does billing work?",
      answer: "We offer monthly subscription plans with different features based on your business needs. You can upgrade, downgrade, or cancel your subscription at any time. Ad spend on platforms like Google and Facebook is separate from our subscription fee."
    },
    {
      question: "Is there a minimum ad budget required?",
      answer: "No, there's no minimum ad budget. However, we recommend at least $300/month of ad spend (paid directly to the ad platforms) to see meaningful results."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 14-day money-back guarantee for new customers. If you're not satisfied with our service, contact us within 14 days of your initial purchase for a full refund."
    },
    {
      question: "How do I contact customer support?",
      answer: `You can reach our customer support team at ${COMPANY_EMAIL}. We aim to respond to all inquiries within 24 hours on business days.`
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-10">Find answers to the most common questions about AI-Vertise Boost.</p>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-3">Still have questions?</h3>
          <p className="mb-4">If you couldn't find the answer to your question, please reach out to our team.</p>
          <a 
            href={`mailto:${COMPANY_EMAIL}`} 
            className="inline-flex items-center text-primary-purple hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
} 
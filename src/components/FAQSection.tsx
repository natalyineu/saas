'use client';

import { useState } from 'react';
import { COMPANY_EMAIL } from '@/lib/utils/constants';
import { faqs } from '@/data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg overflow-hidden"
          itemScope
          itemType="https://schema.org/Question"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-medium" itemProp="name">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
            itemScope
            itemType="https://schema.org/Answer"
          >
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700" itemProp="text">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
      
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
    </div>
  );
} 
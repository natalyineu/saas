'use client';

import React, { useState } from 'react';
import { COMPANY_EMAIL, COMPANY_PHONE } from '../../lib/utils/constants';
import FooterHeading from './FooterHeading';
import SocialMediaLinks from './SocialMediaLinks';

export default function FooterContact() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Get form data
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Send to Formspree
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xblgwbvo'}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubscribed(true);
        setEmail('');
      } else {
        alert('There was a problem submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-6 md:mt-0">
      <FooterHeading
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
      >
        Contact
      </FooterHeading>
      <ul className="space-y-3 md:space-y-4">
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-purple mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-gray-300 hover:text-white transition-colors">
            {COMPANY_EMAIL}
          </a>
        </li>
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-purple mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
            {COMPANY_PHONE}
          </a>
        </li>
        <li className="mt-4">
          <SocialMediaLinks />
        </li>
      </ul>
      
      {/* Newsletter Subscription Form */}
      <div className="mt-6">
        <FooterHeading
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          }
        >
          Newsletter
        </FooterHeading>
        
        {subscribed ? (
          <div className="text-green-400 text-sm mt-2">
            Thanks for subscribing!
          </div>
        ) : (
          <form 
            method="POST" 
            onSubmit={handleNewsletterSubmit}
            className="mt-3"
          >
            <input type="hidden" name="form-type" value="newsletter" />
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" 
                required
                className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm border border-gray-700 focus:ring-1 focus:ring-primary-purple focus:outline-none"
              />
              <button 
                type="submit"
                disabled={submitting}
                className="bg-primary-purple hover:bg-primary-purple/90 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
} 
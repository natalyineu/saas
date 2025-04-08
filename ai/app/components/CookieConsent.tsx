'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Only show after a small delay to avoid immediate popup on first visit
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200 p-4 md:flex md:items-center md:justify-between">
      <div className="mb-4 md:mb-0 md:mr-4 md:max-w-3xl">
        <p className="text-sm text-gray-700">
          We use cookies to enhance your experience on our website. By clicking "Accept", you consent to the use of all cookies. 
          Read our <Link href="/cookie-policy" className="text-primary-purple hover:underline">Cookie Policy</Link> to learn more.
        </p>
      </div>
      <div className="flex items-center space-x-3 flex-shrink-0">
        <Link href="/cookie-policy" className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          Learn More
        </Link>
        <button
          onClick={acceptCookies}
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-purple to-primary-pink rounded-md hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-purple focus:ring-opacity-50"
        >
          Accept
        </button>
      </div>
    </div>
  );
} 
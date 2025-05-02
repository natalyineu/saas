'use client';

import { useState, useEffect } from 'react';
import { TargetBullseyeIcon } from './ui/BasicIcons';
import { useRouter } from 'next/navigation';

export default function SupportButton() {
  const router = useRouter();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Track scroll position and screen size to adjust visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 300);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Set initial states
    handleResize();
    handleScroll();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      {/* Buy Me Coffee Button will be inserted here by the script */}
      <div
        id="bmc-container"
        className="fixed right-4 bottom-24 z-50"
        style={{ minWidth: '150px', display: 'none' }}
      ></div>
      
      {/* Main button - styled as Buy an Ads package button */}
      <div className={`fixed right-2 sm:right-4 ${isMobile ? 'bottom-2' : 'bottom-4'} z-50 transition-all duration-300 ${isMobile && !isScrolled ? 'scale-75 opacity-70' : 'scale-100 opacity-100'}`}>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-medium shadow-lg rounded-full ${isMobile ? 'px-2 py-2' : 'px-4 sm:px-6 py-2.5 sm:py-3'} flex items-center justify-center hover:shadow-xl transition-all animate-pulse-slow`}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => router.push('/contact')}
          aria-label="Contact us about advertising"
        >
          {/* Target icon */}
          <TargetBullseyeIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-white" />
          
          {isMobile ? (
            <span className="text-xs whitespace-nowrap">Contact</span>
          ) : (
            <span>Get an Ads package</span>
          )}
          
          {showTooltip && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-blue-600 shadow-md rounded-md py-1 px-2 text-sm whitespace-nowrap hidden md:block">
              Contact us for premium advertising
            </div>
          )}
        </button>
      </div>
    </>
  );
} 
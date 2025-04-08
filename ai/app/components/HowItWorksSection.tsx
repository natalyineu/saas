'use client';

import { WORK_STEPS } from '../lib/utils/constants';
import { useEffect, useState, useRef } from 'react';

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const getStepIcon = (stepNumber: string) => {
    switch (stepNumber) {
      case "01":
        return (
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case "02":
        return (
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10H21M7 15H8M12 15H13M17 15H18M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "03":
        return (
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return stepNumber;
    }
  };

  return (
    <section id="how-it-works" className="py-16 bg-soft-gradient" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started with AI-Vertise Boost is simple. Just follow these three easy steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-12 sm:pb-0 relative">
          {/* Connecting line between steps (visible on desktop) */}
          <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink hidden md:block"></div>
          
          {WORK_STEPS.map((step, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 sm:p-8 rounded-lg shadow-md relative mb-4 sm:mb-0 transition-all duration-700 delay-${index * 200} 
                ${isVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-12'}`}
            >
              <div className="absolute -top-5 -left-5 bg-gradient-to-r from-primary-purple to-primary-pink text-white w-14 h-14 rounded-full flex items-center justify-center font-bold shadow-lg transform transition-transform duration-500 hover:scale-110 hover:rotate-12 z-10">
                {getStepIcon(step.number)}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mt-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Animated progress indicator */}
              <div className={`h-1 bg-gray-100 w-full absolute bottom-0 left-0 rounded-b-lg overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div 
                  className="h-full bg-gradient-to-r from-primary-purple to-primary-pink transition-all duration-1000 ease-out delay-500"
                  style={{ width: isVisible ? '100%' : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="h-14 sm:h-0 md:h-0"></div>
      </div>
    </section>
  );
} 
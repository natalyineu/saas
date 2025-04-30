'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '../lib/utils/constants';
import CaseStudyIcon from './ui/CaseStudyIcons';

export default function CaseStudiesSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
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
  
  // Auto-play carousel
  useEffect(() => {
    if (isHovering) return;
    
    autoPlayRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [activeSlide, isHovering]);
  
  // Add icons to the case studies from constants using the shared component
  const caseStudiesWithIcons = [
    {
      ...CASE_STUDIES[0],
      icon: (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-500">
          <CaseStudyIcon type="coffee-shop" size="lg" />
        </div>
      )
    },
    {
      ...CASE_STUDIES[1],
      icon: (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-500">
          <CaseStudyIcon type="restaurant" size="lg" />
        </div>
      )
    },
    {
      ...CASE_STUDIES[2],
      icon: (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-red-50 group-hover:from-pink-100 group-hover:to-red-100 transition-all duration-500">
          <CaseStudyIcon type="boutique" size="lg" />
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === caseStudiesWithIcons.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? caseStudiesWithIcons.length - 1 : prev - 1));
  };

  return (
    <section id="case-studies" className="py-16 bg-soft-gradient" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how businesses like yours have achieved amazing results with AI-Vertise Boost.
          </p>
        </div>
        
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-all duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {caseStudiesWithIcons.map((caseStudy, index) => (
                <div key={index} className="w-full flex-shrink-0 p-0">
                  <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row group">
                    <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                      {caseStudy.icon}
                      
                      {/* Decorative elements */}
                      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent md:hidden"></div>
                    </div>
                    <div className="p-6 md:w-3/5 transition-all duration-300 group-hover:bg-gray-50">
                      <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                        <p className="text-sm gradient-text font-medium mb-2">{caseStudy.company}</p>
                      </div>
                      <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                      </div>
                      <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <p className="text-xl font-bold gradient-text mb-4">{caseStudy.result}</p>
                      </div>
                      <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <p className="text-gray-600">{caseStudy.description}</p>
                      </div>
                      
                      {/* Call-to-action button */}
                      <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                        <Link 
                          href={index === 0 ? '/blog/urban-beans-case-study' : 
                               index === 1 ? '/blog/taste-of-italy-case-study' : 
                               '/blog/chic-trends-case-study'}
                          className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-primary-purple to-primary-pink text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 hover:shadow-lg transition-all duration-300"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 hover:shadow-lg transition-all duration-300"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Pagination dots */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            {caseStudiesWithIcons.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSlide 
                    ? 'bg-gradient-to-r from-primary-purple to-primary-pink scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Add a link to the blog for all case studies */}
        <div className="text-center mt-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary-purple hover:text-primary-pink transition-all duration-300 font-medium"
          >
            View all success stories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 
'use client';

import { useState, useRef, useEffect } from 'react';

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
  
  const caseStudies = [
    {
      title: "Coffee Shop Campaign",
      company: "Urban Beans",
      result: "+143% increase in foot traffic",
      description: "Urban Beans used AI-Vertise Boost to target local coffee enthusiasts and saw a dramatic increase in new customers within the first month.",
      icon: (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-500">
          <div className="relative w-24 h-24 transform transition-transform duration-500 group-hover:scale-110">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
              <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
                <rect x="35" y="25" width="30" height="10" rx="5" fill="rgba(252,70,107,1)" />
                <path d="M30 60 L70 60" stroke="rgba(63,94,251,1)" strokeWidth="3" />
                <path d="M40 50 C40 40, 60 40, 60 50" stroke="rgba(63,94,251,1)" strokeWidth="3" fill="none" className="animate-path" />
                <path d="M30 70 L40 60 L60 60 L70 70" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
              </g>
            </svg>
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg animate-pulse">
              +143%
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Local Restaurant Promotion",
      company: "Taste of Italy",
      result: "+87% boost in weekend reservations",
      description: "Taste of Italy restaurant leveraged our platform to promote their weekend specials, resulting in fully booked weekends.",
      icon: (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-500">
          <div className="relative w-24 h-24 transform transition-transform duration-500 group-hover:scale-110">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background circle */}
              <circle cx="50" cy="50" r="40" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
              
              {/* Restaurant plate */}
              <circle cx="50" cy="50" r="30" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" className="transform transition-transform duration-500 group-hover:scale-105" />
              
              {/* Fork and knife */}
              <path d="M35 30 L35 70" stroke="rgba(252,70,107,1)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M40 30 C40 40, 38 50, 40 70" stroke="rgba(252,70,107,1)" strokeWidth="2.5" strokeLinecap="round" />
              
              <path d="M65 30 L65 40 C65 45, 60 50, 65 55 L65 70" stroke="rgba(63,94,251,1)" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Food on plate */}
              <circle cx="50" cy="50" r="12" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow" />
              <path d="M44 48 C47 44, 53 44, 56 48" stroke="rgba(63,94,251,1)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M44 52 C47 56, 53 56, 56 52" stroke="rgba(63,94,251,1)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg animate-pulse">
              +87%
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Online Boutique Launch",
      company: "Chic Trends",
      result: "+215% return on ad spend",
      description: "Chic Trends online boutique used our AI targeting to find fashion-forward customers, achieving impressive sales from day one.",
      icon: (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-red-50 group-hover:from-pink-100 group-hover:to-red-100 transition-all duration-500">
          <div className="relative w-24 h-24 transform transition-transform duration-500 group-hover:scale-110">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect className="transform transition-transform duration-500 group-hover:scale-105" x="25" y="30" width="50" height="40" rx="4" fill="rgba(252,70,107,0.8)" />
              <rect className="transform origin-top transition-transform duration-500 group-hover:scale-y-105" x="30" y="35" width="40" height="30" rx="2" fill="white" />
              <rect className="transition-colors duration-500 group-hover:fill-purple-600" x="30" y="35" width="40" height="7" rx="1" fill="rgba(63,94,251,1)" />
              <rect className="animate-pulse-slow" x="33" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
              <rect className="animate-pulse-slow" x="45" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
              <rect className="animate-pulse-slow" x="57" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
              <text className="animate-pulse-slow" x="80" y="40" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
              <text className="animate-pulse-slow" x="20" y="40" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
              <text className="animate-pulse-slow" x="80" y="60" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
              <text className="animate-pulse-slow" x="20" y="60" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
            </svg>
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg animate-pulse">
              +215%
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
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
              {caseStudies.map((caseStudy, index) => (
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
                        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-primary-purple to-primary-pink text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Improved navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-primary-purple hover:bg-gray-50 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-primary-purple hover:bg-gray-50 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Pagination indicator - moved outside the slider container for better layout */}
        <div className="flex justify-center mt-6 mb-4">
          <div className="flex items-center space-x-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-gradient-to-r from-primary-purple to-primary-pink'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
'use client';

import { useState } from 'react';

export default function CaseStudiesSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const caseStudies = [
    {
      title: "Coffee Shop Campaign",
      company: "Urban Beans",
      result: "+143% increase in foot traffic",
      description: "Urban Beans used AI-Vertise Boost to target local coffee enthusiasts and saw a dramatic increase in new customers within the first month.",
      icon: (
        <div className="h-full w-full flex items-center justify-center bg-white/50">
          <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
            <rect x="35" y="25" width="30" height="10" rx="5" fill="rgba(252,70,107,1)" />
            <path d="M30 60 L70 60" stroke="rgba(63,94,251,1)" strokeWidth="3" />
            <path d="M40 50 C40 40, 60 40, 60 50" stroke="rgba(63,94,251,1)" strokeWidth="3" fill="none" />
            <path d="M30 70 L40 60 L60 60 L70 70" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
          </svg>
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            +143%
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
        <div className="h-full w-full flex items-center justify-center bg-white/50">
          <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="30" width="60" height="40" rx="4" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" />
            <rect x="30" y="20" width="40" height="10" rx="2" fill="rgba(252,70,107,1)" />
            <rect x="35" y="40" width="30" height="20" rx="2" fill="rgba(63,94,251,0.1)" />
            <circle cx="40" cy="50" r="3" fill="rgba(63,94,251,1)" />
            <circle cx="50" cy="50" r="3" fill="rgba(63,94,251,1)" />
            <circle cx="60" cy="50" r="3" fill="rgba(63,94,251,1)" />
          </svg>
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            +87%
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
        <div className="h-full w-full flex items-center justify-center bg-white/50">
          <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="30" width="50" height="40" rx="4" fill="rgba(252,70,107,1)" />
            <rect x="30" y="35" width="40" height="30" rx="2" fill="white" />
            <rect x="30" y="35" width="40" height="7" rx="1" fill="rgba(63,94,251,1)" />
            <rect x="33" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
            <rect x="45" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
            <rect x="57" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
            <text x="80" y="40" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
            <text x="20" y="40" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
            <text x="80" y="60" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
            <text x="20" y="60" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
          </svg>
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            +215%
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
    <section id="case-studies" className="py-16 bg-soft-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how businesses like yours have achieved amazing results with AI-Vertise Boost.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {caseStudies.map((caseStudy, index) => (
                <div key={index} className="w-full flex-shrink-0 p-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                      {caseStudy.icon}
                    </div>
                    <div className="p-6 md:w-3/5">
                      <p className="text-sm gradient-text font-medium mb-2">{caseStudy.company}</p>
                      <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                      <p className="text-xl font-bold gradient-text mb-4">{caseStudy.result}</p>
                      <p className="text-gray-600">{caseStudy.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-primary-purple hover:bg-gray-50"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-primary-purple hover:bg-gray-50"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="flex justify-center mt-6 gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-primary-purple' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
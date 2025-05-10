'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SuccessStoryCard from './SuccessStoryCard';
import { SuccessStory } from '@/data/blog/successStories'; 
import {
  SimpleEcommerceIcon,
  SimpleRestaurantIcon,
  SimpleCoffeeIcon,
  SimpleSuccessIcon
} from './SuccessStoryIcons';

interface SuccessStoriesCarouselProps {
  stories: SuccessStory[];
}

export default function SuccessStoriesCarousel({ stories }: SuccessStoriesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Get the appropriate icon for each story
  const getIconComponent = (story: SuccessStory) => {
    if (story.id.includes('restaurant') || story.id.includes('taste-of-italy')) {
      return <SimpleRestaurantIcon />;
    } else if (story.id.includes('fashion') || story.id.includes('chic-trends')) {
      return <SimpleEcommerceIcon />;
    } else if (story.id.includes('coffee') || story.id.includes('urban-beans')) {
      return <SimpleCoffeeIcon />;
    }
    return <SimpleSuccessIcon />;
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  // Handle dot navigation
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  if (stories.length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-4">Success Stories</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        See how businesses like yours have achieved amazing results with AI-Vertise Ads.
      </p>

      <div className="relative">
        {/* Carousel Slide */}
        <SuccessStoryCard
          story={stories[activeIndex]}
          iconComponent={getIconComponent(stories[activeIndex])}
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex 
                ? 'bg-indigo-600' 
                : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center mt-8">
        <Link 
          href="/blog" 
          className="text-indigo-600 font-medium flex items-center justify-center hover:underline"
        >
          View all success stories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 
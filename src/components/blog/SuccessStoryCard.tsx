import React from 'react';
import Link from 'next/link';
import { SuccessStory } from '@/data/blog/successStories';

interface SuccessStoryCardProps {
  story: SuccessStory;
  iconComponent: React.ReactNode;
}

export default function SuccessStoryCard({ story, iconComponent }: SuccessStoryCardProps) {
  // Extract the percentage value and category from the story
  const percentValue = story.stats?.value || '+100%';
  const statsLabel = story.stats?.label || 'improvement';
  const category = story.category || 'CASE STUDY';

  // Background colors based on story type (can be customized)
  const getBgColor = () => {
    if (story.id.includes('restaurant') || story.id.includes('taste-of-italy')) {
      return 'bg-blue-50';
    } else if (story.id.includes('fashion') || story.id.includes('chic-trends')) {
      return 'bg-pink-50';
    } else if (story.id.includes('coffee') || story.id.includes('urban-beans')) {
      return 'bg-green-50';
    }
    return 'bg-purple-50';
  };

  return (
    <article className="rounded-xl overflow-hidden bg-white shadow-md">
      <div className="flex flex-col md:flex-row">
        {/* Icon Section */}
        <div className={`${getBgColor()} relative md:w-2/5 p-12 flex items-center justify-center`}>
          {/* Percentage Badge */}
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
              {percentValue}
            </div>
          </div>
          
          {/* Icon Container */}
          <div className="relative w-32 h-32 transform transition-all duration-500">
            {iconComponent}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="md:w-3/5 p-8 flex flex-col justify-center">
          <span className="text-indigo-600 font-medium text-sm mb-2">
            {category}
          </span>
          
          <h3 className="text-2xl font-bold mb-3">
            {story.title}
          </h3>
          
          <p className="text-indigo-600 text-xl font-semibold mb-4">
            {percentValue} {statsLabel}
          </p>
          
          <p className="text-gray-600 mb-6">
            {story.excerpt}
          </p>
          
          <Link 
            href={`/blog/${story.id}`} 
            className="bg-gradient-to-r from-primary-purple to-primary-pink text-white px-6 py-2 rounded-lg inline-block font-medium hover:shadow-lg transition-all w-fit"
          >
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
} 
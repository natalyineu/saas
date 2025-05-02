'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '@/data/blog/posts';
import { SuccessStory } from '@/data/blog/successStories';
import { getBlogIcon, getBlogStats } from '@/lib/utils/blog-helpers';

type BlogContent = BlogPost | SuccessStory;

interface UnifiedBlogListProps {
  content: BlogContent[];
  initialCount?: number;
  loadMoreIncrement?: number;
}

export default function UnifiedBlogList({ 
  content, 
  initialCount = 6, 
  loadMoreIncrement = 3 
}: UnifiedBlogListProps) {
  const [displayCount, setDisplayCount] = useState(initialCount);
  
  const handleLoadMore = () => {
    setDisplayCount(prevCount => 
      Math.min(prevCount + loadMoreIncrement, content.length)
    );
  };
  
  const hasMoreContent = displayCount < content.length;

  return (
    <div className="space-y-10">
      {/* Blog content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {content.slice(0, displayCount).map((post) => (
          <BlogCard 
            key={post.id}
            post={post}
            icon={getBlogIcon(post)}
            stats={getBlogStats(post)}
          />
        ))}
      </div>
      
      {/* Load more button */}
      {hasMoreContent && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={handleLoadMore}
            className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-pink text-white font-medium rounded-lg shadow-sm hover:opacity-90 transition-all duration-300 flex items-center"
          >
            View More Content
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
} 
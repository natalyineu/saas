'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import BlogCard from './BlogCard';
import { BlogPost } from '@/data/blog/posts';
import { SuccessStory } from '@/data/blog/successStories';
import { getBlogIcon, getBlogStats } from '@/lib/utils/blog-helpers';

type BlogContent = BlogPost | SuccessStory;

interface UnifiedBlogListProps {
  content: BlogContent[];
  initialCount?: number;
  loadMoreIncrement?: number;
  currentPostId?: string;
}

export default function UnifiedBlogList({ 
  content, 
  initialCount = 6, 
  loadMoreIncrement = 3,
  currentPostId
}: UnifiedBlogListProps) {
  const [displayCount, setDisplayCount] = useState(initialCount);
  const pathname = usePathname();
  const [currentPost, setCurrentPost] = useState<string | undefined>(currentPostId);
  
  // If no currentPostId is provided, try to determine it from the URL
  useEffect(() => {
    if (!currentPostId && pathname) {
      const pathSegments = pathname.split('/');
      const potentialPostId = pathSegments[pathSegments.length - 1];
      if (content.some(post => post.id === potentialPostId)) {
        setCurrentPost(potentialPostId);
      }
    }
  }, [pathname, currentPostId, content]);
  
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
            isCurrent={currentPost === post.id}
          />
        ))}
      </div>
      
      {/* Load more button */}
      {hasMoreContent && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={handleLoadMore}
            className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-pink text-white font-medium rounded-lg shadow-sm hover:opacity-90 transition-all duration-300 flex items-center"
            aria-label={`Load ${loadMoreIncrement} more posts`}
          >
            View More Content
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
} 
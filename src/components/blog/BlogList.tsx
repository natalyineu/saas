'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define the blog post type
interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  icon?: React.ReactNode;
}

// Props for the BlogList component
interface BlogListProps {
  blogPosts: BlogPost[];
  currentPostId?: string;
}

// The number of posts to show initially
const INITIAL_POSTS_TO_SHOW = 3;
// Number of additional posts to load with each click
const POSTS_PER_PAGE = 3;

export default function BlogList({ blogPosts, currentPostId }: BlogListProps) {
  // State to track how many posts to display
  const [postsToShow, setPostsToShow] = useState(INITIAL_POSTS_TO_SHOW);
  
  // Calculate if there are more posts to load
  const hasMorePosts = postsToShow < blogPosts.length;
  
  // Function to handle loading more posts
  const handleLoadMore = () => {
    setPostsToShow(prevCount => 
      Math.min(prevCount + POSTS_PER_PAGE, blogPosts.length)
    );
  };
  
  // Generate gradient backgrounds based on post index
  const getGradient = (index: number) => {
    const gradients = [
      "from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100",
      "from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100",
      "from-pink-50 to-red-50 group-hover:from-pink-100 group-hover:to-red-100",
      "from-green-50 to-teal-50 group-hover:from-green-100 group-hover:to-teal-100",
      "from-yellow-50 to-amber-50 group-hover:from-yellow-100 group-hover:to-amber-100",
      "from-orange-50 to-rose-50 group-hover:from-orange-100 group-hover:to-rose-100"
    ];
    
    return gradients[index % gradients.length];
  };
  
  // Generate default icon if none is provided
  const getDefaultIcon = (postId: string) => {
    if (postId.includes('advertising')) {
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
          <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
            <rect x="30" y="30" width="40" height="40" rx="5" fill="rgba(252,70,107,0.8)" />
            <rect x="35" y="35" width="30" height="5" rx="2" fill="white" />
            <rect x="35" y="45" width="30" height="5" rx="2" fill="white" />
            <rect x="35" y="55" width="20" height="5" rx="2" fill="white" />
            <circle cx="65" cy="65" r="10" fill="rgba(63,94,251,1)" />
            <path d="M61 65 L69 65" stroke="white" strokeWidth="2" />
            <path d="M65 61 L65 69" stroke="white" strokeWidth="2" />
          </g>
        </svg>
      );
    } else if (postId.includes('social-media')) {
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
          <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
            <circle cx="50" cy="35" r="15" fill="rgba(252,70,107,0.8)" />
            <circle cx="30" cy="65" r="10" fill="rgba(252,70,107,0.8)" />
            <circle cx="70" cy="65" r="10" fill="rgba(252,70,107,0.8)" />
            <path d="M50 50 L30 65" stroke="rgba(63,94,251,1)" strokeWidth="3" />
            <path d="M50 50 L70 65" stroke="rgba(63,94,251,1)" strokeWidth="3" />
          </g>
        </svg>
      );
    } else {
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
          <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
            <rect x="30" y="30" width="40" height="40" rx="3" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" />
            <path d="M40 45 H60" stroke="rgba(252,70,107,0.8)" strokeWidth="3" />
            <path d="M40 55 H60" stroke="rgba(252,70,107,0.8)" strokeWidth="3" />
            <path d="M40 65 H50" stroke="rgba(252,70,107,0.8)" strokeWidth="3" />
          </g>
        </svg>
      );
    }
  };

  return (
    <div className="space-y-10">
      {/* Blog post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(0, postsToShow).map((post, index) => (
          <Link 
            key={post.id}
            href={`/blog/${post.id}`}
            className="group"
            aria-current={currentPostId === post.id ? "page" : undefined}
          >
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              {/* Post icon/image */}
              {post.icon ? (
                post.icon
              ) : (
                <div className="h-48 relative overflow-hidden">
                  <div className={`h-full w-full flex items-center justify-center bg-gradient-to-br ${getGradient(index)} transition-all duration-500`}>
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                        {getDefaultIcon(post.id)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Post content */}
              <div className="flex-grow p-6">
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs px-3 py-1 rounded-full mb-2">
                    {post.category || "ARTICLE"}
                  </span>
                  <time dateTime={post.date} className="text-gray-500 text-sm ml-2">
                    {post.date}
                  </time>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-purple transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-500">
                    {post.author}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      
      {/* Load more button - only shown if there are more posts to load */}
      {hasMorePosts && (
        <div className="flex justify-center mt-10">
          <button 
            onClick={handleLoadMore}
            className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-pink text-white font-medium rounded-lg shadow-sm hover:opacity-90 transition-all duration-300 flex items-center"
          >
            View More Articles
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
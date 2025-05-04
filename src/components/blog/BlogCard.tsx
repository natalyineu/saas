import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blog/posts';
import { SuccessStory } from '@/data/blog/successStories';
import { ContentItem } from '@/lib/types/content';
import { CategoryBadge, DateDisplay, AuthorDisplay, ReadTimeDisplay } from './ContentMeta';

type BlogContent = BlogPost | SuccessStory;

interface BlogCardProps {
  post: BlogContent;
  icon: React.ReactNode;
  stats?: {
    value: string;
    label: string;
  };
  isCurrent?: boolean;
}

export default function BlogCard({ post, icon, stats, isCurrent = false }: BlogCardProps) {
  const postType = post.category || 'ARTICLE';
  const isSuccessStory = postType.toUpperCase().includes('CASE STUDY');
  
  // Use consistent gradient background for all cards
  const gradientBg = "from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100";
  
  return (
    <Link 
      href={`/blog/${post.id}`} 
      className="group" 
      aria-labelledby={`card-title-${post.id}`}
      aria-current={isCurrent ? "page" : undefined}
    >
      <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col" itemScope itemType="https://schema.org/BlogPosting">
        {/* Hidden metadata for SEO */}
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="datePublished" content={post.date} />
        <meta itemProp="description" content={post.excerpt} />
        
        {/* Header Image/Icon Section */}
        <div 
          className={`h-48 relative overflow-hidden rounded-t-lg bg-gradient-to-br ${gradientBg} transition-all duration-500`} 
          aria-hidden="true"
          itemProp="image"
        >
          {/* Stats Badge (if applicable) */}
          {stats && (
            <div className="absolute top-3 right-3 z-10">
              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg" 
                aria-label={`${stats.value} ${stats.label}`}>
                {stats.value}
              </div>
            </div>
          )}
          
          {/* Icon Container */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-28 h-28 transform transition-transform duration-500 group-hover:scale-110">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex-grow p-6">
          <div className="mb-3 flex items-center">
            <CategoryBadge 
              category={postType} 
              isSuccessStory={isSuccessStory} 
              className="mr-2" 
            />
            <DateDisplay date={post.date} />
          </div>
          
          <h3 
            id={`card-title-${post.id}`} 
            className="text-xl font-bold mb-3 group-hover:text-primary-purple transition-colors duration-300"
            itemProp="name"
          >
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3" itemProp="abstract">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <AuthorDisplay />
            <ReadTimeDisplay readTime={post.readTime} />
          </div>
        </div>
      </article>
    </Link>
  );
} 
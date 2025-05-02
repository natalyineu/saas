import React from 'react';
import { formatDate } from '@/lib/types/content';

interface DateDisplayProps {
  date: string;
  className?: string;
}

export function DateDisplay({ date, className = '' }: DateDisplayProps) {
  const formattedDate = formatDate(date);
  return (
    <time dateTime={formattedDate} className={`text-gray-500 text-sm ${className}`}>
      {formattedDate}
    </time>
  );
}

interface AuthorDisplayProps {
  className?: string;
}

export function AuthorDisplay({ className = '' }: AuthorDisplayProps) {
  // Consistently using the standard author name
  return (
    <span className={`text-sm text-gray-500 ${className}`}>
      Founder of ai-vertise.com
    </span>
  );
}

interface ReadTimeDisplayProps {
  readTime: string;
  className?: string;
}

export function ReadTimeDisplay({ readTime, className = '' }: ReadTimeDisplayProps) {
  return (
    <span className={`text-sm text-gray-500 ${className}`}>
      {readTime}
    </span>
  );
}

interface TagListProps {
  tags: string[];
  className?: string;
}

export function TagList({ tags, className = '' }: TagListProps) {
  if (!tags || tags.length === 0) return null;
  
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map(tag => (
        <span 
          key={tag} 
          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
          aria-label={`Tag: ${tag}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

interface CategoryBadgeProps {
  category: string;
  isSuccessStory?: boolean;
  className?: string;
}

export function CategoryBadge({ category, isSuccessStory = false, className = '' }: CategoryBadgeProps) {
  const badgeClass = isSuccessStory 
    ? 'bg-blue-100 text-blue-800' 
    : 'bg-gradient-to-r from-primary-purple to-primary-pink text-white';
  
  return (
    <span 
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${badgeClass} ${className}`}
      aria-label={`Category: ${category}`}
    >
      {category}
    </span>
  );
}

interface ContentMetaProps {
  date: string;
  readTime: string;
  category: string;
  isSuccessStory?: boolean;
  tags?: string[];
  className?: string;
}

export function ContentMeta({ 
  date, 
  readTime, 
  category, 
  isSuccessStory = false,
  tags = [],
  className = '' 
}: ContentMetaProps) {
  return (
    <div className={className}>
      <div className="mb-3 flex items-center">
        <CategoryBadge category={category} isSuccessStory={isSuccessStory} className="mr-2" />
        <DateDisplay date={date} />
      </div>
      
      {tags && tags.length > 0 && (
        <TagList tags={tags} className="mt-4" />
      )}
      
      <div className="flex items-center justify-between mt-4">
        <AuthorDisplay />
        <ReadTimeDisplay readTime={readTime} />
      </div>
    </div>
  );
} 
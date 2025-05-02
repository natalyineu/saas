import { ContentItem } from '../types/content';
import { generateMetadata, generateStructuredData } from './metadata';
import { Metadata } from 'next';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import React from 'react';

/**
 * Generate consistent metadata for blog post pages
 * @param post Blog post content data
 * @returns Next.js metadata object
 */
export function getBlogPostMetadata(post: Partial<ContentItem>): Metadata {
  return generateMetadata(post);
}

/**
 * Create a unified blog post page layout
 * @param post Blog post content
 * @param children Content to render inside the blog post
 * @returns Rendered blog post
 */
export function createBlogPostPage(
  post: Partial<ContentItem> & { tags?: string[] }, 
  children: React.ReactNode
) {
  // Generate structured data
  const structuredData = generateStructuredData(post);
  
  return (
    <BlogPostLayout
      title={post.title || ''}
      date={post.date || ''}
      author="Founder of ai-vertise.com"
      readTime={post.readTime || ''}
      tags={post.tags || []}
      structuredData={structuredData}
    >
      {children}
    </BlogPostLayout>
  );
} 
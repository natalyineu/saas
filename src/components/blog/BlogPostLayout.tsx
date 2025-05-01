'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import SuppressHydrationWarning from '@/components/ui/SuppressHydrationWarning';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  author: string;
  readTime: string;
  tags?: string[];
  structuredData?: any;
  children: ReactNode;
}

export default function BlogPostLayout({
  title,
  date,
  author,
  readTime,
  tags = [],
  structuredData,
  children
}: BlogPostLayoutProps) {
  return (
    <SuppressHydrationWarning>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto prose lg:prose-lg">
          <Link href="/blog" className="text-primary-purple hover:underline flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{date}</span>
              <span className="mx-2">•</span>
              <span>{author}</span>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          
          {children}
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link href="/blog" className="text-primary-purple hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>
      </main>
    </SuppressHydrationWarning>
  );
} 
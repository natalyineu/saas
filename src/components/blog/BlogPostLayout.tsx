'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { DateDisplay, AuthorDisplay, ReadTimeDisplay, TagList } from './ContentMeta';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  author: string; // Kept for backward compatibility
  readTime: string;
  tags?: string[];
  structuredData?: any;
  children: ReactNode;
}

export default function BlogPostLayout({
  title,
  date,
  author, // Ignored as we use consistent display
  readTime,
  tags = [],
  structuredData,
  children
}: BlogPostLayoutProps) {
  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto prose lg:prose-lg">
          <Link href="/blog" className="text-primary-purple hover:underline flex items-center mb-8" aria-label="Back to blog listing">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="flex items-center text-gray-500 text-sm">
              <DateDisplay date={date} />
              <span className="mx-2">•</span>
              <AuthorDisplay />
              <span className="mx-2">•</span>
              <ReadTimeDisplay readTime={readTime} />
            </div>
            <TagList tags={tags} className="mt-4" />
          </header>
          
          {children}
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link href="/blog" className="text-primary-purple hover:underline flex items-center" aria-label="Back to blog listing">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
} 
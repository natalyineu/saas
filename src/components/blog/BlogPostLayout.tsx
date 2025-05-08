'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { DateDisplay, AuthorDisplay, ReadTimeDisplay, TagList } from './ContentMeta';
import Script from 'next/script';
import dynamic from 'next/dynamic';

// Dynamically import the blog post script to optimize loading
const BlogPostScript = dynamic(() => import('@/components/blog/BlogPostScript'), {
  ssr: false,
});

interface BlogPostLayoutProps {
  title: string;
  date: string;
  author?: string; // Optional now since we use a consistent display
  readTime: string;
  tags?: string[];
  heroImage?: string;
  structuredData?: any;
  prevPost?: { id: string; title: string } | null;
  nextPost?: { id: string; title: string } | null;
  children: ReactNode;
}

export default function BlogPostLayout({
  title,
  date,
  author,
  readTime,
  tags = [],
  heroImage,
  structuredData,
  prevPost,
  nextPost,
  children
}: BlogPostLayoutProps) {
  const [readingProgress, setReadingProgress] = useState(0);

  // Reading progress tracking
  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  return (
    <>
      {/* Include image optimization script */}
      <BlogPostScript />
      
      {structuredData && (
        <Script
          id="article-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Add breadcrumb structured data separately if available */}
      {structuredData?.breadcrumbData && (
        <Script
          id="breadcrumb-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumbData) }}
        />
      )}
      
      {/* Reading progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-purple to-primary-pink" 
          style={{ width: `${readingProgress}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={readingProgress}
          aria-label="Reading progress"
        />
      </div>
      
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto prose lg:prose-lg" itemScope itemType="https://schema.org/Article">
          {/* Hidden metadata for search engines */}
          <meta itemProp="headline" content={title} />
          <meta itemProp="description" content={tags.join(', ')} />
          <meta itemProp="author" content={author || "AI-Vertise Team"} />
          <meta itemProp="datePublished" content={new Date(date).toISOString()} />
          <meta itemProp="dateModified" content={new Date(date).toISOString()} />
          
          <Link href="/blog" className="text-primary-purple hover:underline flex items-center mb-8" aria-label="Back to blog listing">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4" itemProp="name">{title}</h1>
            <div className="flex items-center text-gray-500 text-sm">
              <DateDisplay date={date} />
              <span className="mx-2">•</span>
              <AuthorDisplay authorName={author} />
              <span className="mx-2">•</span>
              <ReadTimeDisplay readTime={readTime} />
            </div>
            <TagList tags={tags} className="mt-4" />
          </header>
          
          {/* Hero Image */}
          {heroImage && (
            <div className="mb-8 rounded-xl overflow-hidden shadow-md">
              <div className="relative aspect-[16/9] w-full">
                <Image 
                  src={heroImage} 
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                  itemProp="image"
                />
              </div>
            </div>
          )}
          
          <div itemProp="articleBody">
            {children}
          </div>
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            {/* Navigation between posts */}
            <nav className="flex flex-col sm:flex-row justify-between mb-8" aria-label="Post navigation">
              {prevPost && (
                <Link href={`/blog/${prevPost.id}`} className="text-primary-purple hover:underline mb-4 sm:mb-0 flex items-center" rel="prev">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous: {prevPost.title.length > 40 ? prevPost.title.substring(0, 40) + '...' : prevPost.title}
                </Link>
              )}
              
              {nextPost && (
                <Link href={`/blog/${nextPost.id}`} className="text-primary-purple hover:underline ml-auto flex items-center" rel="next">
                  Next: {nextPost.title.length > 40 ? nextPost.title.substring(0, 40) + '...' : nextPost.title}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </nav>
            
            <Link href="/blog" className="text-primary-purple hover:underline flex items-center" aria-label="Back to blog listing">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>
        
        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-2 rounded-full bg-primary-purple text-white shadow-lg hover:bg-primary-pink transition-colors"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </main>
    </>
  );
} 
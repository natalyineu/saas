import React from 'react';
import Link from 'next/link';

interface BlogHeaderProps {
  title: string;
  date: string;
  author: string;
  readTime: string;
  tags?: string[];
  icon: React.ReactNode;
  stats?: {
    value: string;
    label: string;
  };
  category?: string;
}

export default function BlogHeader({
  title,
  date,
  author,
  readTime,
  tags,
  icon,
  stats,
  category
}: BlogHeaderProps) {
  // Determine the gradient background based on content type
  const isSuccessStory = (category || '').toLowerCase().includes('case study');
  const gradientBg = isSuccessStory 
    ? "from-pink-50 to-red-50"
    : "from-blue-50 to-indigo-50";

  return (
    <>
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
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className={`bg-gradient-to-br ${gradientBg} rounded-lg mb-12 overflow-hidden`}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 p-8 flex justify-center">
            <div className="relative w-40 h-40">
              {icon}
              {stats && (
                <div className="absolute top-0 right-0 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  {stats.value}
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:w-2/3 p-8 bg-white/50">
            <h2 className="text-2xl font-bold mb-2">{category || 'Article'}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-purple to-primary-pink mb-4"></div>
            {stats && (
              <>
                <h3 className="text-xl mb-2">Results at a Glance</h3>
                <p className="text-2xl font-bold text-primary-purple mb-2">{stats.value} {stats.label}</p>
              </>
            )}
            <p className="text-gray-600">
              {isSuccessStory 
                ? `Case study showing how we helped improve ${stats?.label || 'results'}`
                : `Insightful article about ${title.toLowerCase()}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 
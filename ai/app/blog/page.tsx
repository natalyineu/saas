import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Script from 'next/script';
import SuppressHydrationWarning from '../components/ui/SuppressHydrationWarning';
import BlogList from '../components/blog/BlogList';
import { blogPosts } from '../data/blog/posts';
import { successStories } from '../data/blog/successStories';

export const metadata: Metadata = {
  title: 'AI-Vertise Blog - Digital Marketing Insights & Case Studies',
  description: 'Explore our collection of digital marketing case studies, success stories, and insights. Learn how AI-Vertise helps businesses achieve their marketing goals.',
  keywords: 'digital marketing, case studies, success stories, marketing insights, AI marketing, social media marketing',
  alternates: {
    canonical: 'https://ai-vertise.com/blog',
  },
  openGraph: {
    title: 'AI-Vertise Blog - Digital Marketing Insights & Case Studies',
    description: 'Explore our collection of digital marketing case studies, success stories, and insights. Learn how AI-Vertise helps businesses achieve their marketing goals.',
    type: 'website',
    url: 'https://aivertise.io/blog',
    images: [
      {
        url: '/images/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Vertise Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Vertise Blog - Digital Marketing Insights & Case Studies',
    description: 'Explore our collection of digital marketing case studies, success stories, and insights.',
    images: ['/images/blog-og.jpg'],
  },
};

export default function Blog() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AI-Vertise Blog",
    "description": "Digital Marketing Insights & Case Studies",
    "url": "https://aivertise.io/blog",
    "publisher": {
      "@type": "Organization",
      "name": "AI-Vertise",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aivertise.io/images/logo.png"
      }
    }
  };

  return (
    <SuppressHydrationWarning>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      
      <main className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">AI-Vertise Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our collection of digital marketing insights, case studies, and success stories. Learn from our experts about the latest trends and strategies.</p>
          </div>
          
          {/* Case Studies Section */}
          <section className="mb-16">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold">Success Stories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story) => (
                <Link href={`/blog/${story.id}`} key={story.id} className="group">
                  <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Icon/Image */}
                    {story.icon}
                    
                    {/* Content */}
                    <div className="flex-grow p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs px-3 py-1 rounded-full mb-2">
                          {story.category}
                        </span>
                        <time dateTime={story.date} className="text-gray-500 text-sm">
                          {story.date}
                        </time>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary-purple transition-colors duration-300">
                        {story.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {story.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm text-gray-500">
                          {story.author}
                        </span>
                        <span className="text-sm text-gray-500">
                          {story.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
          
          {/* Blog Posts Section */}
          <section>
            <div className="mb-8">
              <hr className="border-gray-200 my-10" />
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Latest Articles</h2>
            </div>
            
            {/* Blog List component with Load More functionality */}
            <BlogList blogPosts={blogPosts} />
          </section>
        </div>
      </main>
      
      <Footer />
    </SuppressHydrationWarning>
  );
} 
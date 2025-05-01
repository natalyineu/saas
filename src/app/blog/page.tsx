import Link from 'next/link';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Script from 'next/script';
import SuppressHydrationWarning from '@/components/ui/SuppressHydrationWarning';
import BlogList from '@/components/blog/BlogList';

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

  // Success story case studies matching our carousel
  const successStories = [
    {
      id: 'urban-beans-case-study',
      title: 'Coffee Shop Campaign: How a Local Café Increased Foot Traffic by 143%',
      date: 'April 15, 2023',
      excerpt: 'A specialty coffee shop used AI-Vertise Boost to target local coffee enthusiasts and saw a dramatic increase in new customers within the first month.',
      author: 'Marketing Team',
      readTime: '5 min read',
      category: 'CASE STUDY',
      icon: (
        <div className="h-48 relative overflow-hidden rounded-t-lg">
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-500">
            <div className="relative w-32 h-32 transform transition-transform duration-500 group-hover:scale-110">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
                  <rect x="35" y="25" width="30" height="10" rx="5" fill="rgba(252,70,107,1)" />
                  <path d="M30 60 L70 60" stroke="rgba(63,94,251,1)" strokeWidth="3" />
                  <path d="M40 50 C40 40, 60 40, 60 50" stroke="rgba(63,94,251,1)" strokeWidth="3" fill="none" />
                  <path d="M30 70 L40 60 L60 60 L70 70" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
                </g>
              </svg>
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full transform shadow-lg">
                +143%
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'taste-of-italy-case-study',
      title: 'Local Restaurant Promotion: Italian Restaurant Boosts Weekend Reservations by 87%',
      date: 'April 2, 2023',
      excerpt: 'A family-owned Italian restaurant leveraged our platform to promote their weekend specials, resulting in fully booked weekends.',
      author: 'Marketing Team',
      readTime: '6 min read',
      category: 'CASE STUDY',
      icon: (
        <div className="h-48 relative overflow-hidden rounded-t-lg">
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-500">
            <div className="relative w-32 h-32 transform transition-transform duration-500 group-hover:scale-110">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background circle */}
                <circle cx="50" cy="50" r="40" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
                
                {/* Restaurant plate */}
                <circle cx="50" cy="50" r="30" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" className="transform transition-transform duration-500 group-hover:scale-105" />
                
                {/* Fork and knife */}
                <path d="M35 30 L35 70" stroke="rgba(252,70,107,1)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M40 30 C40 40, 38 50, 40 70" stroke="rgba(252,70,107,1)" strokeWidth="2.5" strokeLinecap="round" />
                
                <path d="M65 30 L65 40 C65 45, 60 50, 65 55 L65 70" stroke="rgba(63,94,251,1)" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Food on plate */}
                <circle cx="50" cy="50" r="12" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow" />
                <path d="M44 48 C47 44, 53 44, 56 48" stroke="rgba(63,94,251,1)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M44 52 C47 56, 53 56, 56 52" stroke="rgba(63,94,251,1)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full transform shadow-lg">
                +87%
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'chic-trends-case-study',
      title: 'Online Boutique Launch: Fashion Retailer Achieves 215% Return on Ad Spend',
      date: 'March 28, 2023',
      excerpt: 'An online fashion boutique used our AI targeting to find fashion-forward customers, achieving impressive sales from day one.',
      author: 'Marketing Team',
      readTime: '7 min read',
      category: 'CASE STUDY',
      icon: (
        <div className="h-48 relative overflow-hidden rounded-t-lg">
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-red-50 group-hover:from-pink-100 group-hover:to-red-100 transition-all duration-500">
            <div className="relative w-32 h-32 transform transition-transform duration-500 group-hover:scale-110">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="transform transition-transform duration-500 group-hover:scale-105" x="25" y="30" width="50" height="40" rx="4" fill="rgba(252,70,107,0.8)" />
                <rect className="transform origin-top transition-transform duration-500 group-hover:scale-y-105" x="30" y="35" width="40" height="30" rx="2" fill="white" />
                <rect className="transition-colors duration-500 group-hover:fill-purple-600" x="30" y="35" width="40" height="7" rx="1" fill="rgba(63,94,251,1)" />
                <rect className="animate-pulse-slow" x="33" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
                <rect className="animate-pulse-slow" x="45" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
                <rect className="animate-pulse-slow" x="57" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
                <text className="animate-pulse-slow" x="80" y="40" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
                <text className="animate-pulse-slow" x="20" y="40" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
                <text className="animate-pulse-slow" x="80" y="60" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
                <text className="animate-pulse-slow" x="20" y="60" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
              </svg>
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full transform shadow-lg">
                +215%
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Regular blog posts
  const blogPosts = [
    {
      id: 'effective-facebook-ads',
      title: '5 Keys to More Effective Facebook Advertising in 2023',
      date: 'April 10, 2023',
      excerpt: 'Learn the latest strategies for maximizing your ROI on Facebook ads with our expert tips and insights.',
      author: 'Marketing Team',
      readTime: '7 min read'
    },
    {
      id: 'ai-in-digital-advertising',
      title: 'How AI is Transforming Digital Advertising for Small Businesses',
      date: 'March 25, 2023',
      excerpt: 'Discover how artificial intelligence is leveling the playing field and helping small businesses compete with larger competitors in digital advertising.',
      author: 'Tech Team',
      readTime: '8 min read'
    },
    {
      id: 'programmatic-advertising-ai',
      title: 'The Future of Programmatic Advertising: AI-Driven Strategies',
      date: 'May 22, 2024',
      excerpt: 'Discover how AI is transforming programmatic advertising with smarter bidding strategies, enhanced targeting, and unprecedented efficiency.',
      author: 'Strategy Team',
      readTime: '8 min read'
    },
    {
      id: 'privacy-first-advertising',
      title: 'Privacy-First Advertising: Succeeding in the Post-Cookie Era',
      date: 'May 15, 2024',
      excerpt: 'Learn how to adapt your advertising strategy for a privacy-focused future while maintaining performance and compliance.',
      author: 'Compliance Team',
      readTime: '6 min read'
    },
    {
      id: 'social-media-ai-ads',
      title: 'AI-Powered Social Media Advertising: The Ultimate Guide',
      date: 'May 8, 2024',
      excerpt: 'Explore how AI is revolutionizing social media advertising and learn how to leverage these tools for better campaign performance.',
      author: 'Social Media Team',
      readTime: '9 min read'
    },
    {
      id: 'social-media-ai-content',
      title: 'AI-Generated Social Media Content: Best Practices for 2024',
      date: 'May 5, 2024',
      excerpt: 'Learn how to effectively use AI content generation tools to create engaging social media content while maintaining authenticity.',
      author: 'Content Team',
      readTime: '7 min read'
    },
    {
      id: 'ecommerce-personalization',
      title: 'AI-Powered E-commerce Personalization: Strategies That Drive Sales',
      date: 'April 28, 2024',
      excerpt: 'Discover how leading e-commerce brands are using AI to deliver personalized experiences that increase conversion rates and customer loyalty.',
      author: 'E-commerce Team',
      readTime: '8 min read'
    },
    {
      id: 'metaverse-marketing-opportunities',
      title: 'Marketing in the Metaverse: Opportunities for Forward-Thinking Brands',
      date: 'April 20, 2024',
      excerpt: 'Explore the emerging opportunities for marketing in the metaverse and how innovative brands are already staking their claim.',
      author: 'Innovation Team',
      readTime: '10 min read'
    },
    {
      id: 'telegram-ai-channel-selection',
      title: 'How to Select the Right AI Telegram Channels for Your Business',
      date: 'April 15, 2024',
      excerpt: 'A comprehensive guide to finding and leveraging the most relevant AI Telegram channels for your business needs.',
      author: 'Channel Strategy Team',
      readTime: '6 min read'
    },
    {
      id: 'ai-telegram-channel-strategy',
      title: 'Building an Effective AI Strategy for Telegram Channels',
      date: 'April 10, 2024',
      excerpt: 'Learn how to develop a comprehensive AI strategy for your Telegram channels to maximize engagement and growth.',
      author: 'Strategy Team',
      readTime: '7 min read'
    },
    {
      id: 'uk-advertising-landscape-2024',
      title: 'The UK Advertising Landscape in 2024: Trends and Predictions',
      date: 'April 5, 2024',
      excerpt: 'An analysis of the current UK advertising market and predictions for how it will evolve throughout 2024.',
      author: 'Market Research Team',
      readTime: '9 min read'
    }
  ];

  return (
    <SuppressHydrationWarning>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
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
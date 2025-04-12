import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Script from 'next/script';
import SuppressHydrationWarning from '../components/ui/SuppressHydrationWarning';

export const metadata: Metadata = {
  title: 'AI-Vertise Blog - Digital Marketing Insights & Case Studies',
  description: 'Explore our collection of digital marketing case studies, success stories, and insights. Learn how AI-Vertise helps businesses achieve their marketing goals.',
  keywords: 'digital marketing, case studies, success stories, marketing insights, AI marketing, social media marketing',
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
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">AI-Vertise Blog</h1>
        <p className="text-xl text-gray-600 mb-12">Insights, case studies, and success stories from our AI-powered advertising platform.</p>
        
        <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story) => (
            <Link 
              key={story.id}
              href={`/blog/${story.id}`}
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {story.icon}
              <div className="p-6">
                <div className="text-sm text-primary-purple font-semibold mb-2">{story.category}</div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary-purple transition-colors">{story.title}</h2>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{story.date}</span>
                  <span className="mx-2">•</span>
                  <span>{story.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            // Generate different gradient backgrounds based on the post category or index
            const gradients = [
              "from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100",
              "from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100",
              "from-pink-50 to-red-50 group-hover:from-pink-100 group-hover:to-red-100",
              "from-green-50 to-teal-50 group-hover:from-green-100 group-hover:to-teal-100",
              "from-yellow-50 to-amber-50 group-hover:from-yellow-100 group-hover:to-amber-100",
              "from-orange-50 to-rose-50 group-hover:from-orange-100 group-hover:to-rose-100"
            ];
            
            const gradient = gradients[index % gradients.length];
            
            // Create consistent icons in the same style as case studies
            let icon;
            if (post.id.includes('advertising')) {
              icon = (
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
            } else if (post.id.includes('social-media')) {
              icon = (
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
            } else if (post.id.includes('telegram')) {
              icon = (
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                  <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
                    <path d="M30 45 L50 65 L70 30 L35 50 Z" fill="rgba(252,70,107,0.8)" />
                    <path d="M35 50 L45 60 L50 55" fill="white" />
                  </g>
                </svg>
              );
            } else if (post.id.includes('facebook')) {
              icon = (
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                  <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
                    <rect x="25" y="25" width="50" height="50" rx="10" fill="rgba(63,94,251,1)" />
                    <path d="M52 75 V55 H62 L64 45 H52 V38 C52 35 54 33 58 33 H64 V25 C62 24 58 24 55 24 C48 24 42 29 42 37 V45 H32 V55 H42 V75 Z" fill="white" />
                  </g>
                </svg>
              );
            } else if (post.id.includes('ecommerce') || post.id.includes('commerce')) {
              icon = (
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                  <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
                    <path d="M30 35 H70 L65 55 H35 Z" fill="rgba(252,70,107,0.8)" />
                    <circle cx="40" cy="65" r="5" fill="rgba(63,94,251,1)" />
                    <circle cx="60" cy="65" r="5" fill="rgba(63,94,251,1)" />
                    <path d="M35 45 H65" stroke="white" strokeWidth="2" />
                    <path d="M40 70 L60 70" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                  </g>
                </svg>
              );
            } else if (post.id.includes('metaverse')) {
              icon = (
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                  <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
                    <path d="M25 40 L75 40 L75 70 L25 70 Z" fill="rgba(252,70,107,0.8)" strokeWidth="2" />
                    <path d="M40 45 L50 35 L60 45" stroke="white" strokeWidth="2" />
                    <path d="M35 70 L35 50 L65 50 L65 70" stroke="white" strokeWidth="2" fill="none" />
                    <circle cx="40" cy="60" r="3" fill="white" />
                    <circle cx="60" cy="60" r="3" fill="white" />
                    <path d="M40 60 L60 60" stroke="white" strokeWidth="1.5" />
                  </g>
                </svg>
              );
            } else if (post.id.includes('uk-advertising')) {
              icon = (
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                  <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
                    <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="rgba(252,70,107,0.1)" stroke="rgba(252,70,107,0.8)" strokeWidth="2" />
                    <path d="M30 30 L70 70" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                    <path d="M30 70 L70 30" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                    <circle cx="50" cy="50" r="10" fill="rgba(252,70,107,0.8)" />
                  </g>
                </svg>
              );
            } else {
              icon = (
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
            
            return (
              <Link 
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 relative overflow-hidden rounded-t-lg">
                  <div className={`h-full w-full flex items-center justify-center bg-gradient-to-br ${gradient} transition-all duration-500`}>
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                        {icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-purple font-semibold mb-2">ARTICLE</div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary-purple transition-colors">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </SuppressHydrationWarning>
  );
} 
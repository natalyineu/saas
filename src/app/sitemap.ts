import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog/posts';

type SitemapFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

interface EnhancedSitemapItem {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: SitemapFrequency;
  priority?: number;
  images?: Array<{
    url: string;
    title?: string;
    caption?: string;
    geo_location?: string;
    license_url?: string;
  }>;
}

// Returns image data for a given blog post
const getBlogPostImageData = (slug: string) => {
  const baseUrl = 'https://ai-vertise.com';
  const imagePath = `/images/blog/${slug}.jpg`;
  
  // Default image if specific one doesn't exist
  return {
    url: `${baseUrl}${imagePath}`,
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    caption: `AI-Vertise ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`,
    license: 'https://creativecommons.org/licenses/by/4.0/'
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-vertise.com';
  const currentDate = new Date();
  
  // Static pages with specific priorities and frequencies
  const staticPages: EnhancedSitemapItem[] = [
    {
      url: baseUrl,
      priority: 1.0,
      changeFrequency: 'daily',
      lastModified: currentDate,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          title: 'AI-Vertise Boost Platform',
          caption: 'AI-powered advertising solution for small businesses',
        }
      ]
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: currentDate,
      images: []
    },
    {
      url: `${baseUrl}/pricing`,
      priority: 0.9,
      changeFrequency: 'weekly',
      lastModified: currentDate,
      images: []
    },
    {
      url: `${baseUrl}/blog`,
      priority: 0.9,
      changeFrequency: 'daily',
      lastModified: currentDate,
      images: []
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: currentDate,
      images: []
    },
    {
      url: `${baseUrl}/faq`,
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: currentDate,
      images: []
    },
    {
      url: `${baseUrl}/policy`,
      priority: 0.4,
      changeFrequency: 'yearly',
      lastModified: currentDate,
      images: []
    },
    {
      url: `${baseUrl}/privacy`,
      priority: 0.4,
      changeFrequency: 'yearly',
      lastModified: currentDate,
      images: []
    },
    {
      url: `${baseUrl}/terms`,
      priority: 0.4,
      changeFrequency: 'yearly',
      lastModified: currentDate,
      images: []
    },
    {
      url: `${baseUrl}/cookie-policy`,
      priority: 0.4,
      changeFrequency: 'yearly',
      lastModified: currentDate,
      images: []
    }
  ];
  
  // Blog post pages - dynamic based on blog data
  // Read from your blog data source (assuming you have one)
  const blogPostPages: EnhancedSitemapItem[] = blogPosts.map(post => {
    // Calculate date objects from post data
    const publishDate = post.date ? new Date(post.date) : new Date();
    
    // Set a priority based on recency (higher for newer posts)
    const daysSincePublish = Math.floor(
      (currentDate.getTime() - publishDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    
    let priority = 0.7; // default priority
    let changeFrequency: SitemapFrequency = 'monthly';
    
    // Adjust priority and change frequency based on post age
    if (daysSincePublish < 7) {
      priority = 0.8;
      changeFrequency = 'daily';
    } else if (daysSincePublish < 30) {
      priority = 0.7;
      changeFrequency = 'weekly';
    } else if (daysSincePublish < 90) {
      priority = 0.6;
      changeFrequency = 'monthly';
    } else {
      priority = 0.5;
      changeFrequency = 'yearly';
    }
    
    return {
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: publishDate,
      changeFrequency,
      priority,
      images: post.heroImage ? [
        {
          url: post.heroImage.startsWith('http') 
            ? post.heroImage 
            : `${baseUrl}${post.heroImage}`,
          title: post.title,
          caption: post.excerpt || post.title,
        }
      ] : []
    };
  });
  
  // Combine all pages
  const allPages = [...staticPages, ...blogPostPages];
  
  // Format for Next.js sitemap
  return allPages.map(page => ({
    url: page.url,
    lastModified: page.lastModified,
    // Next.js sitemap doesn't directly support these properties, 
    // but we include them as it's useful for other formats
    // and may be supported in future Next.js versions
  }));
} 
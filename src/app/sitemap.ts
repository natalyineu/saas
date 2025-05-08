import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog/posts';
import { successStories } from '@/data/blog/index';
import { ContentItem } from '@/lib/types/content';

type SitemapFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

interface EnhancedSitemapItem {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: SitemapFrequency;
  priority?: number;
}

// Define a combined type for blog posts that might have tags
type PostWithPossibleTags = ContentItem & {
  id: string;
  date: string;
  tags?: string[];
};

// Function to escape special XML characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-vertise.com';
  const currentDate = new Date().toISOString();
  
  // Generate date for content types with different freshness levels
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  
  // Static pages with specific priorities and frequencies
  const staticPages: EnhancedSitemapItem[] = [
    {
      url: baseUrl,
      priority: 1.0,
      changeFrequency: 'daily',
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: oneMonthAgo.toISOString(),
    },
    {
      url: `${baseUrl}/pricing`,
      priority: 0.9,
      changeFrequency: 'weekly',
      lastModified: oneWeekAgo.toISOString(),
    },
    {
      url: `${baseUrl}/blog`,
      priority: 0.9,
      changeFrequency: 'daily',
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: oneMonthAgo.toISOString(),
    },
    {
      url: `${baseUrl}/faq`,
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: oneMonthAgo.toISOString(),
    },
    {
      url: `${baseUrl}/policy`,
      priority: 0.4,
      changeFrequency: 'yearly',
      lastModified: oneMonthAgo.toISOString(),
    },
    {
      url: `${baseUrl}/privacy`,
      priority: 0.4,
      changeFrequency: 'yearly',
      lastModified: oneMonthAgo.toISOString(),
    },
    {
      url: `${baseUrl}/terms`,
      priority: 0.4,
      changeFrequency: 'yearly',
      lastModified: oneMonthAgo.toISOString(),
    },
    {
      url: `${baseUrl}/cookie-policy`,
      priority: 0.4,
      changeFrequency: 'yearly',
      lastModified: oneMonthAgo.toISOString(),
    }
  ];
  
  // Group blog posts by category for better organization
  const categories = new Set<string>();
  // Include both regular blog posts and success stories for categories
  [...blogPosts, ...successStories].forEach(post => {
    if (post.category) {
      const safeCategory = post.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
      categories.add(safeCategory);
    }
  });
  
  // Add category pages to sitemap
  const categoryPages: EnhancedSitemapItem[] = Array.from(categories).map(category => ({
    url: `${baseUrl}/blog/category/${escapeXml(category)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
  
  // Process function for both blog posts and success stories
  const processPost = (post: PostWithPossibleTags): EnhancedSitemapItem => {
    // Calculate date objects from post data
    const publishDate = post.date ? new Date(post.date) : new Date();
    
    // Set a priority based on recency (higher for newer posts)
    const daysSincePublish = Math.floor(
      (new Date().getTime() - publishDate.getTime()) / (1000 * 60 * 60 * 24)
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
      url: `${baseUrl}/blog/${escapeXml(post.id)}`,
      lastModified: publishDate.toISOString(),
      changeFrequency,
      priority
    };
  };
  
  // Blog post pages - dynamic based on blog data
  const blogPostPages: EnhancedSitemapItem[] = [
    ...blogPosts.map(processPost),
    ...successStories.map(post => processPost(post as unknown as PostWithPossibleTags))
  ];
  
  // Add tag pages to sitemap
  const tags = new Set<string>();
  
  // Add tags from blog posts
  blogPosts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => {
        const safeTag = tag.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
        tags.add(safeTag);
      });
    }
  });
  
  const tagPages: EnhancedSitemapItem[] = Array.from(tags).map(tag => ({
    url: `${baseUrl}/blog/tag/${escapeXml(tag)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));
  
  // Combine all pages
  const allPages = [...staticPages, ...categoryPages, ...tagPages, ...blogPostPages];
  
  // Format for Next.js sitemap
  return allPages.map(page => ({
    url: page.url,
    lastModified: page.lastModified,
    // Next.js sitemap doesn't support these properties directly,
    // but we need them for XML generation
  }));
} 
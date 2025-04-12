import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-vertise.com';
  
  // Core static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Dynamically generate blog post entries
  const blogDir = path.join(process.cwd(), 'app/blog');
  let blogPages: MetadataRoute.Sitemap = [];
  
  try {
    const blogSlugs = fs.readdirSync(blogDir)
      .filter(file => 
        fs.statSync(path.join(blogDir, file)).isDirectory() && 
        file !== 'components' && 
        !file.startsWith('_')
      );
    
    blogPages = blogSlugs.map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(), // Or get actual file modification date if needed
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error generating blog sitemap entries:', error);
  }

  // Manually ensure all required blog posts are included in the sitemap
  const requiredBlogPosts = [
    'ai-telegram-channel-strategy',
    'privacy-first-advertising',
    'social-media-ai-ads',
    'programmatic-advertising-ai',
    'social-media-ai-content',
    'ecommerce-personalization',
    'metaverse-marketing-opportunities',
    'telegram-ai-channel-selection',
    'ai-in-digital-advertising',
    'uk-advertising-landscape-2024',
    'urban-beans-case-study'
  ];
  
  // Check if any required blog posts are missing from the dynamic list
  const existingBlogSlugs = blogPages.map(page => {
    const urlParts = page.url.split('/');
    return urlParts[urlParts.length - 1];
  });
  
  // Add any missing required blog posts
  const missingBlogPosts = requiredBlogPosts.filter(slug => !existingBlogSlugs.includes(slug));
  
  const additionalBlogPages = missingBlogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...additionalBlogPages];
} 
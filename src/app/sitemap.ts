import { MetadataRoute } from 'next';

// Returns a list of all blog post URLs
const getBlogPosts = () => {
  // All blog posts and success stories from our data files
  return [
    // Regular blog posts
    'marketing-dashboard-benefits',
    'marketing-in-singapore',
    'ai-marketing-agents',
    'digital-marketing-china',
    'media-planning-metrics',
    'effective-facebook-ads',
    'ai-in-digital-advertising',
    'programmatic-advertising-ai',
    'privacy-first-advertising',
    'social-media-ai-ads',
    'metaverse-marketing-opportunities',
    'ecommerce-personalization',
    'social-media-ai-content',
    'uk-advertising-landscape-2025',
    'ai-telegram-channel-strategy',
    'telegram-ai-channel-selection',
    
    // Success stories / case studies
    'urban-beans-case-study',
    'taste-of-italy-case-study',
    'chic-trends-case-study'
  ];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-vertise.com';
  const lastModified = new Date();
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/pricing',
    '/blog',
    '/contact',
    '/faq',
    '/policy',
    '/privacy',
    '/terms',
    '/cookie-policy'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModified,
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // Blog pages
  const blogPages = getBlogPosts().map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  return [...staticPages, ...blogPages];
} 
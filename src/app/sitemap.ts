import { MetadataRoute } from 'next';

// Returns a list of all blog post URLs
const getBlogPosts = () => {
  // In a real implementation, you'd fetch this from your CMS or database
  return [
    'uk-advertising-landscape-2025',
    'ai-in-digital-advertising',
    'privacy-first-advertising',
    'programmatic-advertising-ai',
    'social-media-ai-ads',
    'social-media-ai-content',
    'metaverse-marketing-opportunities',
    'telegram-ai-channel-selection',
    'ecommerce-personalization',
    'ai-telegram-channel-strategy',
    'urban-beans-case-study',
    'taste-of-italy-case-study',
    'chic-trends-case-study',
    'effective-facebook-ads'
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
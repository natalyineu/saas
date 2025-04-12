import { MetadataRoute } from 'next';

// Returns a list of all blog post URLs
const getBlogPosts = () => {
  // In a real implementation, you'd fetch this from your CMS or database
  return [
    'uk-advertising-landscape-2024',
    'ai-in-digital-advertising',
    'privacy-first-advertising',
    'programmatic-advertising-ai'
  ];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-vertise.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/pricing',
    '/blog',
    '/contact'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // Blog pages
  const blogPages = getBlogPosts().map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  return [...staticPages, ...blogPages];
} 
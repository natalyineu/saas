import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/temp/'],
    },
    sitemap: 'https://ai-vertise.com/sitemap.xml',
  };
} 
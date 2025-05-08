import { MetadataRoute } from 'next';

/**
 * Generate a comprehensive robots.txt file with specific directives for different user agents
 * Updated for better SEO - July 2024
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://ai-vertise.com';
  
  return {
    rules: [
      // General rules for all bots
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog/',
          '/about/',
          '/pricing/',
          '/contact/',
          '/faq/',
          '/blog/category/',
          '/blog/tag/'
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/temp/',
          '/*.json$',
          '/*.xml$',
          '/404',
          '/500',
          '/_next/',
          '/*?',
          '/*.js$',
          '/*.css$',
          '/*state=*',
          '/*token=*',
          '/events',
          '/dashboard'
        ],
        crawlDelay: 2
      },
      // Google-specific rules - Google doesn't follow crawl-delay
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/blog/',
          '/about/',
          '/pricing/',
          '/contact/',
          '/faq/',
          '/blog/category/',
          '/blog/tag/',
          '/images/'
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/temp/',
          '/*?',
          '/*state=*',
          '/*token=*'
        ]
      },
      // Rules for Google Mobile bot
      {
        userAgent: 'Googlebot-Mobile',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/temp/'
        ]
      },
      // Rules for Google Image bot
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/*.jpg$',
          '/*.jpeg$',
          '/*.png$',
          '/*.webp$',
          '/*.svg$',
          '/images/'
        ],
        disallow: [
          '/icons/',
          '/*-icon-*'
        ]
      },
      // Bing-specific rules to improve indexing
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/blog/',
          '/about/',
          '/pricing/',
          '/contact/',
          '/faq/',
          '/blog/category/',
          '/blog/tag/'
        ],
        crawlDelay: 1
      },
      // Yandex-specific rules
      {
        userAgent: 'Yandex',
        allow: '/',
        crawlDelay: 1
      },
      // Baidu-specific rules
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 2
      },
      // DuckDuckGo bot rules
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        crawlDelay: 1
      },
      // Yahoo-specific rules
      {
        userAgent: 'Slurp',
        allow: '/',
        crawlDelay: 1
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
} 
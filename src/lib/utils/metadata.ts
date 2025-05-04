import { Metadata } from 'next';
import { ContentItem } from '../types/content';

interface MetadataOptions {
  siteTitle?: string;
  siteUrl?: string;
  defaultImage?: string;
  defaultAuthor?: string;
  locale?: string;
}

const defaultOptions: MetadataOptions = {
  siteTitle: 'AI-Vertise Boost',
  siteUrl: 'https://ai-vertise.com',
  defaultImage: '/images/blog/placeholder.svg',
  defaultAuthor: 'Founder of ai-vertise.com',
  locale: 'en-US'
};

/**
 * Generate consistent SEO metadata for blog posts and other content
 */
export function generateMetadata(
  content: Partial<ContentItem>,
  options: MetadataOptions = {}
): Metadata {
  const {
    siteTitle = defaultOptions.siteTitle,
    siteUrl = defaultOptions.siteUrl,
    defaultImage = defaultOptions.defaultImage,
    defaultAuthor = defaultOptions.defaultAuthor,
    locale = defaultOptions.locale
  } = options;

  // Fix duplicate title issue - only append site name once
  const title = content.title ? `${content.title} | ${siteTitle}` : siteTitle;
  
  // Create more specific descriptions
  let description = '';
  if (content.excerpt) {
    description = content.excerpt;
  } else if (content.title) {
    // Create more specific and engaging descriptions based on title
    const lowercaseTitle = content.title.toLowerCase();
    if (lowercaseTitle.includes('ai')) {
      description = `Discover how artificial intelligence is transforming ${lowercaseTitle.replace('ai-powered ', '').replace('ai ', '')} and how your business can leverage these advanced technologies.`;
    } else if (lowercaseTitle.includes('strategy')) {
      description = `Learn effective ${lowercaseTitle} approaches that drive results and provide measurable ROI for businesses of all sizes.`;
    } else if (lowercaseTitle.includes('marketing')) {
      description = `Explore cutting-edge ${lowercaseTitle} techniques that can help your business reach its target audience more effectively.`;
    } else if (lowercaseTitle.includes('advertising')) {
      description = `Master the latest ${lowercaseTitle} methods to maximize campaign performance and achieve better results with your ad budget.`;
    } else {
      description = `Explore insights and best practices for ${lowercaseTitle} to improve your marketing performance and drive business growth.`;
    }
  } else {
    description = `Expert insights and strategies on AI-powered digital advertising for small and medium businesses. Maximize your marketing ROI with AI-Vertise Boost.`;
  }
  
  const imageUrl = content.heroImage || defaultImage || '/images/blog/placeholder.svg';
  const isArticle = content.id ? true : false;
  const url = content.id ? `${siteUrl}/blog/${content.id}` : siteUrl;
  
  // Generate keywords based on tags and category if available
  const tags = content.tags || [];
  const category = content.category ? [content.category] : [];
  const keywordsList = [...tags, ...category].filter(Boolean);
  const keywords = keywordsList.length > 0 
    ? keywordsList.join(', ').toLowerCase() + ', ai marketing, digital advertising' 
    : 'ai marketing, digital advertising, marketing automation';
  
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'x-default': url,
      },
    },
    openGraph: {
      title,
      description,
      type: isArticle ? 'article' : 'website',
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: content.title || siteTitle,
          type: 'image/jpeg',
        }
      ],
      locale,
      siteName: siteTitle,
      ...(isArticle && content.date && {
        publishedTime: new Date(content.date).toISOString(),
        modifiedTime: new Date(content.date).toISOString(),
        authors: [defaultAuthor],
        section: content.category || 'Marketing',
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@aivertise',
      site: '@aivertise',
    },
  };
}

/**
 * Generate consistent structured data (JSON-LD) for blog posts and other content
 */
export function generateStructuredData(
  content: Partial<ContentItem>,
  options: MetadataOptions = {}
) {
  const {
    siteTitle = defaultOptions.siteTitle,
    siteUrl = defaultOptions.siteUrl,
    defaultAuthor = defaultOptions.defaultAuthor,
    locale = defaultOptions.locale
  } = options;

  const isArticle = content.id ? true : false;
  const url = content.id ? `${siteUrl}/blog/${content.id}` : siteUrl;
  
  // Create better description for structured data
  let description = '';
  if (content.excerpt) {
    description = content.excerpt;
  } else if (content.title) {
    const lowercaseTitle = content.title.toLowerCase();
    if (lowercaseTitle.includes('ai')) {
      description = `Discover how artificial intelligence is transforming ${lowercaseTitle.replace('ai-powered ', '').replace('ai ', '')} and how your business can leverage these advanced technologies.`;
    } else {
      description = `Explore insights and best practices for ${lowercaseTitle} to improve your marketing performance and drive business growth.`;
    }
  } else {
    description = `Expert insights on AI-powered digital advertising for small and medium businesses.`;
  }
  
  // Default article schema
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title || "",
    "description": description,
    "author": {
      "@type": "Organization",
      "name": defaultAuthor
    },
    "publisher": {
      "@type": "Organization",
      "name": siteTitle,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`,
        "width": 512,
        "height": 512
      }
    },
    "datePublished": content.date ? new Date(content.date).toISOString() : new Date().toISOString(),
    "dateModified": content.date ? new Date(content.date).toISOString() : new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "image": content.heroImage || `${siteUrl}/images/blog/placeholder.svg`,
    "inLanguage": locale
  };
  
  // Add breadcrumbs structured data
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": siteUrl
    }
  ];
  
  if (isArticle) {
    breadcrumbItems.push(
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${siteUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": content.title || "Article",
        "item": url
      }
    );
  } else if (content.id === 'blog') {
    breadcrumbItems.push(
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${siteUrl}/blog`
      }
    );
  }
  
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };
  
  return isArticle ? { ...articleData, breadcrumbData } : breadcrumbData;
} 
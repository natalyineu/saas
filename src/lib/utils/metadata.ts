import { Metadata } from 'next';
import { ContentItem } from '../types/content';

interface MetadataOptions {
  siteTitle?: string;
  siteUrl?: string;
  defaultImage?: string;
  defaultAuthor?: string;
  locale?: string;
  twitterUsername?: string;
}

const defaultOptions: MetadataOptions = {
  siteTitle: 'AI-Vertise Boost',
  siteUrl: 'https://ai-vertise.com',
  defaultImage: '/images/og-image.jpg',
  defaultAuthor: 'Founder of ai-vertise.com',
  locale: 'en-US',
  twitterUsername: '@aivertise'
};

/**
 * Generate consistent SEO metadata for blog posts and other content
 * Enhanced for better SEO performance across search engines and social media
 */
export function generateMetadata(
  content: Partial<ContentItem>,
  options: MetadataOptions = {}
): Metadata {
  const {
    siteTitle = defaultOptions.siteTitle,
    siteUrl = defaultOptions.siteUrl || 'https://ai-vertise.com',
    defaultImage = defaultOptions.defaultImage,
    defaultAuthor = defaultOptions.defaultAuthor,
    locale = defaultOptions.locale,
    twitterUsername = defaultOptions.twitterUsername
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
  
  // Use a consistent og image approach that doesn't rely on removed hero images
  const imageUrl = `${siteUrl}/images/og-image.jpg`;
  const isArticle = content.id ? true : false;
  const url = content.id ? `${siteUrl}/blog/${content.id}` : siteUrl;
  
  // Generate keywords based on tags and category if available
  const tags = content.tags || [];
  const category = content.category ? [content.category] : [];
  const keywordsList = [...tags, ...category].filter(Boolean);
  const keywords = keywordsList.length > 0 
    ? keywordsList.join(', ').toLowerCase() + ', ai marketing, digital advertising' 
    : 'ai marketing, digital advertising, marketing automation, ai advertising';
  
  // Create a more comprehensive metadata object
  return {
    title,
    description,
    keywords,
    authors: [{ name: defaultAuthor }],
    creator: defaultAuthor,
    publisher: siteTitle,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'x-default': url,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
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
      images: '/images/og-image.jpg',
      creator: twitterUsername,
      site: twitterUsername,
    },
    other: {
      'msapplication-TileColor': '#6023dd',
      'theme-color': '#ffffff',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': siteTitle || 'AI-Vertise Boost',
    }
  };
}

/**
 * Generate consistent structured data (JSON-LD) for blog posts and other content
 * Enhanced with additional details for better search visibility
 */
export function generateStructuredData(
  content: Partial<ContentItem>,
  options: MetadataOptions = {}
) {
  const {
    siteTitle = defaultOptions.siteTitle,
    siteUrl = defaultOptions.siteUrl || 'https://ai-vertise.com',
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
  
  // Enhanced article schema with more properties
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title || "",
    "description": description,
    "author": {
      "@type": "Organization",
      "name": defaultAuthor,
      "url": siteUrl
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
    "image": {
      "@type": "ImageObject",
      "url": `${siteUrl}/images/og-image.jpg`,
      "width": 1200,
      "height": 630
    },
    "inLanguage": locale,
    "isAccessibleForFree": "True",
    "keywords": content.tags ? content.tags.join(', ') : "AI marketing, digital advertising"
  };
  
  // Add FAQPage structured data for pages that might contain FAQs
  const faqData = content.id === 'faq' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-Vertise Boost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-Vertise Boost is an AI-powered advertising platform designed specifically for small and medium-sized businesses that want to leverage advanced artificial intelligence to improve their marketing campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI-Vertise improve marketing performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-Vertise uses advanced machine learning algorithms to optimize ad targeting, creative selection, budget allocation, and campaign timing based on real-time performance data, leading to higher ROI on marketing spend."
        }
      }
    ]
  } : null;
  
  // Add organization schema
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteTitle,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      "https://twitter.com/aivertise",
      "https://www.linkedin.com/company/ai-vertise",
      "https://www.facebook.com/aivertise"
    ]
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
  
  // Determine which structured data to return based on content type
  if (isArticle) {
    return { ...articleData, breadcrumbData, organizationData };
  } else if (content.id === 'faq' && faqData) {
    return { ...faqData, breadcrumbData, organizationData };
  } else {
    return { ...breadcrumbData, organizationData };
  }
} 
import { Metadata } from 'next';
import { ContentItem } from '../types/content';

interface MetadataOptions {
  siteTitle?: string;
  siteUrl?: string;
  defaultImage?: string;
  defaultAuthor?: string;
}

const defaultOptions: MetadataOptions = {
  siteTitle: 'AI-Vertise Boost',
  siteUrl: 'https://ai-vertise.com',
  defaultImage: '/images/blog/placeholder.svg',
  defaultAuthor: 'Founder of ai-vertise.com'
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
    defaultAuthor = defaultOptions.defaultAuthor
  } = options;

  const title = content.title ? `${content.title} | ${siteTitle}` : siteTitle;
  const description = content.excerpt || `Learn about ${content.title?.toLowerCase()} and how it can improve your marketing results.`;
  const imageUrl = content.heroImage || defaultImage || '/images/blog/placeholder.svg';
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: content.id ? `${siteUrl}/blog/${content.id}` : `${siteUrl}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: content.title || siteTitle,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
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
    defaultAuthor = defaultOptions.defaultAuthor
  } = options;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title || "",
    "description": content.excerpt || `Learn about ${content.title?.toLowerCase()}`,
    "author": {
      "@type": "Organization",
      "name": defaultAuthor
    },
    "publisher": {
      "@type": "Organization",
      "name": siteTitle,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "datePublished": content.date || "",
    "dateModified": content.date || "",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": content.id ? `${siteUrl}/blog/${content.id}` : `${siteUrl}`
    }
  };
} 
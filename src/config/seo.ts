import { Metadata, Viewport } from 'next';

const BASE_URL = 'https://ai-vertise.com';

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'AI-Vertise Boost | AI-Powered Ad Management',
  description: 'Supercharge your advertising with our AI-powered platform. Smart targeting, fast launch, and budget optimization designed specifically for small and medium businesses.',
  keywords: 'AI advertising, digital marketing, ad management, SMB marketing, AI-powered ads, advertising automation, marketing for small businesses, machine learning ads, targeted advertising',
  authors: [{ name: 'AI-Vertise Team' }],
  creator: 'AI-Vertise',
  publisher: 'AI-Vertise',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
    // Bing and other search engines will use the default index/follow values
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: 'AI-Vertise Boost | AI-Powered Ad Management',
    description: 'Supercharge your advertising with our AI-powered platform. Smart targeting, fast launch, and budget optimization designed specifically for small and medium businesses.',
    siteName: 'AI-Vertise Boost',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Vertise Boost Platform',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Vertise Boost | AI-Powered Ad Management',
    description: 'Supercharge your advertising with our AI-powered platform. Smart targeting, fast launch, and budget optimization designed specifically for small and medium businesses.',
    images: ['/og-image.jpg'],
    creator: '@aivertise',
    site: '@aivertise',
  },
  icons: {
    icon: [
      { url: '/favicon-new.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon-new.svg', color: '#3F5EFB' }
    ]
  }
};

export const viewportConfig: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3F5EFB',
};

/**
 * Generates structured data for the website
 * @returns Object with website and organization structured data
 */
export function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI-Vertise Boost",
    "url": BASE_URL,
    "description": "AI-powered advertising platform for small and medium businesses",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI-Vertise",
    "url": BASE_URL,
    "logo": `${BASE_URL}/images/logo.png`,
    "sameAs": [
      "https://twitter.com/aivertise",
      "https://www.linkedin.com/company/aivertise",
      "https://www.facebook.com/aivertise"
    ]
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI-Vertise Ad Management Platform",
    "description": "AI-powered advertising platform that optimizes campaigns for small and medium businesses",
    "brand": {
      "@type": "Brand",
      "name": "AI-Vertise"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "299",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return {
    structuredData,
    organizationData,
    productData
  };
} 
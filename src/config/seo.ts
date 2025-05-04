import { Metadata, Viewport } from 'next';

const BASE_URL = 'https://ai-vertise.com';

// SEO verification codes - in production these should be moved to environment variables
const VERIFICATION_CODES = {
  GOOGLE: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',  // Google Search Console verification
  BING: process.env.NEXT_PUBLIC_BING_VERIFICATION || '',      // Bing Webmaster Tools verification
  YANDEX: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',  // Yandex Webmaster verification
  BAIDU: process.env.NEXT_PUBLIC_BAIDU_VERIFICATION || '',    // Baidu Webmaster verification
  PINTEREST: process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION || '', // Pinterest verification
};

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'AI-Vertise Boost | AI-Powered Ad Management',
  description: 'Supercharge your advertising with our AI-powered platform. Smart targeting, fast launch, and budget optimization designed specifically for small and medium businesses.',
  keywords: 'AI advertising, digital marketing, ad management, SMB marketing, AI-powered ads, advertising automation, marketing for small businesses, machine learning ads, targeted advertising, ROI optimization',
  authors: [{ name: 'AI-Vertise Team' }],
  creator: 'AI-Vertise',
  publisher: 'AI-Vertise',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    'max-snippet': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': `${BASE_URL}/`,
      'x-default': `${BASE_URL}/`,
    },
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
        alt: 'AI-Vertise Boost Platform - AI-powered advertising solution for small businesses',
        type: 'image/jpeg',
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
  },
  other: {
    // Search engine verification codes
    'google-site-verification': VERIFICATION_CODES.GOOGLE,
    'msvalidate.01': VERIFICATION_CODES.BING,
    'yandex-verification': VERIFICATION_CODES.YANDEX,
    'baidu-site-verification': VERIFICATION_CODES.BAIDU,
    'p:domain_verify': VERIFICATION_CODES.PINTEREST,
    
    // Page-level indicators
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'application-name': 'AI-Vertise',
    'mobile-web-app-capable': 'yes',
    
    // Additional SEO metadata
    'format-detection': 'telephone=no',
    'referrer': 'origin-when-cross-origin',
  }
};

// Enhanced viewport configuration for better mobile experience
export const viewportConfig: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: '#3F5EFB',
  viewportFit: 'cover',
  colorScheme: 'normal'
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
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/logo.png`,
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://twitter.com/aivertise",
      "https://www.linkedin.com/company/aivertise",
      "https://www.facebook.com/aivertise"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "areaServed": ["US", "UK", "EU", "Asia"],
      "availableLanguage": ["English"]
    }
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Vertise Ad Management Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI-powered advertising platform that optimizes campaigns for small and medium businesses",
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

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL
      }
    ]
  };

  // Local business data for local SEO
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AI-Vertise",
    "image": `${BASE_URL}/logo.png`,
    "url": BASE_URL,
    "telephone": "+1-555-123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Marketing Avenue",
      "addressLocality": "Tech City",
      "addressRegion": "CA",
      "postalCode": "94103",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$$"
  };

  return {
    structuredData,
    organizationData,
    productData,
    breadcrumbData,
    localBusinessData
  };
} 
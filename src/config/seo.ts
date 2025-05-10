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

// Core business keywords for semantic relevance
const CORE_KEYWORDS = [
  'AI advertising', 
  'digital marketing automation', 
  'AI ad optimization', 
  'small business marketing',
  'automated marketing campaigns',
  'machine learning advertising',
  'advertising ROI', 
  'marketing AI', 
  'targeted ad campaigns',
  'automated ad creation',
  'budget optimization',
  'performance marketing',
  'AI marketing platform',
  'digital advertising technology',
  'data-driven marketing'
];

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | AI-Vertise Boost',
    default: 'AI-Vertise Boost | AI-Powered Advertising Platform for Small Businesses'
  },
  description: 'AI-Vertise Boost helps small businesses increase ROI by 35%+ with AI-powered advertising. Automated campaign management, smart targeting, and real-time optimization with 24/7 performance tracking.',
  keywords: CORE_KEYWORDS.join(', '),
  authors: [
    { name: 'AI-Vertise Team', url: 'https://ai-vertise.com/about' }
  ],
  creator: 'AI-Vertise',
  publisher: 'AI-Vertise',
  category: 'Technology',
  applicationName: 'AI-Vertise Boost',
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
    title: 'AI-Vertise Boost | AI-Powered Advertising for SMBs',
    description: 'AI-Vertise Boost helps small businesses increase advertising ROI by 35%+ with AI-powered campaign management. Smart targeting and real-time optimization across all digital channels.',
    siteName: 'AI-Vertise Boost',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Vertise Boost Platform - AI-powered advertising solution for small businesses',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'AI-Vertise Boost - Small business advertising platform',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Vertise Boost | AI-Powered Advertising for SMBs',
    description: 'Increase your advertising ROI by 35%+ with AI-powered campaign management. Smart targeting and real-time optimization across all digital channels.',
    images: ['/og-image-twitter.jpg'],
    creator: '@aivertise',
    site: '@aivertise',
  },
  appleWebApp: {
    title: 'AI-Vertise',
    statusBarStyle: 'black-translucent',
    capable: true
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
    date: false
  },
  icons: {
    icon: [
      { url: '/favicon-new.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3F5EFB' },
      { rel: 'shortcut icon', url: '/favicon.ico' }
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
    
    // Technology indicators
    'generator': 'Next.js',
    'powered-by': 'Artificial Intelligence',
    
    // Monetization and ownership
    'monetization': '$ilp.uphold.com/YourPointer', // Update with real monetization ID if using Web Monetization
    'copyright': `© ${new Date().getFullYear()} AI-Vertise Inc. All rights reserved.`
  }
};

// Enhanced viewport configuration for better mobile experience
export const viewportConfig: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3F5EFB' },
    { media: '(prefers-color-scheme: dark)', color: '#6366F1' }
  ],
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
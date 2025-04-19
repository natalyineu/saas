/**
 * Generates structured data for the website
 * @returns Object with website and organization structured data
 */
export function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI-Vertise Boost",
    "url": "https://ai-vertise.com",
    "description": "AI-powered advertising platform for small and medium businesses",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ai-vertise.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI-Vertise",
    "url": "https://ai-vertise.com",
    "logo": "https://ai-vertise.com/images/logo.png",
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
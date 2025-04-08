import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import HowItWorksSection from './components/HowItWorksSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import BlogCTASection from './components/BlogCTASection';
import Footer from './components/Footer';
import Script from 'next/script';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI-Vertise Boost",
    "url": "https://aivertise.io",
    "description": "AI-powered advertising platform for small and medium businesses",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aivertise.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI-Vertise",
    "url": "https://aivertise.io",
    "logo": "https://aivertise.io/images/logo.png",
    "sameAs": [
      "https://twitter.com/aivertise",
      "https://www.linkedin.com/company/aivertise",
      "https://www.facebook.com/aivertise"
    ]
  };

  return (
    <>
      <Script
        id="homepage-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <HowItWorksSection />
        <CaseStudiesSection />
        <BlogCTASection />
      </main>
      <Footer />
    </>
  );
}

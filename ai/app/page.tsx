import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import HowItWorksSection from './components/HowItWorksSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import Footer from './components/Footer';
import Script from 'next/script';
import { generateStructuredData } from './lib/seo';
import SuppressHydrationWarning from './components/ui/SuppressHydrationWarning';

// Enable static generation for this page
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function Home() {
  const { structuredData, organizationData } = generateStructuredData();

  return (
    <SuppressHydrationWarning>
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
      </main>
      <Footer />
    </SuppressHydrationWarning>
  );
}

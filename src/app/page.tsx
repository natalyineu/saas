import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import HowItWorksSection from './components/HowItWorksSection';
import ClientCostComparisonSection from './components/ClientCostComparisonSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import Footer from './components/Footer';
import Script from 'next/script';
import { generateStructuredData } from '@/lib/seo';
import SuppressHydrationWarning from '@/components/ui/SuppressHydrationWarning';
import ContactForm from './components/ContactForm';

// Enable static generation for this page
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function Home() {
  const { structuredData, organizationData, productData } = generateStructuredData();

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
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <HowItWorksSection />
        <ClientCostComparisonSection />
        <CaseStudiesSection />
        
        <section id="contact" className="py-16 bg-soft-gradient">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-primary-purple bg-primary-purple/10 rounded-full">CONTACT US</span>
              <h2 className="text-3xl md:text-4xl mb-3 font-bold">Get in Touch</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-sm">Have questions about our services? Ready to boost your advertising performance? Reach out to our team.</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm 
                title=""
                subtitle=""
                className="shadow-md rounded-xl border border-gray-200"
                buttonText="Send Message"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SuppressHydrationWarning>
  );
}

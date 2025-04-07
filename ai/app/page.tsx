import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import HowItWorksSection from './components/HowItWorksSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import BlogCTASection from './components/BlogCTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
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

import Script from 'next/script';
import Image from 'next/image';
import { Metadata } from 'next';
import { COMPANY_NAME, COMPANY_EMAIL } from '@/lib/utils/constants';

export const metadata: Metadata = {
  title: 'About AI-Vertise | AI-Powered Digital Advertising Technology',
  description: 'Founded by a marketing executive with 8+ years at Dentsu, OMD, GroupM and BBDO, our Poznan-based team creates AI-driven advertising solutions that deliver enterprise performance at scale.',
  openGraph: {
    title: 'About AI-Vertise | AI-Powered Digital Advertising Technology',
    description: 'Founded by a marketing executive with 8+ years at Dentsu, OMD, GroupM and BBDO, our Poznan-based team creates AI-driven advertising solutions that deliver enterprise performance at scale.',
    url: 'https://ai-vertise.com/about',
    images: [
      {
        url: 'https://ai-vertise.com/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Vertise Leadership Team',
      },
    ],
  },
  keywords: 'AI advertising, programmatic marketing, digital ad automation, marketing AI technology, Poznan tech company, enterprise marketing tools, AI media buying',
};

export default function About() {
  return (
    <>
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            'name': 'About AI-Vertise',
            'description': 'Founded by a marketing executive with 8+ years at Dentsu, OMD, GroupM and BBDO, our Poznan-based team creates AI-driven advertising solutions that deliver enterprise performance at scale.',
            'url': 'https://ai-vertise.com/about',
            'mainEntity': {
              '@type': 'Organization',
              'name': 'AI-Vertise',
              'url': 'https://ai-vertise.com',
              'logo': 'https://ai-vertise.com/images/logo.png',
              'description': 'AI-powered advertising platform for media optimization and campaign automation',
              'location': {
                '@type': 'Place',
                'address': {
                  '@type': 'PostalAddress',
                  'addressLocality': 'Poznan',
                  'addressCountry': 'Poland'
                }
              }
            }
          })
        }}
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">The AI-Vertise Story</h1>
        <p className="text-gray-600 mb-10">Transforming digital advertising through machine learning technology built from the ground up by executives with world-class agency expertise.</p>
        
        <div className="mb-12">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
            <Image 
              src="/og-image.jpg" 
              alt="AI-Vertise Leadership Team" 
              fill 
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2>Our Vision</h2>
          <p>
            At AI-Vertise, we're engineering a new class of advertising technology that distills complex marketing intelligence into accessible digital tools. Our proprietary algorithms bridge the gap between sophisticated campaign methodologies and automated execution systems, making enterprise-grade advertising capabilities accessible to organizations regardless of size or in-house expertise.
          </p>
          <p>
            Headquartered in Poznan, Poland—an emerging European tech hub—we operate with a distinct perspective that combines deep agency knowledge with forward-thinking AI development. Our technology platforms transcend geographical constraints to optimize ad performance and media buying across markets worldwide.
          </p>
          
          <h2>From Agency Excellence to AI Innovation</h2>
          <p>
            AI-Vertise emerged directly from the intersection of global advertising expertise and technological innovation. After witnessing the capabilities gap between enterprise marketing platforms and accessible tools, our leadership team leveraged their collective intelligence from top media agencies to build a solution that democratizes advanced advertising capabilities.
          </p>
          <p>
            Based in Poland's rapidly growing technology corridor, our company balances targeted resource deployment with ambitious technological advancement. Currently operating with focused leadership and deploying vide-coding infrastructure anticipated for 2025, we're creating a technology bridge that delivers previously inaccessible campaign optimization capabilities to growing businesses.
          </p>
          <p>
            While maintaining lean operational efficiency, our development roadmap integrates cutting-edge machine learning with programmatic media buying systems. This approach automates complex decision processes that traditionally demanded specialized media planning teams, effectively distributing enterprise-level capabilities across various organizational scales and budget parameters.
          </p>
          
          <h2>Leadership Expertise</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center my-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <div className="md:w-1/3">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image 
                  src="/images/blog/author-avatar.svg" 
                  alt="AI-Vertise Founder" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-3">Global Agency Background</h3>
              <p className="text-gray-700">
                AI-Vertise's technological direction draws directly from over eight years of specialized expertise at the world's foremost marketing conglomerates. This experience spans programmatic media buying, audience targeting algorithms, and cross-channel optimization systems across both established and emerging markets.
              </p>
              <p className="text-gray-700 mt-3">
                This diverse media agency foundation directly shapes our platform architecture, ensuring our AI systems address real-world marketing challenges while implementing proven advertising approaches within accessible technological frameworks.
              </p>
            </div>
          </div>
          
          <h3>Media Agency Expertise That Powers Our AI</h3>
          <ul>
            <li><strong>Dentsu International</strong> – Development of data-driven campaign optimization protocols and cross-platform analytics frameworks for global brands</li>
            <li><strong>OMD Worldwide</strong> – Implementation of audience-focused media planning methodologies and measurement systems for enterprise consumer brands</li>
            <li><strong>GroupM</strong> – Creation of advanced programmatic targeting systems and real-time bidding technology for performance-driven campaigns</li>
            <li><strong>BBDO</strong> – Integration of creative message testing frameworks and engagement optimization algorithms across digital platforms</li>
          </ul>
          
          <h2>Technology Principles</h2>
          <h3>Agency-Grade AI Methodology</h3>
          <p>
            Our platform architecture incorporates proven campaign frameworks from leading agencies, algorithmically translating complex marketing methodologies into automated execution systems. This approach standardizes sophisticated advertising practices that were previously inaccessible without specialized talent, delivering them through intuitive interfaces for organizations across various growth stages.
          </p>
          
          <h3>Cross-Border Media Optimization</h3>
          <p>
            AI-Vertise technology operates with a global-first approach, leveraging multinational campaign intelligence to address advertising requirements across borders while adapting to regional media landscapes and regulatory frameworks. This capability enables consistent brand messaging with localized performance optimization without requiring market-specific expertise.
          </p>
          
          <h3>Performance Measurement Protocol</h3>
          <p>
            Our systems implement comprehensive measurement frameworks that deliver granular performance insights, transparent cost structures, and actionable campaign intelligence. By prioritizing clarity in reporting and optimization suggestions, we've created technology that transparently communicates both capabilities and results to drive continuous improvement cycles.
          </p>
          
          <h2>Connect With Our Team</h2>
          <p>
            Based in Poznan's technology district with international service capabilities, AI-Vertise welcomes inquiries about our advertising technology stack, media optimization methodologies, and partnership opportunities. To discuss your specific advertising challenges or explore how our AI capabilities might enhance your media performance, please contact our executive team.
          </p>
          <div className="flex flex-col md:flex-row gap-6 my-8">
            <a href={`mailto:${COMPANY_EMAIL}`} className="inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-md bg-primary-purple hover:bg-primary-purple/90 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contact Leadership Team
            </a>
            <a href="/faq" className="inline-flex items-center justify-center px-6 py-3 text-primary-purple font-medium rounded-md bg-primary-purple/10 hover:bg-primary-purple/20 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Technology Documentation
            </a>
          </div>
        </div>
      </main>
    </>
  );
} 
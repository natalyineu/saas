import Footer from '@/components/Footer';
import Script from 'next/script';
import Image from 'next/image';
import SuppressHydrationWarning from '@/components/ui/SuppressHydrationWarning';

export const metadata = {
  title: 'About AI-Vertise | Our Story and Mission',
  description: 'Learn about AI-Vertise, our mission to democratize AI-powered advertising, and the team behind our innovative platform.',
  openGraph: {
    title: 'About AI-Vertise | Our Story and Mission',
    description: 'Learn about AI-Vertise, our mission to democratize AI-powered advertising, and the team behind our innovative platform.',
    url: 'https://ai-vertise.com/about',
    images: [
      {
        url: 'https://ai-vertise.com/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About AI-Vertise',
      },
    ],
  },
};

export default function About() {
  return (
    <SuppressHydrationWarning>
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            'name': 'About AI-Vertise',
            'description': 'Learn about AI-Vertise, our mission, and team.',
            'url': 'https://ai-vertise.com/about',
            'mainEntity': {
              '@type': 'Organization',
              'name': 'AI-Vertise',
              'url': 'https://ai-vertise.com',
              'logo': 'https://ai-vertise.com/images/logo.png',
              'description': 'AI-powered advertising platform for small and medium businesses'
            }
          })
        }}
      />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">About AI-Vertise</h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl">
            Transforming digital advertising with artificial intelligence to help businesses of all sizes achieve exceptional results.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At AI-Vertise, we're on a mission to democratize digital advertising by making advanced AI-powered tools accessible to businesses of all sizes. We believe that every company deserves the opportunity to grow through effective digital marketing, regardless of their budget or technical expertise.
              </p>
              <p className="text-gray-700">
                Our platform combines cutting-edge artificial intelligence with an intuitive user experience, allowing you to create, optimize, and scale your advertising campaigns with unprecedented efficiency and performance.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                <div className="w-48 h-48 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                    <g className="transform transition-transform duration-700 animate-float">
                      <path d="M25 40 L75 40 L75 70 L25 70 Z" fill="rgba(252,70,107,0.8)" strokeWidth="2" />
                      <path d="M40 45 L50 35 L60 45" stroke="white" strokeWidth="2" />
                      <path d="M35 70 L35 50 L65 50 L65 70" stroke="white" strokeWidth="2" fill="none" />
                      <circle cx="40" cy="60" r="3" fill="white" />
                      <circle cx="60" cy="60" r="3" fill="white" />
                      <path d="M40 60 L60 60" stroke="white" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-700 mb-4">
              Founded in 2022, AI-Vertise was born from a simple observation: while large corporations had access to sophisticated AI-driven advertising tools, small and medium businesses were left behind, struggling with outdated and inefficient marketing solutions.
            </p>
            <p className="text-gray-700 mb-4">
              Our founders, a team of marketing experts and AI engineers, set out to level the playing field by building a platform that would bring the power of AI to businesses of all sizes. After months of research and development, AI-Vertise was launched with a commitment to making advanced advertising technology accessible, affordable, and easy to use.
            </p>
            <p className="text-gray-700">
              Today, we serve thousands of businesses across the globe, helping them achieve remarkable growth through our AI-powered advertising platform. As we continue to innovate and expand our offerings, we remain dedicated to our core mission: empowering businesses to succeed in the digital marketplace.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-purple/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We constantly push the boundaries of what's possible in AI-powered advertising, developing new features and capabilities that help our customers stay ahead of the competition.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-purple/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-gray-700">
                We believe that advanced marketing technology should be accessible to all businesses, regardless of size or budget. Our platform is designed to be intuitive, affordable, and scalable.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-purple/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-700">
                We're committed to being open and honest with our customers. Our pricing is straightforward, our results are measurable, and we're always here to answer your questions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              We'd love to hear from you! Whether you have questions about our platform, need support with your campaigns, or want to learn more about how we can help your business grow, our team is here to assist you.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="mailto:contact@ai-vertise.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-purple hover:bg-primary-purple/90 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email Us
              </a>
              <a href="/faq" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-purple bg-primary-purple/10 hover:bg-primary-purple/20 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                View FAQ
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SuppressHydrationWarning>
  );
} 
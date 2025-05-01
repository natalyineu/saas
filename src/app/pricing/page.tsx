import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import ClientCostComparisonSection from '@/components/ClientCostComparisonSection';

// Enable static generation for this page
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Pricing Details | AI-Vertise',
  description: 'Detailed information about AI-Vertise pricing plans, features, and the value you get compared to traditional marketing solutions.',
  openGraph: {
    title: 'Pricing Details | AI-Vertise',
    description: 'Detailed information about AI-Vertise pricing plans, features, and the value you get compared to traditional marketing solutions.',
    type: 'website',
  },
};

export default function PricingDetailsPage() {
  return (
    <>
      <main>
        <div className="pt-16 pb-8 md:pt-24 md:pb-12 bg-gradient-to-b from-primary-purple/5 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">
                Pricing Details
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                AI-Vertise offers a range of plans designed to meet your unique marketing needs at a fraction of traditional costs.
              </p>
              <Link 
                href="/#pricing" 
                className="inline-flex items-center font-medium text-primary-purple hover:text-primary-pink transition-colors"
              >
                View pricing plans 
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed pricing information */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Understanding Our Pricing Model</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-primary-purple">Transparent Value-Based Pricing</h3>
                  <p className="text-gray-700 mb-4">
                    Our pricing is based on the actual value we deliver to your business. Instead of charging high monthly retainers 
                    regardless of performance, we've designed our plans to scale with your needs and budget.
                  </p>
                  <p className="text-gray-700">
                    Each plan includes a specific number of monthly impressions, ensuring you know exactly what you're getting for your investment.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-primary-purple">No Hidden Fees</h3>
                  <p className="text-gray-700 mb-4">
                    Unlike traditional agencies that charge setup fees, creative fees, reporting fees, and management fees, our pricing is all-inclusive.
                  </p>
                  <p className="text-gray-700">
                    Your monthly subscription covers everything from campaign setup to optimization, reporting, and support.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-primary-purple">Annual Discount</h3>
                  <p className="text-gray-700 mb-4">
                    Save up to 20% when you choose annual billing. This option is perfect for businesses committed to long-term growth
                    and those who want to maximize their advertising budget efficiency.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-primary-purple">Customizable Enterprise Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    For larger businesses with unique needs, our Tailored plan offers customized solutions with dedicated support
                    and specialized features designed specifically for your business goals.
                  </p>
                  <p className="text-gray-700">
                    Contact us to discuss how we can build a custom solution for your enterprise needs.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link 
                  href="/#pricing" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-pink text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  View Pricing Plans
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cost Comparison section */}
        <ClientCostComparisonSection />

        {/* FAQs about pricing */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Is there a contract or commitment?</h3>
                  <p className="text-gray-700">
                    No, all our plans are month-to-month with no long-term contracts. You can cancel anytime. If you choose annual billing, 
                    you'll get a significant discount, but you can still cancel anytime and receive a prorated refund for unused months.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">What happens if I need more impressions?</h3>
                  <p className="text-gray-700">
                    If you reach your monthly impression limit, you can easily upgrade to a higher tier plan at any time. 
                    The changes will be prorated based on the remaining days in your billing cycle.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Are there any additional costs?</h3>
                  <p className="text-gray-700">
                    No, our pricing is transparent and all-inclusive. Your monthly fee covers everything from campaign setup to 
                    optimization, reporting, and customer support. There are no hidden fees or surprises.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">How does AI-Vertise compare to hiring a marketing agency?</h3>
                  <p className="text-gray-700">
                    Traditional marketing agencies typically charge $3,000-$10,000 per month plus ad spend. With AI-Vertise, you get 
                    comparable or better results at a fraction of the cost because our AI-powered platform eliminates the overhead 
                    of traditional agencies while delivering faster optimization and more consistent performance.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Can I get a demo before purchasing?</h3>
                  <p className="text-gray-700">
                    Yes! We offer personalized demos to show you how our platform works and how it can benefit your specific business. 
                    Contact us to schedule a demo with one of our AI advertising specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 
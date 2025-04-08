import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coffee Shop Campaign: How Urban Beans Increased Foot Traffic by 143% | AI-Vertise',
  description: 'Discover how Urban Beans coffee shop used AI-powered advertising to increase foot traffic by 143% and attract new customers in a competitive market. Learn about their successful digital marketing strategy.',
  keywords: 'coffee shop marketing, local business advertising, foot traffic increase, digital marketing case study, AI advertising success',
  openGraph: {
    title: 'Urban Beans Success Story: 143% Increase in Foot Traffic',
    description: 'See how this coffee shop used AI-Vertise to outperform competitors and increase foot traffic by 143%',
    type: 'article',
    publishedTime: '2023-04-15',
    authors: ['Marketing Team'],
    images: [
      {
        url: '/og-urban-beans.jpg',
        width: 1200,
        height: 630,
        alt: 'Urban Beans Coffee Shop Success Story',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Beans Success Story: 143% Increase in Foot Traffic',
    description: 'See how this coffee shop used AI-Vertise to outperform competitors',
    images: ['/og-urban-beans.jpg'],
  },
};

export default function UrbanBeansCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Coffee Shop Campaign: How Urban Beans Increased Foot Traffic by 143%",
    "description": "Discover how Urban Beans coffee shop used AI-powered advertising to increase foot traffic by 143% and attract new customers in a competitive market.",
    "image": "/og-urban-beans.jpg",
    "author": {
      "@type": "Organization",
      "name": "Marketing Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI-Vertise",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": "2023-04-15",
    "dateModified": "2023-04-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://aivertise.io/blog/urban-beans-case-study"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto prose lg:prose-lg">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-primary-purple">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-primary-purple">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-700">Urban Beans Case Study</li>
            </ol>
          </nav>
          
          <Link href="/blog" className="text-primary-purple hover:underline flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Coffee Shop Campaign: How Urban Beans Increased Foot Traffic by 143%</h1>
            <div className="flex items-center text-gray-500 text-sm">
              <span>April 15, 2023</span>
              <span className="mx-2">•</span>
              <span>Marketing Team</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </header>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg mb-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 p-8 flex justify-center">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                    <g className="transform transition-transform duration-700 origin-center hover:rotate-12">
                      <rect x="35" y="25" width="30" height="10" rx="5" fill="rgba(252,70,107,1)" />
                      <path d="M30 60 L70 60" stroke="rgba(63,94,251,1)" strokeWidth="3" />
                      <path d="M40 50 C40 40, 60 40, 60 50" stroke="rgba(63,94,251,1)" strokeWidth="3" fill="none" />
                      <path d="M30 70 L40 60 L60 60 L70 70" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
                    </g>
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      +143%
                    </div>
                  </svg>
                </div>
              </div>
              <div className="w-full md:w-2/3 p-8 bg-white/50">
                <h2 className="text-2xl font-bold mb-2">Urban Beans</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-purple to-primary-pink mb-4"></div>
                <h3 className="text-xl mb-2">Results at a Glance</h3>
                <p className="text-2xl font-bold text-primary-purple mb-2">143% increase in foot traffic</p>
                <p className="text-gray-600">Coffee shop in downtown Seattle targeting local coffee enthusiasts</p>
              </div>
            </div>
          </div>
          
          <p className="lead">
            Urban Beans, a specialty coffee shop in downtown Seattle, was struggling to stand out in an area saturated with large chain competitors. Despite having exceptional coffee and a unique atmosphere, they were having trouble attracting new customers and building awareness in their local community.
          </p>
          
          <h2>The Challenge</h2>
          <p>
            Urban Beans faced several key challenges:
          </p>
          <ul>
            <li>Limited marketing budget compared to chain competitors</li>
            <li>Difficulty reaching the right local audience</li>
            <li>Lack of expertise in digital advertising</li>
            <li>Need to drive immediate results to ensure business sustainability</li>
          </ul>
          
          <p>
            "We knew we had a great product, but we couldn't compete with the big chains' marketing budgets," said Sophia Chen, owner of Urban Beans. "We needed a solution that would help us reach coffee enthusiasts in our area without breaking the bank."
          </p>
          
          <h2>The Solution: AI-Vertise Boost</h2>
          <p>
            Urban Beans partnered with AI-Vertise Boost to implement a targeted digital advertising strategy. Our approach included:
          </p>
          
          <ol>
            <li>
              <strong>Hyper-local targeting:</strong> Using AI-powered geo-targeting to focus on potential customers within a 3-mile radius of the shop, with special emphasis on office buildings, residential areas, and transit hubs.
            </li>
            <li>
              <strong>Customer behavior analysis:</strong> Leveraging data to identify and target local coffee enthusiasts based on their online behavior, app usage, and previous engagement with similar businesses.
            </li>
            <li>
              <strong>Time-sensitive promotions:</strong> Creating morning and afternoon rush campaigns with special offers to drive traffic during key business hours.
            </li>
            <li>
              <strong>Creative optimization:</strong> Continuously testing multiple variations of ad creative to identify the most effective messaging and visuals for their target audience.
            </li>
          </ol>
          
          <div className="my-8 p-5 bg-gray-50 rounded-lg border border-gray-100">
            <blockquote className="text-lg italic text-gray-700">
              "The AI-powered targeting was a game-changer for us. It was like having a marketing expert who knew exactly which doors to knock on in our neighborhood."
              <footer className="text-sm mt-2 text-gray-500">— Sophia Chen, Owner of Urban Beans</footer>
            </blockquote>
          </div>
          
          <h2>The Implementation</h2>
          <p>
            The campaign was implemented in three phases:
          </p>
          
          <h3>Phase 1: Discovery and Strategy</h3>
          <p>
            We began by analyzing Urban Beans' customer data and the local competitive landscape. This allowed us to identify key differentiators and craft messaging that would resonate with their target audience.
          </p>
          
          <h3>Phase 2: Launch and Optimization</h3>
          <p>
            The initial campaign launched with multiple ad variations across social media platforms and local search. AI-Vertise Boost's algorithm continuously monitored performance, shifting budget to the best-performing ads and targeting combinations in real-time.
          </p>
          
          <h3>Phase 3: Scaling Success</h3>
          <p>
            As we identified winning strategies, we scaled up spend on the most effective channels while implementing a loyalty program to convert new visitors into regular customers.
          </p>
          
          <h2>The Results</h2>
          <p>
            Within 30 days of launching the campaign, Urban Beans saw dramatic improvements:
          </p>
          
          <ul>
            <li><strong>143% increase in foot traffic</strong> compared to the previous month</li>
            <li><strong>76% of new customers</strong> were first-time visitors to the café</li>
            <li><strong>38% increase in average transaction value</strong> due to effective promotion of specialty items</li>
            <li><strong>5.2x return on ad spend</strong> across all digital channels</li>
          </ul>
          
          <p>
            Most importantly, the increase in foot traffic has been sustained, with many first-time visitors becoming regular customers.
          </p>
          
          <h2>Key Takeaways</h2>
          <p>
            The success of Urban Beans' campaign highlights several important lessons for local businesses:
          </p>
          
          <ol>
            <li>
              <strong>AI-powered targeting can level the playing field</strong> for small businesses competing against larger chains with bigger budgets.
            </li>
            <li>
              <strong>Hyper-local focus delivers better results</strong> than broad campaigns for brick-and-mortar businesses.
            </li>
            <li>
              <strong>Continuous optimization through AI</strong> allows for better performance than traditional set-it-and-forget-it campaigns.
            </li>
            <li>
              <strong>The right message to the right audience</strong> is more important than the size of your marketing budget.
            </li>
          </ol>
          
          <h2>Want Similar Results for Your Business?</h2>
          <p>
            AI-Vertise Boost has helped hundreds of local businesses like Urban Beans achieve remarkable growth through intelligent, AI-powered advertising. Our platform makes sophisticated targeting and optimization accessible to businesses of all sizes, with no technical expertise required.
          </p>
          
          <div className="bg-gradient-to-r from-primary-purple/10 to-primary-pink/10 p-6 rounded-lg my-8">
            <h3 className="font-bold text-xl mb-3">Ready to boost your business?</h3>
            <p className="mb-4">
              Join Urban Beans and hundreds of other local businesses that have transformed their growth with AI-Vertise Boost.
            </p>
            <Link href="/#pricing" className="bg-gradient-to-r from-primary-purple to-primary-pink text-white px-6 py-2 rounded-lg inline-block font-medium hover:shadow-lg transition-all">
              Get Started Today
            </Link>
          </div>
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link href="/blog" className="text-primary-purple hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
} 
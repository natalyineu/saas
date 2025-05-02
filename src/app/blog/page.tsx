import Link from 'next/link';
import BlogHeader from '@/components/blog/BlogHeader';
import { getBlogIcon, getBlogStats } from '@/lib/utils/blog-helpers';
import { Metadata } from 'next';
import Script from 'next/script';
import SuppressHydrationWarning from '@/components/ui/SuppressHydrationWarning';
import UnifiedBlogList from '@/components/blog/UnifiedBlogList';
import { successStories } from '@/data/blog/successStories';
import { blogPosts } from '@/data/blog/posts';
import { sortContentByDate } from '@/lib/types/content';
import { generateMetadata as genMeta, generateStructuredData } from '@/lib/utils/metadata';

// Blog post data for the page itself
const pageData = {
  id: 'blog',
  title: 'AI-Vertise Blog - Digital Marketing Insights & Case Studies',
  excerpt: 'Explore our collection of digital marketing case studies, success stories, and insights. Learn how AI-Vertise helps businesses achieve their marketing goals.',
  category: 'AI Technology',
};

// Generate consistent metadata
export const metadata: Metadata = {
  ...genMeta(pageData),
  keywords: 'digital marketing, case studies, success stories, marketing insights, AI marketing, social media marketing',
  alternates: {
    canonical: 'https://ai-vertise.com/blog',
  },
};

export default function BlogPage() {
  const icon = getBlogIcon(pageData);
  const stats = getBlogStats(pageData);

  // Sort both content types by date
  const successStoriesList = sortContentByDate(successStories);
  const blogPostsList = sortContentByDate(blogPosts);
  
  // Combine with success stories first, then blog posts
  const allContent = [...successStoriesList, ...blogPostsList];

  // Generate structured data for the blog page
  const jsonLd = generateStructuredData(pageData);

  // Update the type and description for a blog page rather than an article
  jsonLd['@type'] = 'Blog';
  jsonLd.description = 'Digital marketing insights, case studies, and success stories';

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <SuppressHydrationWarning>
        <main className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Blog Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Vertise Blog</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-purple to-primary-pink mx-auto mb-6" aria-hidden="true"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our collection of digital marketing insights, case studies, and success stories.
              <br />
              Learn from our experts about the latest trends and strategies.
            </p>
          </div>
          
          {/* Featured Content Section */}
          <section className="mb-20" aria-labelledby="featured-content-heading">
            <h2 id="featured-content-heading" className="text-3xl font-bold mb-2">Featured Content</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-purple to-primary-pink mb-8" aria-hidden="true"></div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Discover our latest articles, case studies, and expert insights to help your business thrive with AI-powered marketing.
            </p>
            <UnifiedBlogList content={allContent} initialCount={6} loadMoreIncrement={3} />
          </section>
          
          {/* CTA Section */}
          <section className="mb-12" aria-labelledby="cta-heading">
            <div className="bg-gradient-to-r from-primary-purple/10 to-primary-pink/10 p-8 rounded-lg">
              <div className="max-w-3xl mx-auto text-center">
                <h3 id="cta-heading" className="text-2xl font-bold mb-4">Ready to Boost Your Marketing?</h3>
                <p className="text-gray-700 mb-6">
                  Join hundreds of businesses that have transformed their digital marketing performance with AI-Vertise Boost.
                </p>
                <Link 
                  href="/#pricing" 
                  className="bg-gradient-to-r from-primary-purple to-primary-pink text-white px-8 py-3 rounded-lg inline-block font-medium hover:shadow-lg transition-all"
                  aria-label="View pricing plans"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </section>
        </main>
      </SuppressHydrationWarning>
    </>
  );
} 
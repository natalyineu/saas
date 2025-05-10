import Link from 'next/link';
import BlogHeader from '@/components/blog/BlogHeader';
import { getBlogIcon, getBlogStats } from '@/lib/utils/blog-helpers';
import { Metadata } from 'next';
import Script from 'next/script';
import SuppressHydrationWarning from '@/components/ui/SuppressHydrationWarning';
import UnifiedBlogList from '@/components/blog/UnifiedBlogList';
import { successStories } from '@/data/blog/index';
import { blogPosts } from '@/data/blog/posts';
import { ContentItem, sortContentByDate } from '@/lib/types/content';
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
  const successStoriesList = sortContentByDate(successStories as unknown as ContentItem[]);
  const blogPostsList = sortContentByDate(blogPosts as unknown as ContentItem[]);
  
  // Combine with success stories first, then blog posts
  const allContent = [...successStoriesList, ...blogPostsList];

  // Generate structured data for the blog page
  const jsonLd = generateStructuredData(pageData);

  // Update the type and description for a blog page rather than an article
  jsonLd['@type'] = 'Blog';
  (jsonLd as any).description = 'Digital marketing insights, case studies, and success stories';

  // Add BlogPosting items to the structured data
  const blogPostingsLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": allContent.slice(0, 10).map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "url": `https://ai-vertise.com/blog/${post.id}`
      }
    }))
  };
  
  // Extract all categories
  const categories = Array.from(new Set([
    ...blogPosts.map(post => post.category),
    ...successStories.map(story => story.category)
  ]));
  
  // Extract and count all tags
  const tagCounts: Record<string, number> = {};
  blogPosts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        if (tagCounts[tag]) {
          tagCounts[tag]++;
        } else {
          tagCounts[tag] = 1;
        }
      });
    }
  });
  
  // Sort tags by count (most used first)
  const sortedTags = Object.entries(tagCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 20); // Limit to top 20 tags

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      
      <Script id="blog-postings-data" type="application/ld+json">
        {JSON.stringify(blogPostingsLd)}
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
                <h2 id="cta-heading" className="text-2xl font-bold mb-4">Ready to Boost Your Marketing?</h2>
                <p className="text-gray-700 mb-6">
                  Join hundreds of businesses that have transformed their digital marketing performance with AI-Vertise Boost.
                </p>
                <Link 
                  href="https://go.ai-vertise.com/register" 
                  className="bg-gradient-to-r from-primary-purple to-primary-pink text-white px-8 py-3 rounded-lg inline-block font-medium hover:shadow-lg transition-all"
                  aria-label="Sign up for AI-powered advertising services"
                >
                  Start your AI advertising campaign
                </Link>
              </div>
            </div>
          </section>
          
          {/* Categories Section - Now smaller and after CTA */}
          <section className="mb-10 mt-16" aria-labelledby="categories-heading">
            <h3 id="categories-heading" className="text-xl font-bold mb-3">Browse by Category</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-primary-pink mb-6" aria-hidden="true"></div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => {
                const categorySlug = category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                return (
                  <Link
                    key={categorySlug}
                    href={`/blog/category/${categorySlug}`}
                    className="bg-gradient-to-r from-primary-purple/5 to-primary-pink/5 hover:from-primary-purple/10 hover:to-primary-pink/10 text-gray-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  >
                    {category}
                  </Link>
                );
              })}
            </div>
          </section>
          
          {/* Popular Tags Section - Now smaller and after Categories */}
          <section className="mb-12" aria-labelledby="tags-heading">
            <h3 id="tags-heading" className="text-xl font-bold mb-3">Popular Topics</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-primary-pink mb-6" aria-hidden="true"></div>
            <div className="flex flex-wrap gap-2">
              {sortedTags.map(([tag, count]) => {
                const tagSlug = tag.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                return (
                  <Link
                    key={tagSlug}
                    href={`/blog/tag/${tagSlug}`}
                    className="bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs transition-colors"
                  >
                    {tag} ({count})
                  </Link>
                );
              })}
            </div>
          </section>
        </main>
      </SuppressHydrationWarning>
    </>
  );
} 
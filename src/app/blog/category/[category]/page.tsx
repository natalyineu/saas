import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog/posts';
import { successStories } from '@/data/blog/index';
import { generateMetadata as genMeta } from '@/lib/utils/metadata';
import UnifiedBlogList from '@/components/blog/UnifiedBlogList';
import Script from 'next/script';
import { ContentItem, sortContentByDate } from '@/lib/types/content';

// Generate metadata dynamically based on the category
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  // Convert kebab-case to regular text for display
  const category = decodeURIComponent(params.category);
  const displayCategory = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const pageData = {
    title: `${displayCategory} - Digital Marketing Articles and Insights`,
    excerpt: `Browse our collection of ${displayCategory} articles, case studies, and resources. Learn about strategies, tips, and best practices for your digital marketing.`,
    id: `blog-category-${category}`,
    category: 'Blog'
  };

  return genMeta(pageData);
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Decode the category from the URL
  const category = decodeURIComponent(params.category);
  
  // Convert kebab-case to display format
  const displayCategory = category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Filter blog posts by the specified category
  const filteredBlogPosts = blogPosts.filter(post => {
    const postCategory = post.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    return postCategory === category.toLowerCase();
  }) as ContentItem[];
  
  // Filter success stories by the specified category
  const filteredSuccessStories = successStories.filter(story => {
    const storyCategory = story.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    return storyCategory === category.toLowerCase();
  }) as ContentItem[];
  
  // Combine and sort filtered content
  const filteredContent = sortContentByDate([...filteredSuccessStories, ...filteredBlogPosts]);

  // JSON-LD structured data for the category page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": `${displayCategory} - Digital Marketing Articles and Insights`,
    "description": `Browse our collection of ${displayCategory} articles, case studies, and resources.`,
    "url": `https://ai-vertise.com/blog/category/${category}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "AI-Vertise",
      "url": "https://ai-vertise.com"
    }
  };

  return (
    <>
      <Script id="category-structured-data" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Category Header */}
        <div className="text-center mb-16">
          <Link 
            href="/blog" 
            className="text-primary-purple hover:text-primary-pink mb-4 inline-flex items-center transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Articles
          </Link>
          <div className="bg-gradient-to-r from-primary-purple/10 to-primary-pink/10 py-6 px-4 rounded-lg inline-block mb-4">
            <span className="text-sm font-medium text-primary-purple">Category</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {displayCategory}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-purple to-primary-pink mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {filteredContent.length > 0 
              ? `Explore our ${displayCategory} articles and resources to enhance your digital marketing strategy.`
              : `No articles found in the ${displayCategory} category. Check out our other content.`}
          </p>
        </div>
        
        {/* Content */}
        {filteredContent.length > 0 ? (
          <section aria-labelledby="articles-heading">
            <h2 id="articles-heading" className="sr-only">Articles in {displayCategory} category</h2>
            <UnifiedBlogList 
              content={filteredContent} 
              initialCount={9} 
              loadMoreIncrement={6} 
            />
          </section>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-xl mx-auto bg-gray-50 rounded-xl p-8">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 text-gray-400 mx-auto mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">No Content Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any articles in the "{displayCategory}" category.
                This category may be new or there might be a typo in the URL.
              </p>
              <Link 
                href="/blog" 
                className="bg-gradient-to-r from-primary-purple to-primary-pink text-white px-5 py-2 rounded-lg inline-block font-medium hover:shadow-lg transition-all"
              >
                Browse All Articles
              </Link>
            </div>
          </div>
        )}
        
        {/* Other Categories Section */}
        <section className="mt-20" aria-labelledby="other-categories-heading">
          <h2 id="other-categories-heading" className="text-2xl font-bold mb-6">Browse Other Categories</h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set([
              ...blogPosts.map(post => post.category),
              ...successStories.map(story => story.category)
            ]))
              .filter(cat => cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') !== category.toLowerCase())
              .map(otherCategory => {
                const categorySlug = otherCategory.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                return (
                  <Link
                    key={categorySlug}
                    href={`/blog/category/${categorySlug}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    {otherCategory}
                  </Link>
                );
              })
            }
          </div>
        </section>
      </main>
    </>
  );
} 
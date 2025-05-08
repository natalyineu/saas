import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog/posts';
import { successStories } from '@/data/blog/index';
import { generateMetadata as genMeta } from '@/lib/utils/metadata';
import UnifiedBlogList from '@/components/blog/UnifiedBlogList';
import Script from 'next/script';
import { ContentItem, sortContentByDate } from '@/lib/types/content';

// Type definition for blog content that includes tags
interface ContentWithTags {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt?: string;
  author?: string;
  readTime?: string;
  tags?: string[];
  [key: string]: any; // Allow for other properties
}

// Generate metadata dynamically based on the tag
export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  // Convert kebab-case to regular text for display
  const tag = decodeURIComponent(params.tag);
  const displayTag = tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const pageData = {
    title: `${displayTag} - Blog Posts and Resources`,
    excerpt: `Explore our collection of digital marketing articles and resources about ${displayTag}. Learn about strategies, tips, and best practices.`,
    id: `blog-tag-${tag}`,
    category: 'Blog'
  };

  return genMeta(pageData);
}

export default function TagPage({ params }: { params: { tag: string } }) {
  // Decode the tag from the URL
  const tag = decodeURIComponent(params.tag);
  
  // Convert kebab-case to display format
  const displayTag = tag.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Filter blog posts that have the specified tag
  const filteredBlogPosts = blogPosts.filter(post => {
    if (!post.tags) return false;
    
    // Convert all tags to kebab-case for comparison
    const postTags = post.tags.map((t: string) => 
      t.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
    );
    
    return postTags.includes(tag.toLowerCase());
  }) as unknown as ContentItem[];
  
  // Success stories typically don't have tags, but if they do, filter them
  const filteredSuccessStories = successStories.filter(story => {
    // Skip if no tags property exists
    if (!('tags' in story)) return false;
    
    const storyTags = (story as ContentWithTags).tags;
    if (!storyTags) return false;
    
    // Convert all tags to kebab-case for comparison
    const formattedTags = storyTags.map((t: string) => 
      t.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
    );
    
    return formattedTags.includes(tag.toLowerCase());
  }) as unknown as ContentItem[];
  
  // Combine filtered content
  const filteredContent = sortContentByDate([...filteredSuccessStories, ...filteredBlogPosts]);

  // JSON-LD structured data for this tag page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": `${displayTag} - Blog Posts and Resources`,
    "description": `Explore our collection of digital marketing articles and resources about ${displayTag}`,
    "url": `https://ai-vertise.com/blog/tag/${tag}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "AI-Vertise",
      "url": "https://ai-vertise.com"
    }
  };

  return (
    <>
      <Script id="tag-structured-data" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Tag Header */}
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {displayTag}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-purple to-primary-pink mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {filteredContent.length > 0 
              ? `Explore our articles and resources about ${displayTag}`
              : `No articles found for ${displayTag}. Check out our other topics.`}
          </p>
        </div>
        
        {/* Content */}
        {filteredContent.length > 0 ? (
          <section aria-labelledby="articles-heading">
            <h2 id="articles-heading" className="sr-only">Articles with tag {displayTag}</h2>
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
                We couldn't find any content with the tag "{displayTag}".
                This tag may be new or there might be a typo in the URL.
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
        
        {/* Related Tags Section */}
        <section className="mt-20" aria-labelledby="related-tags-heading">
          <h2 id="related-tags-heading" className="text-2xl font-bold mb-6">Browse Other Topics</h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(
              blogPosts
                .flatMap(post => post.tags || [])
                .filter(otherTag => otherTag.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') !== tag.toLowerCase())
                .slice(0, 15)
            )).map(otherTag => {
              const tagSlug = otherTag.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
              return (
                <Link
                  key={tagSlug}
                  href={`/blog/tag/${tagSlug}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
                >
                  {otherTag}
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
} 
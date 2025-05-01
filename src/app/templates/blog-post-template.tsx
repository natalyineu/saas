import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

// Import using absolute paths
import Footer from '@/components/Footer';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Blog Post Title | AI-Vertise Boost',
  description: 'Description of the blog post that will appear in search results and social shares.',
  openGraph: {
    title: 'Blog Post Title | AI-Vertise Boost',
    description: 'Description of the blog post that will appear when shared on social media.',
    images: [
      {
        url: '/images/blog/post-featured-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog post featured image',
      }
    ],
  },
};

// Blog post props interface
interface BlogPostData {
  title: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

// Example data - this would typically come from a CMS or data source
const postData: BlogPostData = {
  title: 'Blog Post Title',
  date: 'January 1, 2023',
  author: 'Author Name',
  readTime: '5 min read',
  tags: ['AI', 'Digital Marketing', 'Advertising'],
};

export default function BlogPost() {
  const { title, date, author, readTime, tags } = postData;
  
  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto prose lg:prose-lg">
          <Link href="/blog" className="text-primary-purple hover:underline flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{date}</span>
              <span className="mx-2">•</span>
              <span>{author}</span>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </header>
          
          {/* Blog post introduction */}
          <p className="lead">
            Introduction paragraph that summarizes the blog post and hooks the reader.
          </p>
          
          {/* Blog post content sections */}
          <h2>First Section Heading</h2>
          <p>
            Content for the first section. Add paragraphs, lists, images, etc.
          </p>
          
          <h2>Second Section Heading</h2>
          <p>
            Content for the second section.
          </p>
          <ul>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
          </ul>
          
          {/* Add more sections as needed */}
          
          <h2>Conclusion</h2>
          <p>
            Wrap up the blog post with key takeaways and possibly a call to action.
          </p>
          
          {/* Author section */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              </div>
              <div>
                <h3 className="font-medium">{author}</h3>
                <p className="text-gray-600 text-sm">
                  Author bio goes here. A brief description of the author and their expertise.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related posts could go here */}
          
          {/* Back to blog link */}
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
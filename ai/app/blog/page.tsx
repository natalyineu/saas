import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  const blogPosts = [
    {
      id: 'effective-facebook-ads',
      title: '5 Keys to More Effective Facebook Advertising in 2023',
      date: 'April 10, 2023',
      excerpt: 'Learn the latest strategies for maximizing your ROI on Facebook ads with our expert tips and insights.',
      author: 'Marketing Team',
      readTime: '7 min read'
    },
    {
      id: 'ai-in-digital-advertising',
      title: 'How AI is Transforming Digital Advertising for Small Businesses',
      date: 'March 25, 2023',
      excerpt: 'Discover how artificial intelligence is leveling the playing field and helping small businesses compete with larger competitors in digital advertising.',
      author: 'Tech Team',
      readTime: '8 min read'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 mb-12">
            Insights, strategies, and tips to improve your advertising campaigns.
          </p>

          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 pb-10">
                <Link href={`/blog/${post.id}`}>
                  <div className="group cursor-pointer">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-purple transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center text-primary-purple font-medium group-hover:underline">
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
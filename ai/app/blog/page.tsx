import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  // Success story case studies matching our carousel
  const successStories = [
    {
      id: 'urban-beans-case-study',
      title: 'Coffee Shop Campaign: How Urban Beans Increased Foot Traffic by 143%',
      date: 'April 15, 2023',
      excerpt: 'Urban Beans used AI-Vertise Boost to target local coffee enthusiasts and saw a dramatic increase in new customers within the first month.',
      author: 'Marketing Team',
      readTime: '5 min read',
      category: 'CASE STUDY'
    },
    {
      id: 'taste-of-italy-case-study',
      title: 'Local Restaurant Promotion: Taste of Italy Boosts Weekend Reservations by 87%',
      date: 'April 2, 2023',
      excerpt: 'Taste of Italy restaurant leveraged our platform to promote their weekend specials, resulting in fully booked weekends.',
      author: 'Marketing Team',
      readTime: '6 min read',
      category: 'CASE STUDY'
    },
    {
      id: 'chic-trends-case-study',
      title: 'Online Boutique Launch: Chic Trends Achieves 215% Return on Ad Spend',
      date: 'March 28, 2023',
      excerpt: 'Chic Trends online boutique used our AI targeting to find fashion-forward customers, achieving impressive sales from day one.',
      author: 'Marketing Team',
      readTime: '7 min read',
      category: 'CASE STUDY'
    }
  ];

  // Regular blog posts
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
          <h1 className="text-4xl font-bold mb-4">Blog & Success Stories</h1>
          <p className="text-gray-600 mb-12">
            Explore our case studies, insights, and strategies to improve your advertising campaigns.
          </p>

          {/* Featured Case Studies section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-primary-purple">Featured Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story) => (
                <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-primary-purple to-primary-pink"></div>
                  <div className="p-6">
                    <span className="inline-block bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs px-2 py-1 rounded-full mb-3">
                      {story.category}
                    </span>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-primary-purple transition-colors">
                      {story.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-xs mb-3">
                      <span>{story.date}</span>
                      <span className="mx-2">•</span>
                      <span>{story.readTime}</span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {story.excerpt}
                    </p>
                    <Link href={`/blog/${story.id}`} className="inline-flex items-center text-primary-purple font-medium text-sm hover:underline">
                      Read full case study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regular Blog Posts */}
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
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
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
      category: 'CASE STUDY',
      icon: (
        <div className="h-48 relative overflow-hidden rounded-t-lg">
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-500">
            <div className="relative w-32 h-32 transform transition-transform duration-500 group-hover:scale-110">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
                  <rect x="35" y="25" width="30" height="10" rx="5" fill="rgba(252,70,107,1)" />
                  <path d="M30 60 L70 60" stroke="rgba(63,94,251,1)" strokeWidth="3" />
                  <path d="M40 50 C40 40, 60 40, 60 50" stroke="rgba(63,94,251,1)" strokeWidth="3" fill="none" />
                  <path d="M30 70 L40 60 L60 60 L70 70" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
                </g>
              </svg>
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full transform shadow-lg">
                +143%
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'taste-of-italy-case-study',
      title: 'Local Restaurant Promotion: Taste of Italy Boosts Weekend Reservations by 87%',
      date: 'April 2, 2023',
      excerpt: 'Taste of Italy restaurant leveraged our platform to promote their weekend specials, resulting in fully booked weekends.',
      author: 'Marketing Team',
      readTime: '6 min read',
      category: 'CASE STUDY',
      icon: (
        <div className="h-48 relative overflow-hidden rounded-t-lg">
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-500">
            <div className="relative w-32 h-32 transform transition-transform duration-500 group-hover:scale-110">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background circle */}
                <circle cx="50" cy="50" r="40" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
                
                {/* Restaurant plate */}
                <circle cx="50" cy="50" r="30" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" className="transform transition-transform duration-500 group-hover:scale-105" />
                
                {/* Fork and knife */}
                <path d="M35 30 L35 70" stroke="rgba(252,70,107,1)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M40 30 C40 40, 38 50, 40 70" stroke="rgba(252,70,107,1)" strokeWidth="2.5" strokeLinecap="round" />
                
                <path d="M65 30 L65 40 C65 45, 60 50, 65 55 L65 70" stroke="rgba(63,94,251,1)" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Food on plate */}
                <circle cx="50" cy="50" r="12" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow" />
                <path d="M44 48 C47 44, 53 44, 56 48" stroke="rgba(63,94,251,1)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M44 52 C47 56, 53 56, 56 52" stroke="rgba(63,94,251,1)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full transform shadow-lg">
                +87%
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'chic-trends-case-study',
      title: 'Online Boutique Launch: Chic Trends Achieves 215% Return on Ad Spend',
      date: 'March 28, 2023',
      excerpt: 'Chic Trends online boutique used our AI targeting to find fashion-forward customers, achieving impressive sales from day one.',
      author: 'Marketing Team',
      readTime: '7 min read',
      category: 'CASE STUDY',
      icon: (
        <div className="h-48 relative overflow-hidden rounded-t-lg">
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-red-50 group-hover:from-pink-100 group-hover:to-red-100 transition-all duration-500">
            <div className="relative w-32 h-32 transform transition-transform duration-500 group-hover:scale-110">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="transform transition-transform duration-500 group-hover:scale-105" x="25" y="30" width="50" height="40" rx="4" fill="rgba(252,70,107,0.8)" />
                <rect className="transform origin-top transition-transform duration-500 group-hover:scale-y-105" x="30" y="35" width="40" height="30" rx="2" fill="white" />
                <rect className="transition-colors duration-500 group-hover:fill-purple-600" x="30" y="35" width="40" height="7" rx="1" fill="rgba(63,94,251,1)" />
                <rect className="animate-pulse-slow" x="33" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
                <rect className="animate-pulse-slow" x="45" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
                <rect className="animate-pulse-slow" x="57" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
                <text className="animate-pulse-slow" x="80" y="40" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
                <text className="animate-pulse-slow" x="20" y="40" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
                <text className="animate-pulse-slow" x="80" y="60" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
                <text className="animate-pulse-slow" x="20" y="60" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10B981">$</text>
              </svg>
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full transform shadow-lg">
                +215%
              </div>
            </div>
          </div>
        </div>
      )
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
                <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
                  {story.icon}
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
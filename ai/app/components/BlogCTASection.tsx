import Link from 'next/link';

export default function BlogCTASection() {
  return (
    <section id="blog-cta" className="py-16 bg-soft-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 md:p-12">
              <h2 className="text-2xl md:text-4xl mb-4">Want more real-world insights?</h2>
              <p className="text-gray-600 mb-6">
                Explore more detailed case studies from the same businesses that achieved exceptional results with AI-Vertise Boost.
              </p>
              <ul className="mb-6 md:mb-8 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-purple mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>In-depth success stories</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-purple mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Step-by-step implementation guides</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-purple mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Actionable advertising strategies</span>
                </li>
              </ul>
              <Link 
                href="https://ai-vertise.com/blog" 
                className="btn-primary inline-block"
              >
                Visit Our Blog
              </Link>
            </div>
            <div className="md:w-1/2 relative bg-white/50 pb-16 md:pb-0">
              <div className="h-auto md:h-full flex items-center justify-center p-6 md:p-8">
                <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                  {/* Blog post card 1 - Coffee Shop */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-16 md:h-24 bg-primary-purple"></div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-xs md:text-sm font-bold mb-1 line-clamp-2">Urban Beans Success Story</h3>
                      <p className="text-xs text-gray-500 line-clamp-2 text-[10px] md:text-xs">How AI targeting led to a 143% increase in foot traffic.</p>
                      <div className="mt-2">
                        <span className="inline-block bg-gradient-to-r from-primary-purple to-primary-pink text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full">COFFEE SHOP</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Blog post card 2 - Restaurant */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-16 md:h-24 bg-primary-pink"></div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-xs md:text-sm font-bold mb-1 line-clamp-2">Taste of Italy Case Study</h3>
                      <p className="text-xs text-gray-500 line-clamp-2 text-[10px] md:text-xs">How AI boosted weekend reservations by 87%.</p>
                      <div className="mt-2">
                        <span className="inline-block bg-gradient-to-r from-primary-purple to-primary-pink text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full">RESTAURANT</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-0 left-0 flex justify-center">
                  <Link 
                    href="https://ai-vertise.com/blog"
                    className="bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full"
                  >
                    VIEW ALL SUCCESS STORIES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Extra padding at the bottom for mobile to prevent overlap with floating buttons */}
        <div className="h-12 md:h-0 block sm:hidden"></div>
      </div>
    </section>
  );
} 
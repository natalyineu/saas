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
                href="/blog" 
                className="btn-primary inline-block"
              >
                Visit Our Blog
              </Link>
            </div>
            <div className="md:w-1/2 relative bg-white/50 pb-16 md:pb-0">
              <div className="h-auto md:h-full flex items-center justify-center p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-md">
                  {/* Blog post card 1 - Coffee Shop */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="h-16 md:h-24 bg-gradient-to-br from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100 flex items-center justify-center relative">
                      <div className="w-12 h-12">
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle className="animate-pulse-slow" cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                          <g className="transform transition-transform duration-700 origin-center group-hover:rotate-12">
                            <rect x="35" y="25" width="30" height="10" rx="5" fill="rgba(252,70,107,1)" />
                            <path d="M30 60 L70 60" stroke="rgba(63,94,251,1)" strokeWidth="3" />
                            <path d="M40 50 C40 40, 60 40, 60 50" stroke="rgba(63,94,251,1)" strokeWidth="3" fill="none" />
                            <path d="M30 70 L40 60 L60 60 L70 70" stroke="rgba(63,94,251,1)" strokeWidth="2" fill="none" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute top-1 right-1 bg-green-500 text-white text-[8px] font-medium px-1.5 py-0.5 rounded-full">
                        +143%
                      </div>
                    </div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-xs md:text-sm font-bold mb-1 line-clamp-2">Coffee Shop Campaign</h3>
                      <p className="text-xs text-gray-500 line-clamp-2 text-[10px] md:text-xs">Urban Beans achieved 143% increase in foot traffic.</p>
                      <div className="mt-2">
                        <span className="inline-block bg-gradient-to-r from-primary-purple to-primary-pink text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full">CASE STUDY</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Blog post card 2 - Restaurant */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="h-16 md:h-24 bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 flex items-center justify-center relative">
                      <div className="w-12 h-12">
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Background circle */}
                          <circle cx="50" cy="50" r="35" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
                          
                          {/* Restaurant plate */}
                          <circle cx="50" cy="50" r="25" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" />
                          
                          {/* Fork and knife */}
                          <path d="M35 35 L35 65" stroke="rgba(252,70,107,1)" strokeWidth="2" strokeLinecap="round" />
                          <path d="M40 35 C40 45, 38 50, 40 65" stroke="rgba(252,70,107,1)" strokeWidth="2" strokeLinecap="round" />
                          
                          <path d="M65 35 L65 42 C65 45, 60 50, 65 55 L65 65" stroke="rgba(63,94,251,1)" strokeWidth="2" strokeLinecap="round" />
                          
                          {/* Food on plate */}
                          <circle cx="50" cy="50" r="10" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow" />
                        </svg>
                      </div>
                      <div className="absolute top-1 right-1 bg-green-500 text-white text-[8px] font-medium px-1.5 py-0.5 rounded-full">
                        +87%
                      </div>
                    </div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-xs md:text-sm font-bold mb-1 line-clamp-2">Local Restaurant Promotion</h3>
                      <p className="text-xs text-gray-500 line-clamp-2 text-[10px] md:text-xs">Taste of Italy saw 87% boost in weekend reservations.</p>
                      <div className="mt-2">
                        <span className="inline-block bg-gradient-to-r from-primary-purple to-primary-pink text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full">CASE STUDY</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Blog post card 3 - Online Boutique */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="h-16 md:h-24 bg-gradient-to-br from-pink-50 to-red-50 group-hover:from-pink-100 group-hover:to-red-100 flex items-center justify-center relative">
                      <div className="w-12 h-12">
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect className="transform transition-transform duration-500 group-hover:scale-105" x="25" y="30" width="50" height="40" rx="4" fill="rgba(252,70,107,0.8)" />
                          <rect className="transform origin-top transition-transform duration-500 group-hover:scale-y-105" x="30" y="35" width="40" height="30" rx="2" fill="white" />
                          <rect className="transition-colors duration-500 group-hover:fill-purple-600" x="30" y="35" width="40" height="7" rx="1" fill="rgba(63,94,251,1)" />
                          <rect className="animate-pulse-slow" x="33" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
                          <rect className="animate-pulse-slow" x="45" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
                          <rect className="animate-pulse-slow" x="57" y="46" width="10" height="15" rx="1" fill="rgba(63,94,251,0.1)" />
                          <text className="animate-pulse-slow" x="80" y="40" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#10B981">$</text>
                          <text className="animate-pulse-slow" x="20" y="40" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#10B981">$</text>
                        </svg>
                      </div>
                      <div className="absolute top-1 right-1 bg-green-500 text-white text-[8px] font-medium px-1.5 py-0.5 rounded-full">
                        +215%
                      </div>
                    </div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-xs md:text-sm font-bold mb-1 line-clamp-2">Online Boutique Launch</h3>
                      <p className="text-xs text-gray-500 line-clamp-2 text-[10px] md:text-xs">Chic Trends achieved 215% return on ad spend.</p>
                      <div className="mt-2">
                        <span className="inline-block bg-gradient-to-r from-primary-purple to-primary-pink text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full">CASE STUDY</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-0 left-0 flex justify-center">
                  <Link 
                    href="/blog"
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
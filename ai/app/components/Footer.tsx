import Link from 'next/link';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE } from '../lib/utils/constants';
import BuyMeCoffeeButton from './BuyMeCoffeeButton';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 md:py-16 relative overflow-hidden">
      {/* Abstract SVG background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="footer-pattern" patternUnits="userSpaceOnUse" width="80" height="80" patternTransform="rotate(45)">
              <circle cx="10" cy="10" r="1.5" fill="white" />
              <circle cx="40" cy="40" r="2" fill="white" />
              <circle cx="70" cy="10" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>
      
      {/* Glowing orb decoration - hidden on smallest screens */}
      <div className="absolute -top-20 -right-20 w-40 md:w-64 h-40 md:h-64 rounded-full bg-gradient-to-r from-primary-purple/20 to-primary-pink/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 md:w-64 h-40 md:h-64 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company info section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative text-white">
              <span className="gradient-text">AI-Vertise Boost</span>
              <div className="w-12 h-1 bg-gradient-to-r from-primary-purple to-primary-pink mt-2"></div>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              AI-powered advertising for small and medium businesses. Smart targeting, fast launch, and budget optimization.
            </p>
            <div className="mb-8 md:mb-0">
              <BuyMeCoffeeButton />
            </div>
          </div>
          
          {/* Quick Links section */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center relative text-white">
              <svg className="mr-2 h-4 w-4 md:h-5 md:w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quick Links
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink absolute -bottom-2 left-0"></div>
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/#features" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <svg className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <svg className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <svg className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <svg className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources section */}
          <div className="mt-6 sm:mt-0">
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center relative text-white">
              <svg className="mr-2 h-4 w-4 md:h-5 md:w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Resources
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink absolute -bottom-2 left-0"></div>
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="https://ai-vertise.com/blog" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <svg className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <svg className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <svg className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="https://buymeacoffee.com/aivertise/membership" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base">
                  <svg className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
                  </svg>
                  Buy Me A Coffee
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact section */}
          <div className="mt-6 md:mt-0">
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center relative text-white">
              <svg className="mr-2 h-4 w-4 md:h-5 md:w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink absolute -bottom-2 left-0"></div>
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-purple mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-gray-300 hover:text-white transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-purple mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                  {COMPANY_PHONE}
                </a>
              </li>
              <li className="mt-4">
                <div className="flex space-x-3">
                  <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors touch-action-manipulation">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors touch-action-manipulation">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors touch-action-manipulation">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors touch-action-manipulation">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">© {new Date().getFullYear()} AI-Vertise Boost. All rights reserved.</p>
          <div className="flex flex-wrap justify-center mt-4 space-x-4 md:space-x-6 text-xs md:text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors mb-2">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors mb-2">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors mb-2">Cookie Policy</a>
          </div>
        </div>
        
        {/* Extra padding div for mobile to prevent button overlap */}
        <div className="h-16 sm:h-0 block sm:hidden"></div>
      </div>
    </footer>
  );
}
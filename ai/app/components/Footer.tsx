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
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base">
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
                  <a href="https://www.linkedin.com/company/aivertise" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors touch-action-manipulation" aria-label="LinkedIn">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://t.me/aivertise" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors touch-action-manipulation" aria-label="Telegram">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
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
            <Link href="/policy" className="hover:text-white transition-colors mb-2">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors mb-2">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors mb-2">Cookie Policy</Link>
          </div>
        </div>
        
        {/* Extra padding div for mobile to prevent button overlap */}
        <div className="h-16 sm:h-0 block sm:hidden"></div>
      </div>
    </footer>
  );
}
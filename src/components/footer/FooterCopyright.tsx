import React from 'react';
import Link from 'next/link';

export default function FooterCopyright() {
  return (
    <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
      <p className="text-gray-400 text-xs md:text-sm">© {new Date().getFullYear()} AI-Vertise Ads. All rights reserved.</p>
      <div className="flex flex-wrap justify-center mt-4 space-x-4 md:space-x-6 text-xs md:text-sm text-gray-300">
        <Link href="/policy" className="hover:text-white transition-colors mb-2">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-white transition-colors mb-2">Terms of Service</Link>
        <Link href="/cookie-policy" className="hover:text-white transition-colors mb-2">Cookie Policy</Link>
      </div>
    </div>
  );
} 
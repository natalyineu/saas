import React from 'react';
import FooterBackground from './FooterBackground';
import FooterCompanyInfo from './FooterCompanyInfo';
import FooterNavigation from './FooterNavigation';
import FooterContact from './FooterContact';
import FooterCopyright from './FooterCopyright';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 md:py-16 relative overflow-hidden">
      <FooterBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company info section */}
          <FooterCompanyInfo />
          
          {/* Navigation sections */}
          <FooterNavigation />
          
          {/* Contact section */}
          <FooterContact />
        </div>
        
        <FooterCopyright />
        
        {/* Extra padding div for mobile to prevent button overlap */}
        <div className="h-16 sm:h-0 block sm:hidden"></div>
      </div>
    </footer>
  );
} 
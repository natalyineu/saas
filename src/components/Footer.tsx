import React from 'react';
import FooterBackground from './footer/FooterBackground';
import FooterCompanyInfo from './footer/FooterCompanyInfo';
import FooterNavigation from './footer/FooterNavigation';
import FooterContact from './footer/FooterContact';
import FooterCopyright from './footer/FooterCopyright';

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
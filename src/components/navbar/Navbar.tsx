'use client';

import { useState, useEffect } from 'react';
import NavLogo from './NavLogo';
import DesktopMenu from './DesktopMenu';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Track scroll position to add drop shadow after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`w-full py-3 md:py-4 sticky top-0 bg-white/60 bg-soft-gradient backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'} rounded-b-xl`}>
      <div className="container mx-auto px-3 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLogo />
        
        {/* Desktop Menu */}
        <DesktopMenu />
        
        {/* Mobile Menu Button */}
        <MobileMenuButton 
          isOpen={isMenuOpen} 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </nav>
  );
} 
import Link from 'next/link';
import { DASHBOARD_URL } from '../../lib/utils/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mobileNavLinks = [
  { 
    href: '#features', 
    label: 'Features',
    icon: (
      <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    )
  },
  { 
    href: '#pricing', 
    label: 'Pricing',
    icon: (
      <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  { 
    href: '#how-it-works', 
    label: 'How It Works',
    icon: (
      <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  { 
    href: '#case-studies', 
    label: 'Case Studies',
    icon: (
      <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    )
  },
  { 
    href: '/blog', 
    label: 'Blog',
    icon: (
      <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
      </svg>
    )
  }
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-soft-gradient/80 backdrop-blur-md shadow-lg animate-fade-in-down rounded-b-xl mt-0.5">
      <div className="flex flex-col py-4 px-5 gap-2">
        {mobileNavLinks.map((link, index) => {
          const isLast = index === mobileNavLinks.length - 1;
          
          return (
            <Link 
              key={link.href}
              href={link.href} 
              className={`text-gray-700 hover:text-primary-purple transition-colors py-2.5 font-medium flex items-center ${!isLast ? 'border-b border-gray-200/30' : ''}`}
              onClick={onClose}
            >
              {link.icon}
              {link.label}
            </Link>
          );
        })}
        <Link
          href={DASHBOARD_URL}
          className="mt-2 flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-primary-purple hover:bg-primary-purple/90 rounded-lg transition-colors"
          onClick={onClose}
        >
          Log In
        </Link>
      </div>
    </div>
  );
} 
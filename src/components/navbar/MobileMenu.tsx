import Link from 'next/link';
import { DASHBOARD_URL } from '@/lib/utils/constants';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  
  const mobileNavLinks = [
    { 
      href: isHomepage ? '#features' : '/#features', 
      label: 'Features',
      icon: (
        <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    { 
      href: isHomepage ? '#pricing' : '/#pricing', 
      label: 'Pricing',
      icon: (
        <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    { 
      href: isHomepage ? '#how-it-works' : '/#how-it-works', 
      label: 'How It Works',
      icon: (
        <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
    },
    { 
      href: '/contact', 
      label: 'Contact',
      icon: (
        <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    }
  ];

  if (!isOpen) return null;
  
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 h-screen bg-white z-50 overflow-y-auto pt-20 pb-10">
      <div className="absolute top-4 right-4">
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col px-5 gap-4">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">AI-Vertise Boost</h2>
        </div>

        {mobileNavLinks.map((link, index) => {
          return (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-gray-800 hover:text-primary-purple transition-colors py-3 font-medium flex items-center text-lg border-b border-gray-100 last:border-0"
              onClick={onClose}
            >
              {link.icon}
              {link.label}
            </Link>
          );
        })}

        <Link
          href={DASHBOARD_URL}
          className="mt-4 flex items-center justify-center px-4 py-3 font-medium text-white bg-gradient-to-r from-primary-purple to-primary-pink rounded-lg transition-colors"
          onClick={onClose}
        >
          Log In
        </Link>
      </div>
    </div>
  );
} 
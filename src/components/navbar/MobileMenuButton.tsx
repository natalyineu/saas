import Link from 'next/link';
import { DASHBOARD_URL } from '@/lib/utils/constants';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <div className="md:hidden flex items-center">
      <Link 
        href={DASHBOARD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium px-3 py-1.5 bg-gradient-to-r from-primary-purple to-primary-pink text-white rounded-lg mr-3 shadow-sm hover:shadow-md transition-shadow"
      >
        Log In
      </Link>
      
      <button 
        className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={onClick}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>
  );
} 
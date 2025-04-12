import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="text-gray-700 hover:text-primary-purple transition-colors font-medium relative group"
      onClick={onClick}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
} 
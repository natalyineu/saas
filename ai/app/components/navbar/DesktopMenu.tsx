import Link from 'next/link';
import { DASHBOARD_URL } from '../../lib/utils/constants';
import NavLink from './NavLink';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export default function DesktopMenu() {
  return (
    <div className="hidden md:flex items-center gap-8">
      <div className="flex gap-x-8">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </div>
      
      <Link 
        href={DASHBOARD_URL}
        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-md font-medium transition-all shadow-sm hover:shadow-md"
      >
        Log In
      </Link>
    </div>
  );
} 
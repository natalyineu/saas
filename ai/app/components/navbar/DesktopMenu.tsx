import Link from 'next/link';
import { DASHBOARD_URL } from '../../lib/utils/constants';

// Navigation link component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-primary-purple/90 transition-colors px-2.5 sm:px-3 py-2 text-sm font-medium rounded-md hover:bg-primary-purple/5"
    >
      {children}
    </Link>
  );
}

export default function DesktopMenu() {
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div className="hidden md:flex items-center gap-0.5">
      {navLinks.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
      <Link
        href={DASHBOARD_URL}
        className="ml-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-purple hover:bg-primary-purple/90 rounded-lg transition-colors"
      >
        Log In
      </Link>
    </div>
  );
} 
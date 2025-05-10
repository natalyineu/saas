import Link from 'next/link';

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="relative">
        <span className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-primary-purple to-primary-pink group-hover:scale-[1.02] transition-transform">AI-Vertise Ads</span>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink rounded-full opacity-90 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </Link>
  );
} 
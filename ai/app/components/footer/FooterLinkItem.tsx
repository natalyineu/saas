import React, { ReactNode } from 'react';
import Link from 'next/link';

interface FooterLinkItemProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  isExternal?: boolean;
}

export default function FooterLinkItem({ href, children, icon, isExternal = false }: FooterLinkItemProps) {
  const className = "text-gray-300 hover:text-white transition-colors flex items-center text-sm md:text-base";
  
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );
  
  if (isExternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
} 
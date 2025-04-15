import React, { ReactNode } from 'react';
import FooterHeading from './FooterHeading';

interface FooterLinkGroupProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function FooterLinkGroup({ title, icon, children, className = '' }: FooterLinkGroupProps) {
  return (
    <div className={className}>
      <FooterHeading icon={icon}>{title}</FooterHeading>
      <ul className="space-y-2 md:space-y-3">
        {children}
      </ul>
    </div>
  );
} 
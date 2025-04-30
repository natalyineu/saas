'use client';

import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <li>/</li>}
            <li>
              {item.href ? (
                <Link href={item.href} className="hover:text-primary-purple">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 
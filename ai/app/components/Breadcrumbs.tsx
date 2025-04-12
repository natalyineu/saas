"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

type BreadcrumbProps = {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

export default function Breadcrumbs({
  homeElement = 'Home',
  separator = '/',
  containerClasses = 'flex py-4 text-sm',
  listClasses = 'hover:text-primary-purple',
  activeClasses = 'text-primary-purple font-semibold',
  capitalizeLinks = true,
}: BreadcrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);

  return (
    <div className={containerClasses}>
      <ol className="flex flex-wrap items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        <li className={listClasses} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" itemProp="item">
            <span itemProp="name">{homeElement}</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {pathNames.length > 0 && separator && (
          <li className="mx-2">
            <span>{separator}</span>
          </li>
        )}

        {pathNames.map((name, index) => {
          const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathNames.length - 1;
          const displayName = capitalizeLinks 
            ? name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            : name;
          
          return (
            <Fragment key={routeTo}>
              <li
                className={isLast ? activeClasses : listClasses}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  <span itemProp="name">{displayName}</span>
                ) : (
                  <Link href={routeTo} itemProp="item">
                    <span itemProp="name">{displayName}</span>
                  </Link>
                )}
                <meta itemProp="position" content={`${index + 2}`} />
              </li>
              {!isLast && (
                <li className="mx-2">
                  <span>{separator}</span>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
} 
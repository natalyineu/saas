import React from 'react';
import FooterLinkGroup from './FooterLinkGroup';
import FooterLinkItem from './FooterLinkItem';

export function QuickLinks() {
  return (
    <FooterLinkGroup
      title="Quick Links"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
    >
      <li>
        <FooterLinkItem 
          href="/#features"
          icon={
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          }
        >
          Features
        </FooterLinkItem>
      </li>
      <li>
        <FooterLinkItem 
          href="/#pricing"
          icon={
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          }
        >
          Pricing
        </FooterLinkItem>
      </li>
      <li>
        <FooterLinkItem 
          href="/#how-it-works"
          icon={
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          }
        >
          How It Works
        </FooterLinkItem>
      </li>
      <li>
        <FooterLinkItem 
          href="/#cost-comparison"
          icon={
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          }
        >
          Cost Comparison
        </FooterLinkItem>
      </li>
      <li>
        <FooterLinkItem 
          href="/#case-studies"
          icon={
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          }
        >
          Success Stories
        </FooterLinkItem>
      </li>
    </FooterLinkGroup>
  );
}

export function Resources() {
  return (
    <FooterLinkGroup
      title="Resources"
      className="mt-6 sm:mt-0"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      }
    >
      <li>
        <FooterLinkItem 
          href="/blog"
          icon={
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          }
        >
          Blog
        </FooterLinkItem>
      </li>
      <li>
        <FooterLinkItem 
          href="/about"
          icon={
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        >
          About
        </FooterLinkItem>
      </li>
      <li>
        <FooterLinkItem 
          href="/faq"
          icon={
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        >
          FAQ
        </FooterLinkItem>
      </li>
      <li>
        <FooterLinkItem 
          href="/policy"
          icon={
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          }
        >
          Privacy Policy
        </FooterLinkItem>
      </li>
      <li>
        <FooterLinkItem 
          href="https://buymeacoffee.com/aivertise/membership"
          isExternal
          icon={
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-purple/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
            </svg>
          }
        >
          Buy Me A Coffee
        </FooterLinkItem>
      </li>
    </FooterLinkGroup>
  );
}

export default function FooterNavigation() {
  return (
    <>
      <QuickLinks />
      <Resources />
    </>
  );
} 
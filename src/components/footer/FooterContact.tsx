import React from 'react';
import { COMPANY_EMAIL, COMPANY_PHONE } from '../../lib/utils/constants';
import FooterHeading from './FooterHeading';
import SocialMediaLinks from './SocialMediaLinks';

export default function FooterContact() {
  return (
    <div className="mt-6 md:mt-0">
      <FooterHeading
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
      >
        Contact
      </FooterHeading>
      <ul className="space-y-3 md:space-y-4">
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-purple mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-gray-300 hover:text-white transition-colors">
            {COMPANY_EMAIL}
          </a>
        </li>
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-purple mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
            {COMPANY_PHONE}
          </a>
        </li>
        <li className="mt-4">
          <SocialMediaLinks />
        </li>
      </ul>
    </div>
  );
} 
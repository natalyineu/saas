import React from 'react';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { COMPANY_NAME, COMPANY_EMAIL } from '@/lib/utils/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | AI-Vertise Boost',
  description: 'Our privacy policy explains how we collect, use, and protect your information when using AI-Vertise Boost, our AI-powered advertising platform.',
  keywords: 'privacy policy, data protection, advertising privacy, personal data, GDPR compliance',
  openGraph: {
    title: 'Privacy Policy | AI-Vertise Boost',
    description: 'Our privacy policy explains how we collect, use, and protect your information when using AI-Vertise Boost, our AI-powered advertising platform.',
    type: 'website',
    url: 'https://ai-vertise.com/policy',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | AI-Vertise Boost',
    description: 'Our privacy policy explains how we collect, use, and protect your information.'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-10">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            {COMPANY_NAME} ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our advertising platform.
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
          </p>
          
          <h2>Collection of Your Information</h2>
          <p>We may collect information about you in a variety of ways including:</p>
          <ul>
            <li><strong>Personal Data:</strong> Voluntarily provided information which may include your name, email address, phone number, billing information, and company details.</li>
            <li><strong>Usage Data:</strong> Information our servers automatically collect when you access our platform, such as your browser type, IP address, operating system, and session data.</li>
            <li><strong>Ad Campaign Data:</strong> Information related to your advertising campaigns, including targeting criteria, creative assets, budget allocations, and performance metrics.</li>
          </ul>
          
          <h2>Use of Your Information</h2>
          <p>We may use the information we collect about you for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process payments and manage your account</li>
            <li>Optimize your advertising campaigns</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Develop new features and services</li>
            <li>Monitor and analyze usage patterns and trends</li>
          </ul>
          
          <h2>Disclosure of Your Information</h2>
          <p>We may share information we have collected about you in certain situations, including:</p>
          <ul>
            <li><strong>With Service Providers:</strong> We may share your information with third-party vendors and service providers that perform services for us or on our behalf.</li>
            <li><strong>With Advertising Platforms:</strong> To run your campaigns, we share necessary data with advertising platforms like Google Ads, Facebook, and other platforms you choose to use.</li>
            <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</li>
            <li><strong>For Legal Purposes:</strong> We may disclose your information where required to comply with applicable law, governmental requests, or legal process.</li>
          </ul>
          
          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee that your information will not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards.
          </p>
          
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information:</p>
          <ul>
            <li>The right to access your personal data</li>
            <li>The right to rectify inaccurate personal data</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to object to processing of your personal data</li>
          </ul>
          <p>
            To exercise these rights, please contact us at {COMPANY_EMAIL}.
          </p>
          
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          <p>
            For more detailed information about the cookies we use, please see our <a href="/cookie-policy" className="text-primary-purple hover:underline">Cookie Policy</a>.
          </p>
          
          <h2>Google Services</h2>
          <p>
            We use various Google services to help us analyze and improve our website and services:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> We use Google Analytics to collect information about how users interact with our website. This information helps us understand user behavior and improve our services. Google Analytics collects information such as your IP address (anonymized where possible), browser type, device type, pages visited, and time spent on pages.</li>
            <li><strong>Google Tag Manager:</strong> We use Google Tag Manager to manage and deploy various tracking tags on our website. Google Tag Manager itself doesn't collect personal data, but it facilitates the collection of data by other tools we use.</li>
            <li><strong>Google Search Console:</strong> We use Google Search Console to monitor and maintain our site's presence in Google Search results. This service helps us understand how Google views our site and identify issues that might affect our visibility in search results.</li>
            <li><strong>Google Ads:</strong> We may use Google Ads to deliver targeted advertisements. This service uses cookies to serve ads based on a user's prior visits to our website or other websites.</li>
          </ul>
          <p>
            Data collected by these Google services is processed in accordance with Google's Privacy Policy. We have configured these services to respect user privacy as much as possible, including the implementation of IP anonymization where available. However, we cannot prevent Google from collecting data as outlined in their own privacy policy.
          </p>
          
          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p>
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary-purple hover:underline">{COMPANY_EMAIL}</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
} 
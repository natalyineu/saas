import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { COMPANY_NAME, COMPANY_EMAIL } from '../lib/utils/constants';

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-gray-600 mb-10">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
          
          <h2>How We Use Cookies</h2>
          <p>{COMPANY_NAME} uses cookies for several reasons:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access.</li>
            <li><strong>Functionality Cookies:</strong> These cookies allow us to remember choices you make and provide enhanced features. For instance, we may be able to provide you with news or updates relevant to the services you use.</li>
            <li><strong>Analytics Cookies:</strong> We use analytics cookies to help us understand how visitors interact with our website, allowing us to improve our website and services.</li>
            <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. They are used to display ads that are relevant and engaging for individual users.</li>
          </ul>
          
          <h2>Types of Cookies We Use</h2>
          
          <h3>Essential Cookies</h3>
          <table className="w-full border-collapse border border-gray-300 my-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Purpose</th>
                <th className="border border-gray-300 p-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">cookieConsent</td>
                <td className="border border-gray-300 p-2">Stores your cookie consent preferences</td>
                <td className="border border-gray-300 p-2">1 year</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">session</td>
                <td className="border border-gray-300 p-2">Maintains your session state</td>
                <td className="border border-gray-300 p-2">Session</td>
              </tr>
            </tbody>
          </table>
          
          <h3>Analytics Cookies</h3>
          <table className="w-full border-collapse border border-gray-300 my-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Purpose</th>
                <th className="border border-gray-300 p-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">_ga</td>
                <td className="border border-gray-300 p-2">Used by Google Analytics to distinguish users</td>
                <td className="border border-gray-300 p-2">2 years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">_gid</td>
                <td className="border border-gray-300 p-2">Used by Google Analytics to distinguish users</td>
                <td className="border border-gray-300 p-2">24 hours</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">_gat</td>
                <td className="border border-gray-300 p-2">Used by Google Analytics to throttle request rate</td>
                <td className="border border-gray-300 p-2">1 minute</td>
              </tr>
            </tbody>
          </table>
          
          <h2>Managing Cookies</h2>
          <p>
            Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via these links:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-purple hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary-purple hover:underline">Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-purple hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-purple hover:underline">Microsoft Edge</a></li>
          </ul>
          <p>
            Please note that restricting cookies may impact the functionality of our website.
          </p>
          
          <h2>Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> Used to analyze website traffic and user behavior.</li>
            <li><strong>Google Tag Manager:</strong> Used to manage and deploy marketing tags (snippets of code) on our website without modifying the code.</li>
            <li><strong>Google Search Console:</strong> Used to monitor and maintain our site's presence in Google Search results.</li>
            <li><strong>Google Ads:</strong> Used for remarketing and measuring the effectiveness of our advertising campaigns.</li>
            <li><strong>Facebook Pixel:</strong> Used for measuring the effectiveness of our advertising campaigns on Facebook.</li>
          </ul>
          
          <h3>Google Services Data Processing</h3>
          <p>
            We use various Google services including Google Analytics, Google Tag Manager, and Google Search Console to help us understand how our website is being used and to improve user experience. These services may collect information such as your IP address, browser type, device type, pages visited, time spent on pages, and other statistical data. This information is processed in accordance with Google's Privacy Policy.
          </p>
          <p>
            We have implemented IP anonymization where possible and do not use these services to collect personally identifiable information unless you explicitly provide it to us through forms or account registration.
          </p>
          
          <h2>Changes to This Cookie Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
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
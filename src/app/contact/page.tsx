import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/utils/constants';

export const metadata: Metadata = {
  title: 'Contact Us | AI-Vertise',
  description: 'Get in touch with our team for any questions about our AI-powered advertising solutions or to request a demo.',
  keywords: 'contact, support, help, AI advertising, demo request',
  openGraph: {
    title: 'Contact Us | AI-Vertise',
    description: 'Get in touch with our team for any questions about our AI-powered advertising solutions.',
    type: 'website',
    url: 'https://aivertise.io/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-10">
            Have questions or need assistance? We're here to help!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <ContactForm 
                title="Send us a message"
                subtitle="Fill out the form and we'll get back to you as soon as possible."
              />
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              
              <div className="mb-6">
                <h3 className="text-md font-semibold mb-2">Email</h3>
                <a 
                  href={`mailto:${COMPANY_EMAIL}`} 
                  className="text-primary-purple hover:underline"
                >
                  {COMPANY_EMAIL}
                </a>
              </div>
              
              <div className="mb-6">
                <h3 className="text-md font-semibold mb-2">Phone</h3>
                <a 
                  href={`tel:${COMPANY_PHONE}`} 
                  className="text-primary-purple hover:underline"
                >
                  {COMPANY_PHONE}
                </a>
              </div>
              
              <div>
                <h3 className="text-md font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600">9:00 AM - 5:00 PM GMT</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How quickly can I expect a response?</h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24 business hours.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I schedule a demo?</h3>
                <p className="text-gray-600">
                  Absolutely! Just mention in your message that you'd like to see a demo, and our team will arrange a convenient time.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer custom solutions?</h3>
                <p className="text-gray-600">
                  Yes, we offer tailored solutions for businesses with specific needs. Contact us to discuss your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
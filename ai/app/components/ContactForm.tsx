'use client';

import { useState } from 'react';
import { COMPANY_EMAIL } from '../lib/utils/constants';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  formspreeId?: string;
  successMessage?: string;
  buttonText?: string;
}

export default function ContactForm({
  title = 'Contact Us',
  subtitle = 'Fill out the form below and we\'ll get back to you as soon as possible.',
  className = '',
  formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || '',
  successMessage = 'Thank you! We\'ve received your message and will get back to you shortly.',
  buttonText = 'Send Message'
}: ContactFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationError('');
    
    // Get form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    
    // Validate that either email or phone is provided
    if (!email && !phone) {
      setValidationError('Please provide either an email or phone number so we can contact you.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Submit to Formspree
    fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          setFormSubmitted(true);
          form.reset();
        } else {
          alert('There was an error submitting the form. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

      {formSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
          <p>{successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-purple focus:border-primary-purple"
              required
            />
          </div>
          
          <p className="text-sm text-gray-600 mb-2">Please provide at least one contact method:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-purple focus:border-primary-purple"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-purple focus:border-primary-purple"
              />
            </div>
          </div>

          {validationError && (
            <div className="mb-4 p-2 bg-red-50 text-red-700 border border-red-200 rounded-md text-sm">
              {validationError}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-purple focus:border-primary-purple"
              required
            ></textarea>
          </div>

          <input type="hidden" name="_subject" value="New Contact Form Submission" />
          <input type="hidden" name="_replyto" value={COMPANY_EMAIL} />
          
          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-pink text-white rounded-md shadow-sm hover:shadow-md transition-all duration-200 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : buttonText}
            </button>
          </div>
        </form>
      )}
    </div>
  );
} 
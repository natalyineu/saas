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
  subtitle = "We'd love to hear from you",
  className = '',
  formspreeId = 'moqpeyjn',
  successMessage = "Thank you for your message. Our team will review it and get back to you shortly.",
  buttonText = 'Send Message',
}: ContactFormProps) {
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState<{contactMethod?: string; message?: string}>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});

    // Get the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const contactMethod = formData.get('contactMethod') as string;
    const message = formData.get('message') as string;

    // Simple validation
    const newErrors: {contactMethod?: string; message?: string} = {};
    if (!contactMethod) {
      newErrors.contactMethod = 'Please provide your email or phone number';
    }
    if (!message) {
      newErrors.message = 'Please enter your message';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      alert('Oops! There was a problem submitting your form. Please try again.');
    }

    setSubmitting(false);
  };

  if (status === 'success') {
    return (
      <div className={`p-6 bg-white rounded-lg shadow-sm ${className}`}>
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p className="text-gray-600 max-w-md mx-auto">{successMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 bg-white rounded-lg shadow-sm ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="contactMethod"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email or Phone Number *
            </label>
            <input
              type="text"
              name="contactMethod"
              id="contactMethod"
              placeholder="Enter your email or phone number"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.contactMethod ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent`}
            />
            {errors.contactMethod && (
              <p className="mt-1 text-sm text-red-600">{errors.contactMethod}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="How can we help you?"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent`}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-primary-purple to-primary-pink text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 disabled:opacity-70 flex items-center justify-center"
            >
              {submitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                buttonText
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
} 
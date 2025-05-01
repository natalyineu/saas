import React from 'react';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { COMPANY_NAME, COMPANY_EMAIL } from '@/lib/utils/constants';

export const metadata: Metadata = {
  title: 'Terms of Service | AI-Vertise Boost',
  description: 'Our terms of service outline the rules, guidelines, and agreements for using AI-Vertise Boost, our AI-powered advertising platform.',
  keywords: 'terms of service, terms and conditions, advertising terms, user agreement, subscription terms',
  openGraph: {
    title: 'Terms of Service | AI-Vertise Boost',
    description: 'Our terms of service outline the rules, guidelines, and agreements for using AI-Vertise Boost, our AI-powered advertising platform.',
    type: 'website',
    url: 'https://ai-vertise.com/terms',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | AI-Vertise Boost',
    description: 'Our terms of service outline the rules and agreements for using AI-Vertise Boost.'
  }
};

export default function TermsOfServicePage() {
  return (
    <>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-10">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            These Terms of Service ("Terms") govern your access to and use of the {COMPANY_NAME} website, platform, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
          </p>
          <p>
            Please read these Terms carefully. If you do not agree with all of the provisions of these Terms, do not access or use our Services.
          </p>
          
          <h2>Account Registration</h2>
          <p>
            To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding your account credentials. You are fully responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
          </p>
          
          <h2>Subscription Services and Payment</h2>
          <p>
            {COMPANY_NAME} offers various subscription plans for our advertising services. By subscribing to our Services, you agree to pay all fees associated with your subscription plan.
          </p>
          <p>
            Subscription fees are billed in advance on a monthly basis and are non-refundable. There will be no refunds or credits for partial months of service, or for periods when you did not use the subscription service.
          </p>
          <p>
            For standard packages ($99, $249, and $579), we commit only to delivering the specified number of impressions based on our framework. We may use client-provided creative assets or generate them ourselves at our discretion. These packages include only campaign launch and reporting services as specified in the package details.
          </p>
          <p>
            The "Tailored" package offers full customization and more detailed consultation services beyond what is included in the standard packages.
          </p>
          <p>
            We reserve the right to change subscription fees at any time. If we do change fees, we will provide notice of the change on the website or by email, at our discretion, at least 14 days before the change takes effect.
          </p>
          
          <h2>Refund Policy</h2>
          <p>
            Our refund policy is strictly limited to the following conditions:
          </p>
          <ul>
            <li>Refund requests must be submitted in writing to {COMPANY_EMAIL} within 24 hours of payment.</li>
            <li>If no refund request is received within 24 hours of payment, we will proceed with the campaign as planned, and no refund will be provided.</li>
            <li>We reserve the right to deny refunds to businesses engaged in fraudulent, deceptive, or illegal activities.</li>
            <li>No refunds will be processed for campaigns that have already been launched.</li>
            <li>Technical issues on our side that prevent campaign delivery may qualify for partial or full refund at our discretion.</li>
          </ul>
          
          <h2>Our Advertising Services</h2>
          <p>
            Our Services provide AI-powered advertising management. While we strive to provide effective advertising services, we cannot guarantee any specific results, such as clicks, conversions, or sales. We only commit to delivering the approximate number of impressions specified in the package you purchase.
          </p>
          <p>
            For the standard packages ($99, $249, and $579), our services are limited to campaign launch and reporting. We do not provide detailed consultations or strategy discussions for these packages. Such services are only available in the Tailored package.
          </p>
          <p>
            Your payment includes all advertising costs, including ad spend on third-party platforms (such as Google, Facebook, or other advertising networks), as well as all work performed by our developers and product team. There are no additional fees beyond the subscription price.
          </p>
          <p>
            For clients requiring higher impression volumes (1 million or more) with larger budgets ($600+, $1000+, or $5000+), we offer fully customized campaigns. In these cases, we will prepare a detailed media plan and strategy, executing every step of the campaign in a custom manner tailored to your specific needs and objectives. Please contact us directly to discuss these high-volume campaign options.
          </p>
          
          <h2>Acceptable Use Policy</h2>
          <p>
            You agree not to use our Services to:
          </p>
          <ul>
            <li>Advertise products or services that violate any applicable laws or regulations</li>
            <li>Advertise misleading, fraudulent, or deceptive products or services</li>
            <li>Infringe on the intellectual property rights of others</li>
            <li>Advertise illegal goods, services, or activities</li>
            <li>Distribute malware, viruses, or any other harmful code</li>
            <li>Send unsolicited communications, promotions, or advertisements</li>
            <li>Attempt to gain unauthorized access to our Services or related systems</li>
          </ul>
          <p>
            We reserve the right to refuse service to any business or individual engaged in activities we deem inappropriate, harmful, or contrary to our policies.
          </p>
          
          <h2>Intellectual Property</h2>
          <p>
            Our Services and its original content, features, and functionality are and will remain the exclusive property of {COMPANY_NAME} and its licensors. Our Services are protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable license to use our Services in accordance with these Terms.
          </p>
          
          <h2>User-Generated Content</h2>
          <p>
            You retain ownership of any content you submit to our Services, such as ad copy, images, or marketing materials. However, by submitting content to our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content in connection with providing and promoting our Services.
          </p>
          <p>
            You represent and warrant that you own or have the necessary rights to the content you submit, and that such content does not violate the rights of any third party.
          </p>
          
          <h2>Termination</h2>
          <p>
            We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
          </p>
          <p>
            Upon termination, your right to use our Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
          
          <h2>Disclaimer of Warranties</h2>
          <p>
            Our Services are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied. We expressly disclaim all warranties, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            We do not warrant that our Services will meet your requirements, be uninterrupted, secure, or error-free, or that defects will be corrected.
          </p>
          
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall {COMPANY_NAME}, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use our Services; (ii) any conduct or content of any third party on our Services; (iii) any content obtained from our Services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>
          <p>
            Our total liability to you for all claims arising from or related to the Services shall not exceed the amount paid by you to {COMPANY_NAME} in the last 12 months.
          </p>
          
          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless {COMPANY_NAME}, its directors, employees, partners, agents, suppliers, and affiliates, from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our Services.
          </p>
          
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Poland, without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
          
          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use our Services.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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
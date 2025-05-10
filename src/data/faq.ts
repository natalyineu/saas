import { getFaqSlug } from '@/lib/utils/slug';

/**
 * Centralized FAQ data for consistent usage across the site
 * Used by both the FAQ page and the FAQ component
 */
export const faqs = [
  {
    id: 1,
    question: "What is AI-Vertise Boost?",
    answer: "AI-Vertise Boost is an AI-powered advertising platform designed specifically for small and medium businesses. It helps automate and optimize digital ad campaigns across multiple channels.",
    slug: "what-is-ai-vertise-boost"
  },
  {
    id: 2,
    question: "How does AI-Vertise Boost work?",
    answer: "Our platform uses artificial intelligence to analyze your business goals, target audience, and budget. It then creates, launches, and optimizes ad campaigns across platforms like Google, Facebook, and Instagram, continuously improving performance.",
    slug: "how-does-ai-vertise-boost-work"
  },
  {
    id: 3,
    question: "Do I need technical knowledge to use AI-Vertise Boost?",
    answer: "No technical knowledge is required. Our platform is designed with an intuitive interface that guides you through the process. Our AI handles the complex technical aspects of campaign management.",
    slug: "do-i-need-technical-knowledge"
  },
  {
    id: 4,
    question: "How much does AI-Vertise Boost cost?",
    answer: "We offer flexible pricing plans starting at $299/month. Visit our pricing page for detailed information about our plans and features.",
    slug: "how-much-does-ai-vertise-boost-cost"
  },
  {
    id: 5,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
    slug: "can-i-cancel-subscription-anytime"
  },
  {
    id: 6,
    question: "How long until I see results?",
    answer: "Many clients see initial results within the first two weeks. The AI continuously optimizes campaigns, so performance typically improves over time. Full optimization usually occurs within 1-2 months.",
    slug: "how-long-until-i-see-results"
  },
  {
    id: 7,
    question: "What platforms does AI-Vertise Boost support?",
    answer: "We currently support Google Ads, Facebook, Instagram, LinkedIn, Twitter, and TikTok. We're constantly adding more platforms to our ecosystem.",
    slug: "what-platforms-does-ai-vertise-boost-support"
  },
  {
    id: 8,
    question: "Is there a minimum ad budget required?",
    answer: "No, there's no minimum ad budget. However, we recommend at least $300/month of ad spend to see meaningful results. For clients requiring higher impression volumes (1 million or more), we offer fully customized campaigns with budgets starting from $600.",
    slug: "is-there-minimum-ad-budget-required"
  },
  {
    id: 9,
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Our refund policy is strictly limited to the following conditions: Refund requests must be submitted in writing to our support team within 24 hours of payment. If no refund request is received within 24 hours, we will proceed with the campaign as planned, and no refund will be provided.",
    slug: "can-i-get-refund-if-not-satisfied"
  }
];

// Helper to find FAQ by slug
export function getFaqBySlug(slug: string) {
  return faqs.find(faq => faq.slug === slug);
}

/**
 * Generate schema.org structured data for FAQs
 */
export function generateFAQStructuredData(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
} 
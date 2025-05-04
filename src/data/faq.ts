/**
 * Centralized FAQ data for consistent usage across the site
 * Used by both the FAQ page and the FAQ component
 */
export const faqs = [
  {
    question: "What is AI-Vertise Boost?",
    answer: "AI-Vertise Boost is an AI-powered advertising platform designed specifically for small and medium businesses. It helps automate and optimize digital ad campaigns across multiple channels."
  },
  {
    question: "How does AI-Vertise Boost work?",
    answer: "Our platform uses artificial intelligence to analyze your business goals, target audience, and budget. It then creates, launches, and optimizes ad campaigns across platforms like Google, Facebook, and Instagram, continuously improving performance."
  },
  {
    question: "Do I need technical knowledge to use AI-Vertise Boost?",
    answer: "No technical knowledge is required. Our platform is designed with an intuitive interface that guides you through the process. Our AI handles the complex technical aspects of campaign management."
  },
  {
    question: "How much does AI-Vertise Boost cost?",
    answer: "We offer flexible pricing plans starting at $299/month. Visit our pricing page for detailed information about our plans and features."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
  },
  {
    question: "How long until I see results?",
    answer: "Many clients see initial results within the first two weeks. The AI continuously optimizes campaigns, so performance typically improves over time. Full optimization usually occurs within 1-2 months."
  },
  {
    question: "What platforms does AI-Vertise Boost support?",
    answer: "We currently support Google Ads, Facebook, Instagram, LinkedIn, Twitter, and TikTok. We're constantly adding more platforms to our ecosystem."
  },
  {
    question: "Is there a minimum ad budget required?",
    answer: "No, there's no minimum ad budget. However, we recommend at least $300/month of ad spend to see meaningful results. For clients requiring higher impression volumes (1 million or more), we offer fully customized campaigns with budgets starting from $600."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Our refund policy is strictly limited to the following conditions: Refund requests must be submitted in writing to our support team within 24 hours of payment. If no refund request is received within 24 hours, we will proceed with the campaign as planned, and no refund will be provided."
  }
];

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
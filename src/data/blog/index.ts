/**
 * Centralized blog post registry
 * This file serves as the single source of truth for all blog posts
 * to prevent duplication across sitemap, verification, and blog components
 */

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  isSuccessStory?: boolean;
}

// Main blog post list ordered by date (newest first)
export const blogPosts: BlogPost[] = [
  {
    id: 'ai-telegram-channel-strategy',
    title: 'AI-Optimized Telegram Channels for Marketing',
    date: 'May 8, 2024',
    category: 'Social Media',
    readTime: '5 min read'
  },
  {
    id: 'privacy-first-advertising',
    title: 'Privacy-First Advertising Strategies',
    date: 'May 7, 2024',
    category: 'Privacy',
    readTime: '7 min read'
  },
  {
    id: 'social-media-ai-ads',
    title: 'AI-Powered Social Media Advertising',
    date: 'May 6, 2024',
    category: 'Social Media',
    readTime: '6 min read'
  },
  {
    id: 'programmatic-advertising-ai',
    title: 'How AI is Transforming Programmatic Advertising',
    date: 'May 5, 2024',
    category: 'Programmatic',
    readTime: '8 min read'
  },
  {
    id: 'social-media-ai-content',
    title: 'AI for Social Media Content Creation',
    date: 'May 1, 2024',
    category: 'Content',
    readTime: '6 min read'
  },
  {
    id: 'ecommerce-personalization',
    title: 'AI-Powered E-commerce Personalization',
    date: 'April 27, 2024',
    category: 'E-commerce',
    readTime: '8 min read'
  },
  {
    id: 'metaverse-marketing-opportunities',
    title: 'Metaverse Marketing Opportunities',
    date: 'April 23, 2024',
    category: 'Innovation',
    readTime: '9 min read'
  },
  {
    id: 'telegram-ai-channel-selection',
    title: 'Using AI to Select Telegram Channels for Marketing',
    date: 'April 19, 2024',
    category: 'Social Media',
    readTime: '7 min read'
  },
  {
    id: 'ai-in-digital-advertising',
    title: 'The Role of AI in Digital Advertising',
    date: 'April 15, 2024',
    category: 'Advertising',
    readTime: '6 min read'
  },
  {
    id: 'uk-advertising-landscape-2025',
    title: 'UK Advertising Landscape in 2025',
    date: 'April 10, 2024',
    category: 'Trends',
    readTime: '8 min read'
  },
  {
    id: 'marketing-dashboard-benefits',
    title: 'Benefits of Using Marketing Dashboards',
    date: 'April 5, 2024',
    category: 'Analytics',
    readTime: '5 min read'
  },
  {
    id: 'marketing-in-singapore',
    title: 'Effective Digital Marketing in Singapore',
    date: 'April 1, 2024',
    category: 'Regional',
    readTime: '7 min read'
  },
  {
    id: 'ai-marketing-agents',
    title: 'AI Marketing Agents: Future of Campaigns',
    date: 'March 28, 2024',
    category: 'AI',
    readTime: '6 min read'
  },
  {
    id: 'digital-marketing-china',
    title: 'Digital Marketing Strategies for China',
    date: 'March 25, 2024',
    category: 'Regional',
    readTime: '8 min read'
  },
  {
    id: 'media-planning-metrics',
    title: 'Essential Media Planning Metrics',
    date: 'March 20, 2024',
    category: 'Analytics',
    readTime: '7 min read'
  },
  {
    id: 'effective-facebook-ads',
    title: 'Creating Effective Facebook Ads',
    date: 'March 15, 2024',
    category: 'Social Media',
    readTime: '6 min read'
  }
];

// Success stories / case studies
export const successStories: BlogPost[] = [
  {
    id: 'urban-beans-case-study',
    title: 'Urban Beans: 143% Increase in Local Customers',
    date: 'May 8, 2024',
    category: 'Case Study',
    readTime: '4 min read',
    isSuccessStory: true
  },
  {
    id: 'taste-of-italy-case-study',
    title: 'Taste of Italy: 87% Boost in Weekend Reservations',
    date: 'May 8, 2024',
    category: 'Case Study',
    readTime: '5 min read',
    isSuccessStory: true
  },
  {
    id: 'chic-trends-case-study',
    title: 'Chic Trends: 215% ROAS for Fashion Retailer',
    date: 'April 25, 2024',
    category: 'Case Study',
    readTime: '4 min read',
    isSuccessStory: true
  }
];

// Get all blog post IDs
export function getAllBlogPostIds(): string[] {
  return [...blogPosts, ...successStories].map(post => post.id);
}

// Sort blog posts by date
export function sortPostsByDate<T extends BlogPost>(posts: T[]): T[] {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
} 
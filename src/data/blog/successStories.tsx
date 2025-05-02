import { ContentItem } from '@/lib/types/content';

export interface SuccessStory extends ContentItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  author: string;
  heroImage?: string;
  content?: string;
  stats?: {
    value: string;
    label: string;
  };
}

export const successStories: SuccessStory[] = [
  {
    id: "urban-beans-case-study",
    title: "Coffee Shop Campaign: How a Local Café Increased Foot Traffic by 143%",
    date: "April 15, 2025",
    category: "CASE STUDY",
    excerpt: "A specialty coffee shop used AI-Vertise Boost to target local coffee enthusiasts and saw a dramatic increase in new customers within the first month.",
    readTime: "5 min read",
    author: "Founder of ai-vertise.com",
    heroImage: "/images/case-studies/urban-beans.jpg",
    stats: {
      value: "+143%",
      label: "foot traffic"
    }
  },
  {
    id: "taste-of-italy-case-study",
    title: "Local Restaurant Promotion: Italian Restaurant Boosts Weekend Reservations by 87%",
    date: "April 14, 2025",
    category: "CASE STUDY",
    excerpt: "A family-owned Italian restaurant leveraged our platform to promote their weekend specials, resulting in fully booked weekends.",
    readTime: "6 min read",
    author: "Founder of ai-vertise.com",
    heroImage: "/images/case-studies/taste-of-italy.jpg",
    stats: {
      value: "+87%",
      label: "weekend reservations"
    }
  },
  {
    id: "chic-trends-case-study",
    title: "Online Boutique Launch: Fashion Retailer Achieves 215% Return on Ad Spend",
    date: "April 13, 2025",
    category: "CASE STUDY",
    excerpt: "An online fashion boutique used our AI targeting to find fashion-forward customers, achieving impressive sales from day one.",
    readTime: "7 min read",
    author: "Founder of ai-vertise.com",
    heroImage: "/images/case-studies/chic-trends.jpg",
    stats: {
      value: "+215%",
      label: "ROAS"
    }
  }
]; 
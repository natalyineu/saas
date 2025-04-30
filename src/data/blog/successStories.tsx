import React from 'react';

export interface SuccessStory {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  author: string;
  icon?: React.JSX.Element;
  heroImage?: string;
  content?: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "urban-beans-case-study",
    title: "How Urban Beans Increased Online Orders by 137% with AI-Driven Advertising",
    date: "2024-04-15",
    category: "Food & Beverage",
    excerpt: "Urban Beans used AI-Vertise to optimize their digital advertising strategy, resulting in a significant boost in online orders and customer acquisition.",
    readTime: "8 min read",
    author: "Marketing Team",
    icon: (
      <div className="h-48 bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-14a2 2 0 10-4 0v1h4V2zm-2 14a1 1 0 110-2 1 1 0 010 2zm7-14h-1.5v1h1.5a1.5 1.5 0 011.5 1.5v3.5a2.5 2.5 0 01-5 0V4H10v5a4.5 4.5 0 109 0V4.5A2.5 2.5 0 0016.5 2z" clipRule="evenodd" />
        </svg>
      </div>
    ),
    heroImage: "/images/case-studies/urban-beans.jpg"
  },
  {
    id: "chic-trends-case-study",
    title: "Chic Trends: Reducing Customer Acquisition Cost by 67% with AI Marketing",
    date: "2024-03-22",
    category: "Fashion",
    excerpt: "This fashion retailer dramatically reduced their customer acquisition costs while maintaining high-quality traffic by implementing our AI-driven ad optimization.",
    readTime: "7 min read",
    author: "Marketing Team",
    icon: (
      <div className="h-48 bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a2 2 0 00-2 2v8a2 2 0 104 0V4a2 2 0 00-2-2zm0 14a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M10 5a1 1 0 100 2 1 1 0 000-2zM10 9a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
      </div>
    ),
    heroImage: "/images/case-studies/chic-trends.jpg"
  },
  {
    id: "taste-of-italy-case-study",
    title: "Taste of Italy's Local Restaurant Marketing Success Story",
    date: "2024-02-18",
    category: "Restaurant",
    excerpt: "How a local Italian restaurant used targeted AI advertising to increase foot traffic and boost weekend reservations by 83%.",
    readTime: "6 min read",
    author: "Marketing Team",
    icon: (
      <div className="h-48 bg-gradient-to-br from-red-600 to-green-600 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
    ),
    heroImage: "/images/case-studies/taste-of-italy.jpg"
  }
]; 
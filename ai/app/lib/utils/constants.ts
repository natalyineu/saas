import { CaseStudy, Feature, PricingPlan, WorkStep } from "../types";

export const COMPANY_NAME = "AI-Vertise Boost";
export const COMPANY_EMAIL = "contact@ai-vertise.com";
export const COMPANY_PHONE = "+48503589781";
export const PAYMENT_LINK = "https://buymeacoffee.com/aivertise/membership";
export const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://db.ai-vertise.com/";

export const FEATURES: Feature[] = [
  {
    title: "Smart Targeting",
    description: "AI-powered audience segmentation finds your ideal customers with precision.",
    icon: null,
  },
  {
    title: "Fast Launch",
    description: "Get your campaign up and running in minutes, not days or weeks.",
    icon: null,
  },
  {
    title: "AI Budget Optimization",
    description: "Our AI continuously optimizes your ad spend for maximum ROI.",
    icon: null,
  },
  {
    title: "Real-Time Analytics",
    description: "Monitor campaign performance and get actionable insights instantly.",
    icon: null,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for small businesses just getting started with advertising",
    features: [
      "AI-powered ad creation",
      "Basic audience targeting",
      "1 ad platform",
      "Weekly performance reports",
      "Email support"
    ],
    buttonText: "Choose Starter",
    buttonLink: PAYMENT_LINK,
    highlight: false
  },
  {
    name: "Growth",
    price: "$249",
    description: "Ideal for growing businesses looking to expand their reach",
    features: [
      "Everything in Starter, plus:",
      "Advanced audience targeting",
      "3 ad platforms",
      "A/B testing",
      "Daily performance reports",
      "Priority email support"
    ],
    buttonText: "Choose Growth",
    buttonLink: PAYMENT_LINK,
    highlight: true
  },
  {
    name: "Impact",
    price: "$579",
    description: "For established businesses ready to maximize their advertising ROI",
    features: [
      "Everything in Growth, plus:",
      "Premium audience targeting",
      "All major ad platforms",
      "Advanced A/B testing",
      "Real-time performance dashboard",
      "Dedicated support manager"
    ],
    buttonText: "Choose Impact",
    buttonLink: PAYMENT_LINK,
    highlight: false
  },
  {
    name: "Tailored",
    price: "From $600",
    description: "Custom solution tailored to your specific business needs",
    features: [
      "Fully customized strategy",
      "Custom audience targeting",
      "Custom reporting",
      "Dedicated account manager",
      "VIP support"
    ],
    buttonText: "Request a Quote",
    buttonLink: PAYMENT_LINK,
    highlight: false,
    isCustom: true
  }
];

export const WORK_STEPS: WorkStep[] = [
  {
    number: "01",
    title: "Choose a plan",
    description: "Select the plan that best fits your business needs and budget"
  },
  {
    number: "02",
    title: "Make payment",
    description: "Complete your payment securely through our payment processor"
  },
  {
    number: "03",
    title: "We launch your ads",
    description: "Our AI gets to work creating and optimizing your ad campaign"
  }
];

export const CASE_STUDIES: Omit<CaseStudy, 'icon'>[] = [
  {
    title: "Coffee Shop Campaign",
    company: "Urban Beans",
    result: "+143% increase in foot traffic",
    description: "Urban Beans used AI-Vertise Boost to target local coffee enthusiasts and saw a dramatic increase in new customers within the first month."
  },
  {
    title: "Local Restaurant Promotion",
    company: "Taste of Italy",
    result: "+87% boost in weekend reservations",
    description: "Taste of Italy restaurant leveraged our platform to promote their weekend specials, resulting in fully booked weekends."
  },
  {
    title: "Online Boutique Launch",
    company: "Chic Trends",
    result: "+215% return on ad spend",
    description: "Chic Trends online boutique used our AI targeting to find fashion-forward customers, achieving impressive sales from day one."
  }
]; 
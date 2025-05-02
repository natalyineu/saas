import { CaseStudy, Feature, PricingPlan, WorkStep } from "../types";

export const COMPANY_NAME = "AI-Vertise Boost";
export const COMPANY_EMAIL = "contact@ai-vertise.com";
export const COMPANY_PHONE = "+48503589781";
export const PAYMENT_LINK = "/contact";
export const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://db.ai-vertise.com/";

export const FEATURES: Feature[] = [
  {
    title: "Smart Ad Targeting",
    description: "AI-powered audience segmentation finds your ideal customers with precision marketing.",
    icon: null,
  },
  {
    title: "Rapid Campaign Launch",
    description: "Get your digital marketing campaign up and running in minutes, not days or weeks.",
    icon: null,
  },
  {
    title: "AI-Driven Ad Budget Optimization",
    description: "Our AI continuously optimizes your advertising spend for maximum marketing ROI.",
    icon: null,
  },
  {
    title: "Real-Time Marketing Analytics",
    description: "Monitor ad campaign performance and get actionable marketing insights instantly.",
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
    title: "Choose a marketing plan",
    description: "Select the ad plan that best fits your business needs and marketing budget"
  },
  {
    number: "02",
    title: "Set up your account",
    description: "Complete your payment and provide basic information about your advertising goals"
  },
  {
    number: "03",
    title: "We launch your ad campaign",
    description: "Our AI gets to work creating and optimizing your digital marketing strategy"
  }
];

export const CASE_STUDIES: Omit<CaseStudy, 'icon'>[] = [
  {
    title: "Cafe Marketing Campaign",
    company: "Local Coffee Shop",
    result: "+143% increase in foot traffic",
    description: "A specialty coffee shop used AI-Vertise Boost's targeted ad technology to reach local coffee enthusiasts and saw a dramatic increase in new customers within their first digital marketing campaign."
  },
  {
    title: "Restaurant Ad Strategy",
    company: "Italian Restaurant",
    result: "+87% boost in weekend reservations",
    description: "A family-owned Italian restaurant leveraged our advertising platform to promote their weekend specials through targeted ads, resulting in fully booked weekends."
  },
  {
    title: "E-commerce Marketing Launch",
    company: "Fashion Retailer",
    result: "+215% return on ad spend",
    description: "An online fashion boutique used our AI ad targeting to find fashion-forward customers, achieving impressive marketing ROI from their very first campaign."
  }
]; 
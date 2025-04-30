export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlight: boolean;
  isCustom?: boolean;
}

export interface CaseStudy {
  title: string;
  company: string;
  result: string;
  description: string;
  icon: React.ReactNode;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
} 
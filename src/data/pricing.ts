// Types for pricing plans
export interface Feature {
  title: string;
  features: string[];
}

export interface Plan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  impressions: string;
  description: string;
  featureGroups: Feature[];
  buttonText: string;
  buttonLink: string;
  highlight: boolean;
  isCustom?: boolean;
}

// Pricing plans data
export const pricingPlans: Plan[] = [
  {
    name: "Starter",
    monthlyPrice: "$99",
    annualPrice: "$1,188",
    impressions: "16,500",
    description: "Perfect for small businesses just getting started with advertising",
    featureGroups: [
      {
        title: "Ad Channels",
        features: [
          "Display"
        ]
      },
      {
        title: "Reporting & Analytics",
        features: [
          "Bi-weekly email report",
          "Basic performance metrics",
          "Brief insights & recommendations"
        ]
      },
      {
        title: "Support",
        features: [
          "Email support only",
          "Response within 48 hours"
        ]
      }
    ],
    buttonText: "Choose Starter",
    buttonLink: "https://go.ai-vertise.com/register",
    highlight: false
  },
  {
    name: "Growth",
    monthlyPrice: "$249",
    annualPrice: "$2,988",
    impressions: "46,500",
    description: "Ideal for growing businesses looking to expand their reach",
    featureGroups: [
      {
        title: "Ad Channels",
        features: [
          "Display",
          "Native",
          "Search"
        ]
      },
      {
        title: "Reporting & Analytics",
        features: [
          "Weekly email reports",
          "Performance summary with trends",
          "Strategic recommendations"
        ]
      },
      {
        title: "Support",
        features: [
          "Priority email support",
          "Response within 24 hours"
        ]
      }
    ],
    buttonText: "Choose Growth",
    buttonLink: "https://go.ai-vertise.com/register",
    highlight: true
  },
  {
    name: "Impact",
    monthlyPrice: "$579",
    annualPrice: "$6,948",
    impressions: "96,500",
    description: "For established businesses ready to maximize their advertising ROI",
    featureGroups: [
      {
        title: "Ad Channels",
        features: [
          "Display",
          "OLV",
          "Search"
        ]
      },
      {
        title: "Reporting & Analytics",
        features: [
          "Interactive real-time dashboard",
          "Weekly email summary",
          "Advanced performance metrics"
        ]
      },
      {
        title: "Support",
        features: [
          "Dedicated support manager",
          "Priority response within hours"
        ]
      }
    ],
    buttonText: "Choose Impact",
    buttonLink: "https://go.ai-vertise.com/register",
    highlight: false
  },
  {
    name: "Tailored",
    monthlyPrice: "From $600",
    annualPrice: "From $7,200",
    impressions: "100k+",
    description: "Custom solution tailored to your specific business needs",
    featureGroups: [
      {
        title: "Ad Channels",
        features: [
          "Custom ad channel selection"
        ]
      },
      {
        title: "Reporting & Analytics",
        features: [
          "Custom dashboard",
          "Custom reporting frequency",
          "ROI-focused analytics"
        ]
      },
      {
        title: "Support",
        features: [
          "VIP support with account team",
          "Strategic consulting included"
        ]
      }
    ],
    buttonText: "Talk to Sales",
    buttonLink: "https://go.ai-vertise.com/register",
    highlight: false,
    isCustom: true
  }
];

// Helper functions for pricing calculations
export const getAnnualSavings = (monthlyPrice: string, annualPrice: string): string => {
  if (monthlyPrice.includes("From") || annualPrice.includes("From")) {
    return "";
  }
  
  const monthly = parseInt(monthlyPrice.replace(/\D/g, ''));
  const annual = parseInt(annualPrice.replace(/\D/g, ''));
  
  // Annual pricing doesn't provide a discount in this case since we're showing the full annual amount
  return "";
};

export const getAnnualImpressions = (impressions: string): string => {
  if (impressions.includes("k+")) {
    return "1.2M+";
  }
  
  const baseImpressions = parseInt(impressions.replace(/,/g, ''));
  // For annual plans: monthly impressions × 12 months × 1.2 (20% bonus)
  const annualImpressions = baseImpressions * 12 * 1.2;
  
  if (annualImpressions >= 1000000) {
    return `${(annualImpressions / 1000000).toFixed(1)}M+`;
  }
  
  return annualImpressions.toLocaleString();
}; 
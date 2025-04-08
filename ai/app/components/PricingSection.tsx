'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PricingSection() {
  // Add client-side state to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);

  // This will only run on the client after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "$99",
      impressions: "16,500",
      description: "Perfect for small businesses just getting started with advertising",
      featureGroups: [
        {
          title: "Ad Channels",
          features: [
            "1 ad channel (Search or Display)",
            "AI-powered ad creation",
            "Basic audience targeting"
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
        },
        {
          title: "Service Details",
          features: [
            "3 AI-generated ad variations",
            "1 campaign setup",
            "Monthly budget management",
            "Simple conversion tracking"
          ]
        }
      ],
      buttonText: "Choose Starter",
      buttonLink: "https://buymeacoffee.com/aivertise/membership",
      highlight: false
    },
    {
      name: "Growth",
      price: "$249",
      impressions: "46,500",
      description: "Ideal for growing businesses looking to expand their reach",
      featureGroups: [
        {
          title: "Ad Channels",
          features: [
            "2 ad channels (Search + Display or Native)",
            "Advanced audience targeting",
            "A/B testing capabilities"
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
        },
        {
          title: "Service Details",
          features: [
            "5 AI-generated ad variations",
            "3 campaign setups",
            "Weekly budget optimization",
            "Enhanced conversion tracking",
            "Competitor analysis"
          ]
        }
      ],
      buttonText: "Choose Growth",
      buttonLink: "https://buymeacoffee.com/aivertise/membership",
      highlight: true
    },
    {
      name: "Impact",
      price: "$579",
      impressions: "96,500",
      description: "For established businesses ready to maximize their advertising ROI",
      featureGroups: [
        {
          title: "Ad Channels",
          features: [
            "2–3 ad channels (CTV, OLV, Display, Search)",
            "Premium audience targeting",
            "Advanced A/B testing"
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
        },
        {
          title: "Service Details",
          features: [
            "10 AI-generated ad variations",
            "5 campaign setups",
            "Daily budget optimization",
            "Full-funnel conversion tracking",
            "Competitor analysis & benchmarking",
            "Retargeting campaigns included"
          ]
        }
      ],
      buttonText: "Choose Impact",
      buttonLink: "https://buymeacoffee.com/aivertise/membership",
      highlight: false
    },
    {
      name: "Tailored",
      price: "From $600",
      impressions: "100k+",
      description: "Custom solution tailored to your specific business needs",
      featureGroups: [
        {
          title: "Ad Channels",
          features: [
            "Custom ad channel selection",
            "Enterprise-grade targeting",
            "Advanced campaign strategies"
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
        },
        {
          title: "Service Details",
          features: [
            "Unlimited AI-generated ad variations",
            "Unlimited campaign setups",
            "Continuous budget optimization",
            "Custom attribution modeling",
            "Full competitive analysis",
            "Multi-platform strategy",
            "Custom integration with your CRM"
          ]
        }
      ],
      buttonText: "Request a Quote",
      buttonLink: "https://buymeacoffee.com/aivertise/membership",
      highlight: false,
      isCustom: true
    }
  ];

  return (
    <section id="pricing" className="py-12 bg-soft-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your business. All plans include our core AI-powered features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white p-4 rounded-lg ${plan.highlight ? 'ring-3 ring-primary-purple shadow-lg' : 'border border-gray-200 shadow-md'}`}
            >
              {/* Only render badges client-side to prevent hydration mismatch */}
              {isClient && plan.highlight && (
                <div className="absolute -top-2.5 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs font-bold uppercase py-1 px-4 rounded-full shadow-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-2xl font-bold">{plan.price}</span>
                {!plan.isCustom && <span className="text-gray-600 text-sm">/month</span>}
              </div>
              
              {/* Impression count highlight */}
              <div className="flex items-center mb-3 p-1.5 bg-gray-50 rounded-md border-l-3 border-primary-purple">
                <span className="text-primary-purple mr-1.5">📊</span>
                <div>
                  <span className="text-xs text-gray-600 block">Monthly Reach</span>
                  <span className="font-bold text-base text-primary-purple">{plan.impressions} impressions</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              
              {plan.featureGroups.map((group, gIndex) => (
                <div key={gIndex} className="mb-4">
                  <h4 className="text-xs uppercase text-gray-500 font-semibold mb-1.5 border-b border-gray-100 pb-1">{group.title}</h4>
                  <ul className="space-y-1.5 mb-3">
                    {group.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-sm">
                        <svg className="h-4 w-4 text-primary-purple mr-1.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {/* Replace dangerouslySetInnerHTML with conditional styling */}
                        <span className={feature.includes("Weekly") || feature.includes("dashboard") ? "font-semibold text-primary-purple" : ""}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <Link 
                href={plan.buttonLink} 
                className={`block text-center py-2 px-3 rounded-md font-medium text-sm mt-auto ${
                  plan.highlight 
                    ? 'bg-gradient-to-r from-primary-purple to-primary-pink text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300' 
                    : 'btn-secondary'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
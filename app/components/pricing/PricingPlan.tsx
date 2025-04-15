import Link from 'next/link';
import { Plan } from '../PricingSection';

interface PricingPlanProps {
  plan: Plan;
  isAnnual: boolean;
  getAnnualSavings: (monthlyPrice: string, annualPrice: string) => string;
  getAnnualImpressions: (impressions: string) => string;
}

export default function PricingPlan({ plan, isAnnual, getAnnualSavings, getAnnualImpressions }: PricingPlanProps) {
  const isClient = typeof window !== 'undefined';

  return (
    <div 
      className={`relative bg-white p-6 rounded-2xl ${plan.highlight ? 'ring-2 ring-primary-purple shadow-lg' : 'border border-gray-200 shadow-sm'}`}
    >
      {/* Badge for highlighted plan */}
      {isClient && plan.highlight && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <div className="bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs font-bold uppercase py-1 px-4 rounded-full shadow-sm">
            MOST POPULAR
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      
      <div className="mb-3 flex items-center">
        <span className="text-3xl font-bold">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
        {!plan.isCustom && <span className="text-gray-600 text-sm ml-1">/month</span>}
        
        {isAnnual && !plan.isCustom && (
          <span className="ml-2 text-xs font-medium text-green-600">
            {getAnnualSavings(plan.monthlyPrice, plan.annualPrice)}
          </span>
        )}
      </div>
      
      {/* Impression count highlight */}
      <div className="flex items-center mb-4 p-2 bg-gray-50 rounded-xl border-l-3 border-primary-purple">
        <span className="text-primary-purple mr-2">📊</span>
        <div>
          <span className="text-xs text-gray-600 block">Monthly Reach</span>
          <span className="font-bold text-sm text-primary-purple">
            {isAnnual ? getAnnualImpressions(plan.impressions) : plan.impressions} impressions
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-5">{plan.description}</p>
      
      {plan.featureGroups.map((group, gIndex) => (
        <div key={gIndex} className="mb-5">
          <h4 className="text-xs uppercase text-gray-500 font-semibold mb-2 border-b border-gray-100 pb-1">{group.title}</h4>
          {group.title === "Ad Channels" ? (
            <div className="flex flex-wrap gap-2 mb-3">
              {group.features.map((feature, fIndex) => {
                let bgColor = "bg-green-100";
                let textColor = "text-green-800";
                
                if (feature.includes("Native")) {
                  bgColor = "bg-purple-100";
                  textColor = "text-purple-800";
                } else if (feature.includes("Search")) {
                  bgColor = "bg-blue-100";
                  textColor = "text-blue-800";
                } else if (feature.includes("Custom")) {
                  bgColor = "bg-orange-100";
                  textColor = "text-orange-800";
                } else if (feature.includes("OLV")) {
                  bgColor = "bg-pink-100";
                  textColor = "text-pink-800";
                }
                
                return (
                  <span 
                    key={fIndex}
                    className={`${bgColor} ${textColor} text-xs font-medium px-2.5 py-1 rounded-full`}
                  >
                    {feature}
                  </span>
                );
              })}
            </div>
          ) : (
            <ul className="space-y-2 mb-3">
              {group.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-primary-purple mr-1.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={feature.includes("Weekly") || feature.includes("dashboard") ? "font-medium text-primary-purple" : ""}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      
      <Link 
        href={plan.buttonLink}
        className={`block w-full text-center py-3 px-4 rounded-xl font-medium transition-colors mt-auto ${
          plan.highlight 
            ? 'bg-gradient-to-r from-primary-purple to-primary-pink text-white hover:opacity-90' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        {plan.buttonText}
      </Link>
    </div>
  );
} 
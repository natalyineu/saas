'use client';

import { 
  TargetIcon, 
  RocketIcon, 
  AIBrainIcon, 
  AnalyticsIcon 
} from './ui/AnimatedIcons';
import { FEATURES } from '../lib/utils/constants';
import Link from 'next/link';

export default function FeaturesSection() {
  // Map the icons to the features from constants
  const featuresWithIcons = [
    {
      ...FEATURES[0],
      description: <>Reach the right audience at the right time. Our AI segments and targets with <span className="font-bold">95%</span> precision, boosting engagement and reducing wasted spend.</>,
      icon: <TargetIcon className="mx-auto transform hover:scale-110 transition-transform duration-300" />,
      gradient: "from-blue-400 to-primary-purple",
    },
    {
      ...FEATURES[1],
      description: <>Go live in under <span className="font-bold">10 minutes</span> — no agencies, no delays. Our system supports campaigns in any language or region.</>,
      icon: <RocketIcon className="mx-auto transform hover:scale-110 transition-transform duration-300" />,
      gradient: "from-primary-purple to-primary-pink",
    },
    {
      ...FEATURES[2],
      description: <>Our algorithm learns and adapts in real time, squeezing the most out of every dollar. Most users see <span className="font-bold">2x–3x</span> better performance within 30 days.</>,
      icon: <AIBrainIcon className="mx-auto transform hover:scale-110 transition-transform duration-300" />,
      gradient: "from-primary-pink to-orange-400",
    },
    {
      ...FEATURES[3],
      description: "Track conversions, revenue, and reach in real time. Weekly reports are sent straight to your inbox — zero effort needed.",
      icon: <AnalyticsIcon className="mx-auto transform hover:scale-110 transition-transform duration-300" />,
      gradient: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section id="features" className="py-24 bg-soft-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-r from-primary-purple/10 to-primary-pink/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold relative inline-block">
            AI-Powered Marketing Features That Deliver Results
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-primary-purple to-primary-pink rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            With AI-Vertise Boost, you don't just run ads — you execute powerful digital marketing campaigns. Our AI-powered advertising platform is built to drive real business outcomes across <span className="font-bold">50+</span> countries, whether you're just starting or scaling your ad strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuresWithIcons.map((feature, index) => (
            <Link 
              key={index}
              href={`/contact?feature=${encodeURIComponent(feature.title)}`}
              className="group cursor-pointer"
            >
              <div 
                className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2 h-full"
              >
                {/* Feature card background design */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary-purple transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{feature.description}</p>
                </div>
                
                {/* Bottom indicator */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Additional visual flourish */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink">
            <div className="px-6 py-3 bg-white rounded-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-pink font-bold">
                Advanced Ad Targeting · AI-Powered Marketing · Data-Driven Results
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
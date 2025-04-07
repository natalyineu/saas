import { WORK_STEPS } from '../lib/utils/constants';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-soft-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started with AI-Vertise Boost is simple. Just follow these three easy steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-12 sm:pb-0">
          {WORK_STEPS.map((step, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md relative mb-4 sm:mb-0">
              <div className="absolute -top-5 -left-5 bg-gradient-to-r from-primary-purple to-primary-pink text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mt-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="h-14 sm:h-0 md:h-0"></div>
      </div>
    </section>
  );
} 
import React from 'react';

interface ComparisonItem {
  category: string;
  inHouse: string;
  agency: string;
  aiVertise: string;
  savings: string;
}

interface CostComparisonBaseProps {
  isVisible?: boolean;
  isStatic?: boolean;
  title: string;
  subtitle: string;
  comparisonData: ComparisonItem[];
  showCta?: boolean;
}

export default function CostComparisonBase({
  isVisible = true,
  isStatic = false,
  title = "Marketing Team Cost Comparison", 
  subtitle = "See how AI-Vertise delivers the same marketing functions at a fraction of the cost and staff requirements compared to traditional options.",
  comparisonData,
  showCta = false
}: CostComparisonBaseProps) {
  
  // Desktop view table (hidden on mobile)
  const renderDesktopTable = () => (
    <div className={`hidden md:block rounded-xl shadow-md overflow-hidden border border-gray-200 ${isStatic ? 'shadow-lg' : ''}`}>
      {/* Table header */}
      <div className="grid grid-cols-5 text-sm">
        <div className="py-3 px-4 font-semibold text-gray-700 border-b bg-gray-50 border-r border-gray-200">Marketing Function</div>
        <div className="py-3 px-4 font-semibold text-gray-700 border-b bg-gray-50 border-r border-gray-200">In-House Team</div>
        <div className="py-3 px-4 font-semibold text-gray-700 border-b bg-gray-50 border-r border-gray-200">Marketing Agency</div>
        <div className="py-3 px-4 font-semibold text-primary-purple border-b bg-primary-purple/5 border-r border-gray-200">
          <div className="flex items-center">
            <span>AI-Vertise</span>
            <div className="ml-2 px-2 py-0.5 bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs rounded-full">Best Value</div>
          </div>
        </div>
        <div className="py-3 px-4 font-semibold text-gray-700 border-b bg-gray-50">Your Advantage</div>
      </div>
      
      {/* Table body */}
      {comparisonData.map((row, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-5 text-sm transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'} hover:bg-gray-50 ${index === comparisonData.length - 1 ? 'font-semibold bg-gray-50/50' : ''}`}
        >
          <div className="py-3 px-4 font-medium text-gray-800 border-b border-r border-gray-200">{row.category}</div>
          <div className="py-3 px-4 text-gray-600 border-b border-r border-gray-200">
            <div className="flex flex-col">
              <span className="font-medium">{row.inHouse.split('+')[0].trim()}</span>
              <span className="text-gray-500 text-xs mt-1">+ {row.inHouse.split('+')[1].trim()}</span>
            </div>
          </div>
          <div className="py-3 px-4 text-gray-600 border-b border-r border-gray-200">
            <div className="flex flex-col">
              <span className="font-medium">{row.agency.split('+')[0].trim()}</span>
              <span className="text-gray-500 text-xs mt-1">+ {row.agency.split('+')[1].trim()}</span>
            </div>
          </div>
          <div className={`py-3 px-4 font-bold text-primary-purple border-b border-r border-gray-200 bg-primary-purple/5 ${index === comparisonData.length - 1 ? 'bg-primary-purple/10' : ''}`}>
            <div className="flex flex-col">
              <span className="font-bold text-primary-purple">{row.aiVertise.split('+')[0].trim()}</span>
              {row.aiVertise.includes('+') ? (
                <span className="text-primary-purple/80 text-xs mt-1 font-medium">+ {row.aiVertise.split('+')[1].trim()}</span>
              ) : null}
            </div>
          </div>
          <div className={`py-3 px-4 font-medium text-primary-purple border-b border-gray-200 ${index === comparisonData.length - 1 ? 'bg-primary-purple/5' : ''}`}>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-primary-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{row.savings}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Mobile view cards (hidden on desktop)
  const renderMobileCards = () => (
    <div className="md:hidden space-y-4">
      {comparisonData.map((row, index) => (
        <div 
          key={index} 
          className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} border border-gray-200 ${index === comparisonData.length - 1 ? 'border-primary-purple/30 shadow-md' : ''}`}
        >
          <div className="bg-gradient-to-r from-primary-purple to-primary-pink text-white py-2 px-4 font-medium text-sm">
            {row.category}
          </div>
          <div className="divide-y divide-gray-200 text-sm">
            <div className="py-3 px-4 flex flex-col">
              <span className="font-medium text-gray-700">In-House Team</span>
              <span className="font-medium text-gray-700 mt-1">{row.inHouse.split('+')[0].trim()}</span>
              <span className="text-gray-500 text-xs">{row.inHouse.split('+')[1].trim()}</span>
            </div>
            <div className="py-3 px-4 flex flex-col">
              <span className="font-medium text-gray-700">Marketing Agency</span>
              <span className="font-medium text-gray-700 mt-1">{row.agency.split('+')[0].trim()}</span>
              <span className="text-gray-500 text-xs">{row.agency.split('+')[1].trim()}</span>
            </div>
            <div className="py-3 px-4 flex flex-col bg-primary-purple/5">
              <span className="font-medium text-primary-purple">AI-Vertise</span>
              <span className="font-bold text-primary-purple mt-1">{row.aiVertise.split('+')[0].trim()}</span>
              {row.aiVertise.includes('+') ? (
                <span className="text-primary-purple/80 text-xs font-medium">{row.aiVertise.split('+')[1].trim()}</span>
              ) : null}
            </div>
            <div className="py-3 px-4 bg-primary-purple/5 flex items-center text-primary-purple font-medium">
              <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{row.savings}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="cost-comparison" className="py-12 bg-soft-gradient">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'}`}>
          <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-primary-purple bg-primary-purple/10 rounded-full">SAVE THOUSANDS</span>
          <h2 className="text-3xl md:text-4xl mb-3 font-bold">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-sm" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
        </div>
        
        <div className="max-w-7xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}">
          {renderDesktopTable()}
          {renderMobileCards()}
        </div>
        
        {showCta && (
          <div className={`mt-10 text-center transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <a 
              href="#pricing" 
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary-purple to-primary-pink rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Start Saving Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
} 
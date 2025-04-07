'use client';

import React from 'react';

interface OptimizationSuggestionProps {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  icon: React.ReactNode;
}

const OptimizationSuggestion: React.FC<OptimizationSuggestionProps> = ({
  title,
  description,
  impact,
  icon,
}) => {
  const impactColors = {
    high: 'bg-green-100 text-green-800',
    medium: 'bg-blue-100 text-blue-800',
    low: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg mb-4 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-purple to-primary-blue rounded-full flex items-center justify-center text-white mr-4">
          {icon}
        </div>
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-md font-semibold">{title}</h4>
            <span className={`text-xs px-2 py-1 rounded-full ${impactColors[impact]}`}>
              {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
            </span>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mt-3 text-right">
        <button className="px-3 py-1 text-xs bg-white border border-primary-purple text-primary-purple rounded hover:bg-primary-purple hover:text-white transition-colors">
          Apply Suggestion
        </button>
      </div>
    </div>
  );
};

interface OptimizationSuggestionsProps {
  className?: string;
}

const OptimizationSuggestions: React.FC<OptimizationSuggestionsProps> = ({ className }) => {
  const suggestions = [
    {
      title: 'Add Video Content',
      description: 'Adding a short video showcasing your coffee preparation process could increase engagement by up to 45%. Video content performs especially well with your target demographic.',
      impact: 'high' as const,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Retarget Recent Visitors',
      description: 'Our AI detected 342 users who visited your website but didn\'t make a purchase. Creating a retargeting campaign for these users could increase conversion rates.',
      impact: 'high' as const,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
    },
    {
      title: 'Expand Geographic Reach',
      description: 'Consider expanding your targeting to include neighboring areas. Data shows similar demographics with potential customers just outside your current radius.',
      impact: 'medium' as const,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Optimize Ad Schedule',
      description: 'Your ads perform 32% better between 7-9am and 4-6pm. Adjusting your ad schedule to focus budget during these hours could improve ROI.',
      impact: 'medium' as const,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`optimization-suggestions ${className}`}>
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Our AI has analyzed your campaign performance and identified these opportunities to improve results:
        </p>
      </div>

      {suggestions.map((suggestion, index) => (
        <OptimizationSuggestion
          key={index}
          title={suggestion.title}
          description={suggestion.description}
          impact={suggestion.impact}
          icon={suggestion.icon}
        />
      ))}

      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded hover:shadow-md transition-shadow">
          Apply All High Impact Suggestions
        </button>
      </div>
    </div>
  );
};

export default OptimizationSuggestions; 
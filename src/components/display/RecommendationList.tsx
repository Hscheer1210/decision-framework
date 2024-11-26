// src/components/Display/RecommendationList.tsx
import React from 'react';

interface RecommendationListProps {
  recommendations: string[];
}

export const RecommendationList: React.FC<RecommendationListProps> = ({ 
  recommendations 
}) => {
  if (recommendations.length === 0) {
    return (
      <div className="text-center py-4 bg-gray-50 rounded-md">
        <p className="text-gray-500">
          No specific recommendations at this time.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {recommendations.map((recommendation, index) => (
        <div
          key={index}
          className="flex items-start space-x-3 p-4 bg-blue-50 rounded-md"
        >
          <div className="flex-shrink-0">
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-700">{recommendation}</p>
            {getActionableSteps(recommendation).map((step, stepIndex) => (
              <p
                key={stepIndex}
                className="mt-2 text-sm text-gray-500 pl-4 border-l-2 border-blue-200"
              >
                • {step}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function to generate actionable steps based on recommendations
const getActionableSteps = (recommendation: string): string[] => {
  // You can expand this to provide more specific actionable steps
  // based on different types of recommendations
  if (recommendation.includes('balance')) {
    return [
      'List all areas of life affected by this decision',
      'Consider creating a schedule to maintain important activities',
      'Identify potential trade-offs and mitigation strategies'
    ];
  }
  
  if (recommendation.includes('goals')) {
    return [
      'Review your short-term and long-term goals',
      'Identify potential conflicts or synergies',
      'Consider how this decision supports your growth trajectory'
    ];
  }
  
  if (recommendation.includes('sustainability')) {
    return [
      'Evaluate required resources and their availability',
      'Consider potential challenges and backup plans',
      'Assess long-term maintenance requirements'
    ];
  }

  return [
    'Break down the recommendation into smaller steps',
    'Set specific timeframes for implementation',
    'Identify resources needed for success'
  ];
};
// src/components/Charts/ScoreChart.tsx
import React from 'react';

interface ScoreChartProps {
  scores: {
    Balance: number;
    Alignment: number;
    Sustainability: number;
  };
}

export const ScoreChart: React.FC<ScoreChartProps> = ({ scores }) => {
  const maxScore = 10;

  return (
    <div className="space-y-4">
      {Object.entries(scores).map(([category, score]) => (
        <div key={category} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">{category}</span>
            <span className="text-sm font-medium text-gray-900">
              {score.toFixed(1)}/10
            </span>
          </div>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-500 ease-in-out"
              style={{ 
                width: `${(score / maxScore) * 100}%`,
                backgroundColor: getScoreColor(score)
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const getScoreColor = (score: number): string => {
  if (score >= 8) return '#22c55e'; // green-500
  if (score >= 6) return '#3b82f6'; // blue-500
  if (score >= 4) return '#f59e0b'; // amber-500
  return '#ef4444'; // red-500
};
// src/components/Layout/CurrentStateVisualization.tsx
import React from 'react';
import { useDecisionStore } from '../../state/store';
import { LifeWheelChart } from '../visualization/LifeWheelChart';

export const CurrentStateVisualization: React.FC = () => {
  const { currentState, nextStep, previousStep } = useDecisionStore();

  if (!currentState) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-red-600">No current state data available.</p>
        <button
          onClick={() => previousStep()}
          className="mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Your Life Balance Wheel</h2>
      <p className="text-gray-600 mb-6">
        This visualization shows your current satisfaction levels across different life areas.
      </p>

      <div className="mb-8">
        <LifeWheelChart data={currentState} />
      </div>

      {/* Summary of areas needing attention */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Areas of Focus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(currentState)
            .sort(([, a], [, b]) => a - b) // Sort by satisfaction level
            .map(([area, value]) => (
              <div 
                key={area} 
                className={`p-3 rounded-lg ${
                  value < 5 ? 'bg-red-50' : 
                  value < 7 ? 'bg-yellow-50' : 
                  'bg-green-50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{area.replace(/_/g, ' ')}</span>
                  <span className={`px-2 py-1 rounded ${
                    value < 5 ? 'bg-red-100 text-red-800' : 
                    value < 7 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {value}/10
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          onClick={() => previousStep()}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
        
        <button
          onClick={() => nextStep()}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
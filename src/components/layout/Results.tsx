// src/components/Layout/Results.tsx
import React from 'react';
import { useDecisionStore } from '../../state/store';
import { ScoreChart } from '../charts/ScoreChart';
import { RecommendationList } from '../display/RecommendationList';

export const Results: React.FC = () => {
  const { analysisResults, context, resetState } = useDecisionStore();

  React.useEffect(() => {
    console.log('[Results] Analysis results:', analysisResults);
    console.log('[Results] Context:', context);

    if (!analysisResults) {
      console.warn('[Results] No analysis results available');
      return;
    }

    if (!context) {
      console.warn('[Results] No context available');
      return;
    }
  }, [analysisResults, context]);

  if (!analysisResults) {
    console.warn('[Results] Rendering skipped - no analysis results');
    return null;
  }

  const handleReset = () => {
    console.log('[Results] Resetting state');
    try {
      resetState();
      console.log('[Results] State reset successful');
    } catch (error) {
      console.error('[Results] Error resetting state:', error);
    }
  };

  const handleExport = () => {
    console.log('[Results] Exporting results');
    try {
      window.print();
      console.log('[Results] Export successful');
    } catch (error) {
      console.error('[Results] Error exporting results:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Decision Analysis Results</h2>

      {/* Overall Score */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Overall Score</h3>
        <div className="text-4xl font-bold text-center text-blue-600">
          {analysisResults.overall.toFixed(1)}/10
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Score Breakdown</h3>
        <ScoreChart
          scores={{
            Balance: analysisResults.balanceScore,
            Alignment: analysisResults.alignmentScore,
            Sustainability: analysisResults.sustainabilityScore
          }}
        />
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
        <RecommendationList recommendations={analysisResults.recommendations} />
      </div>

      {/* Decision Context Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Decision Context</h3>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="font-medium">Decision Description:</p>
          <p className="mb-4">{context?.description}</p>
          
          {/* Add Impacted Areas section */}
            <p className="font-medium">Impacted Areas:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {context?.impactedAreas.map(area => (
                    <div key={area} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span>{area.replace(/_/g, ' ')}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <button
          onClick={handleReset}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
        >
          Start New Assessment
        </button>
        
        <button
          onClick={handleExport}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Export Results
        </button>
      </div>
    </div>
  );
};
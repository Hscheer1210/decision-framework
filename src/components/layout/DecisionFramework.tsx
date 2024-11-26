// src/components/Layout/DecisionFramework.tsx
import React from 'react';
import { useDecisionStore } from '../../state/store';
import { ProgressBar } from './ProgressBar';
import { DecisionContext } from './DecisionContext'; 
import { AreaPrioritization } from './AreaPrioritization';
import { CoreValuesAssessment } from './CoreValuesAssessment';
import { CurrentStateEvaluation } from './CurrentStateEvaluation';
import { CurrentStateVisualization } from './CurrentStateVisualization';
import { ObjectiveMetricsForm } from './ObjectiveMetrics';
import { SubjectiveAssessment } from './SubjectiveAssessment';
import { Results } from './Results';

export const DecisionFramework: React.FC = () => {
  const { currentStep, context, priorities, coreValues } = useDecisionStore();

  // Helper function to check if user can proceed to satisfaction rankings
  const canAccessSatisfactionRankings = () => {
    return context && priorities && coreValues.length > 0;
  };

  // Render appropriate component based on step and completion status
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <DecisionContext />;
      case 1:
        return context ? <AreaPrioritization /> : <DecisionContext />;
      case 2:
        return priorities ? <CoreValuesAssessment /> : <AreaPrioritization />;
      case 3:
        return canAccessSatisfactionRankings() ? <CurrentStateEvaluation /> : <CoreValuesAssessment />;
      case 4:
        return canAccessSatisfactionRankings() ? <CurrentStateVisualization /> : <CoreValuesAssessment />;
      case 5:
        return <ObjectiveMetricsForm />;
      case 6:
        return <SubjectiveAssessment />;
      case 7:
        return <Results />;
      default:
        return <DecisionContext />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <ProgressBar 
            steps={[
                'Decision Context',
                'Priorities',
                'Core Values',
                'Current State',
                'Life Balance',
                'Objective Metrics',
                'Subjective Assessment',
                'Results'
            ]} currentStep={currentStep} />

            {renderCurrentStep()}
      </div>
    </div>
  );
};
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
  const { currentStep } = useDecisionStore();

  const steps = [
    // Baseline Information
    'Decision Context',
    'Priorities',
    'Core Values',
    'Current State',
    'Life Balance',

    // Analysis
    'Objective Metrics',
    'Subjective Assessment',
    'Results'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <ProgressBar 
            steps={steps}
            currentStep={currentStep} 
        />

        {/* Baseline Information */}
        {currentStep === 0 && <DecisionContext />}
        {currentStep === 1 && <AreaPrioritization />}
        {currentStep === 2 && <CoreValuesAssessment />}
        {currentStep === 0 && <CurrentStateEvaluation />}
        {currentStep === 1 && <CurrentStateVisualization />}


        {/* Analysis */}
        {currentStep === 4 && <ObjectiveMetricsForm />}
        {currentStep === 5 && <SubjectiveAssessment />}
        {currentStep === 6 && <Results />}
      </div>
    </div>
  );
};
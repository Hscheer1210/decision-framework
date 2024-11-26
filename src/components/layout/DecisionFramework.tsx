// src/components/Layout/DecisionFramework.tsx
import React from 'react';
import { useDecisionStore } from '../../state/store';
import { ProgressBar } from './ProgressBar';
import { ObjectiveMetricsForm } from './ObjectiveMetrics';
import { SubjectiveAssessment } from './SubjectiveAssessment';
import { Results } from './Results';
import { CurrentStateEvaluation } from './CurrentStateEvaluation';
import { CurrentStateVisualization } from './CurrentStateVisualization';
import { DecisionContext } from './DecisionContext'; 
import { ImpactAreaSelection } from './ImpactAreaSelection'; 

export const DecisionFramework: React.FC = () => {
  const { currentStep } = useDecisionStore();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <ProgressBar 
            steps={[
                'Current State',
                'State Analysis',
                'Decision Context',
                'Impact Areas',
                'Objective Metrics',
                'Subjective Assessment',
                'Results'
            ]}
            currentStep={currentStep} 
        />

        {currentStep === 0 && <CurrentStateEvaluation />}
        {currentStep === 1 && <CurrentStateVisualization />}
        {currentStep === 2 && <DecisionContext />}
        {currentStep === 3 && <ImpactAreaSelection />}
        {currentStep === 4 && <ObjectiveMetricsForm />}
        {currentStep === 5 && <SubjectiveAssessment />}
        {currentStep === 6 && <Results />}
      </div>
    </div>
  );
};
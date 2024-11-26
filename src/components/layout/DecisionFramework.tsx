// src/components/Layout/DecisionFramework.tsx
import React from 'react';
import { useDecisionStore } from '../../state/store';
import { ProgressBar } from './ProgressBar';
import { InitialContext } from './InitialContext';
import { ObjectiveMetricsForm } from './ObjectiveMetrics';
import { SubjectiveAssessment } from './SubjectiveAssessment';
import { Results } from './Results';

export const DecisionFramework: React.FC = () => {
  const { currentStep } = useDecisionStore();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <ProgressBar currentStep={currentStep} />
        {currentStep === 0 && <InitialContext />}
        {currentStep === 1 && <ObjectiveMetricsForm />}
        {currentStep === 2 && <SubjectiveAssessment />}
        {currentStep === 3 && <Results />}
      </div>
    </div>
  );
};
// src/components/Layout/ProgressBar.tsx
import React from 'react';
import { useDecisionStore } from '../../state/store';

interface ProgressBarProps {
  steps: string[];
  currentStep: number;
}

const steps = [
  { id: 0, name: 'Context' },
  { id: 1, name: 'Objective Metrics' },
  { id: 2, name: 'Subjective Assessment' },
  { id: 3, name: 'Results' }
];

export const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
    const { context, priorities, coreValues } = useDecisionStore();
    
    // Helper function to determine if a step is accessible
    const isStepAccessible = (stepIndex: number) => {
        switch (stepIndex) {
            case 0: // Decision Context
                return true;
            case 1: // Priorities
                return !!context;
            case 2: // Core Values
                return !!context && !!priorities;
            case 3: // Current State
            case 4: // Life Balance
                return !!context && !!priorities && coreValues.length > 0;
            case 5: // Objective Metrics
            case 6: // Subjective Assessment
            case 7: // Results
                return !!context && !!priorities && coreValues.length > 0;
            default:
                return false;
        }
    };

    // Helper function to get step status
    const getStepStatus = (index: number) => {
        if (currentStep > index) return 'completed';
        if (currentStep === index && isStepAccessible(index)) return 'current';
        if (isStepAccessible(index)) return 'upcoming';
        return 'locked';
    };

    return (
        <div className="mb-12">
          {/* Stage Labels */}
          <div className="flex justify-between mb-8">
            <div className="text-lg font-semibold text-blue-600">
              Baseline Information
            </div>
            <div className="text-lg font-semibold text-blue-600">
              Metrics & Scoring
            </div>
          </div>
    
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200 w-full" />
            
            {/* Steps */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const status = getStepStatus(index);
                
                return (
                  <div key={index} className="flex flex-col items-center">
                    {/* Step Circle */}
                    <div
                      className={`
                        relative z-10 flex items-center justify-center w-10 h-10 rounded-full 
                        transition-all duration-200
                        ${status === 'completed' ? 'bg-blue-600' : 
                          status === 'current' ? 'bg-blue-600' : 
                          status === 'upcoming' ? 'bg-white border-2 border-blue-600' : 
                          'bg-gray-200 cursor-not-allowed'}
                      `}
                    >
                      {status === 'completed' ? (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : status === 'locked' ? (
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      ) : (
                        <span className={`
                          font-medium text-sm
                          ${status === 'current' ? 'text-white' : 
                            status === 'upcoming' ? 'text-blue-600' : 
                            'text-gray-500'}
                        `}>
                          {index + 1}
                        </span>
                      )}
                    </div>
    
                    {/* Step Label */}
                    <div className="mt-3 text-center text-blue-600">
                      <span className={`
                        text-sm font-medium
                        ${status === 'completed' || status === 'current' ? 'text-blue-600' :
                          status === 'upcoming' ? 'text-gray-600' :
                          'text-gray-400'}
                      `}>
                        {step}
                      </span>
                    </div>
    
                    {/* Stage Separator */}
                    {index === 4 && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-px h-8 bg-gray-300"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    );
};
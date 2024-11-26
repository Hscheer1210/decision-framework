// src/state/store.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { 
  DecisionContext, 
  ObjectiveMetrics, 
  SubjectiveMetrics, 
  AnalysisResults,
  WheelOfLife 
} from '../types';

interface DecisionState {
  // State
  currentState: Record<WheelOfLife, number> | null;
  context: DecisionContext | null;
  objectiveMetrics: ObjectiveMetrics | null;
  subjectiveMetrics: SubjectiveMetrics | null;
  analysisResults: AnalysisResults | null;
  currentStep: number;
  isProcessing: boolean;
  errors: string[];

  // Actions
  setCurrentState: (satisfaction: Record<WheelOfLife, number>) => void;
  setContext: (context: DecisionContext) => void;
  setObjectiveMetrics: (metrics: ObjectiveMetrics) => void;
  setSubjectiveMetrics: (metrics: SubjectiveMetrics) => void;
  setAnalysisResults: (results: AnalysisResults) => void;
  nextStep: () => void;
  previousStep: () => void;
  setProcessing: (isProcessing: boolean) => void;
  addError: (error: string) => void;
  clearErrors: () => void;
  resetState: () => void;
}

const initialState = {
  context: null,
  objectiveMetrics: null,
  subjectiveMetrics: null,
  analysisResults: null,
  currentStep: 0,
  isProcessing: false,
  errors: [],
  currentState: null,
};

// Debug helper
const logStateChange = (action: string, prevState: any, nextState: any) => {
  console.group(`[Store] ${action}`);
  console.log('Previous State:', prevState);
  console.log('Next State:', nextState);
  console.log('Changed Properties:', 
    Object.keys(nextState).filter(key => prevState[key] !== nextState[key])
  );
  console.groupEnd();
};

export const useDecisionStore = create<DecisionState>()(
    devtools(
        (set, get) => ({
      // Initial state
      ...initialState,

      // Actions
      setCurrentState: (satisfaction) => 
        set({ currentState: satisfaction }),
      setContext: (context: DecisionContext) => {
        console.log('[Store] Setting context:', context);
        set((state) => {
          const nextState = { 
            context,
            errors: state.errors.filter(e => !e.includes('context'))
          };
          logStateChange('setContext', state, nextState);
          return nextState;
        });
      },

      setObjectiveMetrics: (metrics: ObjectiveMetrics) => {
        console.log('[Store] Setting objective metrics:', metrics);
        set((state) => {
          const nextState = { 
            objectiveMetrics: metrics,
            errors: state.errors.filter(e => !e.includes('metrics'))
          };
          logStateChange('setObjectiveMetrics', state, nextState);
          return nextState;
        });
      },

      setSubjectiveMetrics: (metrics: SubjectiveMetrics) => {
        console.log('[Store] Setting subjective metrics:', metrics);
        set((state) => {
          const nextState = { 
            subjectiveMetrics: metrics,
            errors: state.errors.filter(e => !e.includes('subjective'))
          };
          logStateChange('setSubjectiveMetrics', state, nextState);
          return nextState;
        });
      },

      setAnalysisResults: (results: AnalysisResults) => {
        console.log('[Store] Setting analysis results:', results);
        if (!results) {
          console.warn('[Store] Attempting to set null analysis results');
          return;
        }
        set((state) => {
          const nextState = { analysisResults: results };
          logStateChange('setAnalysisResults', state, nextState);
          return nextState;
        });
      },

      nextStep: () => {
        const currentStep = get().currentStep;
        console.log('[Store] Moving to next step:', currentStep + 1);
        set((state) => {
          const nextState = { currentStep: state.currentStep + 1 };
          logStateChange('nextStep', state, nextState);
          return nextState;
        });
      },

      previousStep: () => {
        const currentStep = get().currentStep;
        console.log('[Store] Moving to previous step:', Math.max(0, currentStep - 1));
        set((state) => {
          const nextState = { currentStep: Math.max(0, state.currentStep - 1) };
          logStateChange('previousStep', state, nextState);
          return nextState;
        });
      },

      setProcessing: (isProcessing: boolean) => {
        console.log('[Store] Setting processing state:', isProcessing);
        set((state) => {
          const nextState = { isProcessing };
          logStateChange('setProcessing', state, nextState);
          return nextState;
        });
      },

      addError: (error: string) => {
        console.error('[Store] Adding error:', error);
        set((state) => {
          const nextState = { errors: [...state.errors, error] };
          logStateChange('addError', state, nextState);
          return nextState;
        });
      },

      clearErrors: () => {
        console.log('[Store] Clearing errors');
        set((state) => {
          const nextState = { errors: [] };
          logStateChange('clearErrors', state, nextState);
          return nextState;
        });
      },

      resetState: () => {
        console.log('[Store] Resetting state');
        set((state) => {
          logStateChange('resetState', state, initialState);
          return initialState;
        });
      }
    }),
    {
      name: 'decision-framework-store',
      enabled: process.env.NODE_ENV === 'development'
    }
));


// Selectors with logging
export const selectContext = (state: DecisionState) => {
  console.log('[Store] Selecting context:', state.context);
  return state.context;
};

export const selectObjectiveMetrics = (state: DecisionState) => {
  console.log('[Store] Selecting objective metrics:', state.objectiveMetrics);
  return state.objectiveMetrics;
};

export const selectSubjectiveMetrics = (state: DecisionState) => {
  console.log('[Store] Selecting subjective metrics:', state.subjectiveMetrics);
  return state.subjectiveMetrics;
};

export const selectAnalysisResults = (state: DecisionState) => {
  console.log('[Store] Selecting analysis results:', state.analysisResults);
  return state.analysisResults;
};

export const selectCurrentStep = (state: DecisionState) => {
  console.log('[Store] Selecting current step:', state.currentStep);
  return state.currentStep;
};

export const selectErrors = (state: DecisionState) => {
  console.log('[Store] Selecting errors:', state.errors);
  return state.errors;
};

// Add a debug helper
export const debugStore = () => {
  const state = useDecisionStore.getState();
  console.group('Current Store State');
  console.log('Context:', state.context);
  console.log('Objective Metrics:', state.objectiveMetrics);
  console.log('Subjective Metrics:', state.subjectiveMetrics);
  console.log('Analysis Results:', state.analysisResults);
  console.log('Current Step:', state.currentStep);
  console.log('Is Processing:', state.isProcessing);
  console.log('Errors:', state.errors);
  console.groupEnd();
};
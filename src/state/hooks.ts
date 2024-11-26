// src/state/hooks.ts
import { useCallback } from 'react';
import { useDecisionStore } from './store';
import { DecisionContext, ObjectiveMetrics, SubjectiveMetrics } from '../types';

export const useDecisionFlow = () => {
  const store = useDecisionStore();

  const startNewDecision = useCallback(async (context: DecisionContext) => {
    store.setProcessing(true);
    try {
      store.clearErrors();
      store.setContext(context);
      store.nextStep();
    } catch (error) {
      store.addError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      store.setProcessing(false);
    }
  }, []);

  const submitObjectiveMetrics = useCallback(async (metrics: ObjectiveMetrics) => {
    store.setProcessing(true);
    try {
      store.setObjectiveMetrics(metrics);
      store.nextStep();
    } catch (error) {
      store.addError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      store.setProcessing(false);
    }
  }, []);

  const submitSubjectiveMetrics = useCallback(async (metrics: SubjectiveMetrics) => {
    store.setProcessing(true);
    try {
      store.setSubjectiveMetrics(metrics);
      store.nextStep();
    } catch (error) {
      store.addError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      store.setProcessing(false);
    }
  }, []);

  return {
    startNewDecision,
    submitObjectiveMetrics,
    submitSubjectiveMetrics,
    currentStep: store.currentStep,
    isProcessing: store.isProcessing,
    errors: store.errors
  };
};
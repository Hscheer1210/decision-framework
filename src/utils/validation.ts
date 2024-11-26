// src/utils/validation.ts
import { ObjectiveMetrics, SubjectiveMetrics } from '../types';

export const validateObjectiveMetrics = (
  metrics: ObjectiveMetrics
): string[] => {
  const errors: string[] = [];

  // Financial validation
  if (metrics.financial.immediate.costs < 0) {
    errors.push('Costs cannot be negative');
  }

  // Time validation
  if (metrics.time.immediate.setup < 0) {
    errors.push('Setup time cannot be negative');
  }

  if (metrics.time.ongoing.weekly < 0 || metrics.time.ongoing.weekly > 168) {
    errors.push('Weekly hours must be between 0 and 168');
  }

  return errors;
};

export const validateSubjectiveMetrics = (
  metrics: SubjectiveMetrics
): string[] => {
  const errors: string[] = [];

  // Current state validation
  Object.entries(metrics.currentState).forEach(([area, value]) => {
    if (value < 0 || value > 10) {
      errors.push(`${area} satisfaction must be between 0 and 10`);
    }
  });

  return errors;
};
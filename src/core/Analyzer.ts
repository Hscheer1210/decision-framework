// src/core/Analyzer.ts
import { ObjectiveMetrics, SubjectiveMetrics, WheelOfLife } from '../types';

export class Analyzer {
  static calculateResourceImpact(
    metrics: ObjectiveMetrics,
    currentState: Record<WheelOfLife, number>
  ): number {
    const financialImpact = this.calculateFinancialImpact(metrics.financial);
    const timeImpact = this.calculateTimeImpact(metrics.time);
    const resourceImpact = this.calculateResourceUtilization(metrics.resources);

    return (financialImpact + timeImpact + resourceImpact) / 3;
  }

  private static calculateFinancialImpact(financialMetrics: ObjectiveMetrics['financial']): number {
    const immediateImpact = 
      (financialMetrics.immediate.income - financialMetrics.immediate.costs) / 
      financialMetrics.immediate.investments;

    const ongoingImpact = 
      Object.values(financialMetrics.ongoing.monthly).reduce((sum, val) => sum + val, 0) +
      Object.values(financialMetrics.ongoing.annual).reduce((sum, val) => sum + val, 0) / 12;

    return (immediateImpact + ongoingImpact) / 2;
  }

  private static calculateTimeImpact(timeMetrics: ObjectiveMetrics['time']): number {
    const immediateTimeImpact = 
      (timeMetrics.immediate.setup + timeMetrics.immediate.transition) / 2;

    const ongoingTimeImpact = 
      (timeMetrics.ongoing.weekly * 4 + timeMetrics.ongoing.monthly) / 5;

    return (immediateTimeImpact + ongoingTimeImpact) / 2;
  }

  private static calculateResourceUtilization(
    resourceMetrics: ObjectiveMetrics['resources']
  ): number {
    const requiredResources = resourceMetrics.required.length;
    const availableResources = resourceMetrics.available.length;
    const gaps = resourceMetrics.gaps.length;

    return (availableResources / (requiredResources + gaps)) * 10;
  }
}
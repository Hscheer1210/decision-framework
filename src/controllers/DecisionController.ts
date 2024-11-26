// src/controllers/DecisionController.ts
import { DecisionFramework } from '../core/DecisionFramework';
import { Analyzer } from '../core/Analyzer';
import { useDecisionStore } from '../state/store';
import {
  DecisionContext,
  ObjectiveMetrics,
  SubjectiveMetrics,
  AnalysisResults,
  WheelOfLife
} from '../types';

export class DecisionController {
  private framework: DecisionFramework;
  private analyzer: Analyzer;

  constructor() {
    this.framework = new DecisionFramework();
    this.analyzer = new Analyzer();
  }

  async processDecision(
    context: DecisionContext,
    objectiveMetrics: ObjectiveMetrics,
    subjectiveMetrics: SubjectiveMetrics
  ): Promise<AnalysisResults> {
    try {
      // Initialize framework with context
      await this.framework.initialize(context);

      // Process metrics
      await this.framework.processObjectiveMetrics(objectiveMetrics);
      await this.framework.processSubjectiveMetrics(subjectiveMetrics);

      // Generate analysis
      const results = await this.framework.generateAnalysis();

      return results;
    } catch (error) {
      throw new Error(`Failed to process decision: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  validateMetrics(metrics: ObjectiveMetrics | SubjectiveMetrics): string[] {
    const errors: string[] = [];

    if ('financial' in metrics) {
      // Validate objective metrics
      const objMetrics = metrics as ObjectiveMetrics;
      if (!objMetrics.financial.immediate.costs && objMetrics.financial.immediate.costs !== 0) {
        errors.push('Immediate costs must be specified');
      }
      if (!objMetrics.time.immediate.setup && objMetrics.time.immediate.setup !== 0) {
        errors.push('Setup time must be specified');
      }
    } else {
      // Validate subjective metrics
      const subjMetrics = metrics as SubjectiveMetrics;
      if (!subjMetrics.currentState) {
        errors.push('Current state assessment is required');
      }
    }

    return errors;
  }
}
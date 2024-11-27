// src/controllers/QuestionController.ts
import {
    Question,
    WheelOfLife,
    TimeFrame,
    PriorityLevel,
    QuestionType,
} from '../types';

// Import all question banks
import { careerQuestions } from '../data/questions/careerQuestions';
import { financeQuestions } from '../data/questions/financeQuestions';
import { healthQuestions } from '../data/questions/healthQuestions';
import { relationshipQuestions } from '../data/questions/relationshipQuestions';
import { personalGrowthQuestions } from '../data/questions/personalGrowthQuestions';
import { lifestyleQuestions } from '../data/questions/lifestyleQuestions';
import { environmentQuestions } from '../data/questions/environmentQuestions';
import { coreValuesQuestions } from '../data/questions/coreValuesQuestions';

export class QuestionController {
    private questionBank: Map<WheelOfLife, Question[]>;

    constructor() {
        this.questionBank = new Map([
            [WheelOfLife.CAREER, careerQuestions],
            [WheelOfLife.FINANCE, financeQuestions],
            [WheelOfLife.HEALTH, healthQuestions],
            [WheelOfLife.RELATIONSHIPS, relationshipQuestions],
            [WheelOfLife.PERSONAL_GROWTH, personalGrowthQuestions],
            [WheelOfLife.LIFESTYLE, lifestyleQuestions],
            [WheelOfLife.ENVIRONMENT, environmentQuestions],
            [WheelOfLife.CORE_VALUES, coreValuesQuestions]
        ]);

        this.validateQuestionBank();
    }

    private validateQuestionBank(): void {
        Object.values(WheelOfLife).forEach(area => {
          const questions = this.questionBank.get(area);
          if (!questions || questions.length === 0) {
            console.warn(`[QuestionController] No questions defined for area: ${area}`);
          }
        });
    }

    generateQuestionSequence(
        timeframe: TimeFrame,
        priorities: WheelOfLife[],
        coreValues: string[],
    ): Question[] {
        try {
            let questions: Question[] = [];

            // Get questions for each priority area
            priorities.forEach((area, index) => {
                const areaQuestions = this.getQuestionsForArea(
                    area,
                    timeframe,
                    index === 0 ? PriorityLevel.HIGH : PriorityLevel.MEDIUM,
                    coreValues
                );
                questions = questions.concat(areaQuestions);
            });

            // Get baseline questions for other impacted areas
            Object.values(WheelOfLife)
                .filter(area => !priorities.includes(area))
                .forEach(area => {
                    const baselineQuestions = this.getQuestionsForArea(
                        area,
                        timeframe,
                        PriorityLevel.LOW,
                        coreValues
                    );
                    questions = questions.concat(baselineQuestions);
                });

            // Add value-specific questions
            const valueQuestions = this.getValueSpecificQuestions(coreValues, timeframe);
            questions = questions.concat(valueQuestions);

            return this.optimizeQuestionSequence(questions);
        } catch (error) {
            console.error('[QuestionController] Error generating questions:', error);
            return [];
        }
    }

    private getQuestionsForArea(
        area: WheelOfLife,
        timeframe: TimeFrame,
        priorityLevel: PriorityLevel,
        coreValues: string[]
    ): Question[] {
        const areaQuestions = this.questionBank.get(area) || [];

        return areaQuestions.filter(question => {
            // Match timeframe
            const timeframeMatch = question.timeframe === timeframe || question.timeframe === TimeFrame.BOTH;

            // Match priority level
            const priorityMatch = this.isPriorityLevelCompatible(question.priorityLevel, priorityLevel);

            // Check value alignment
            const valueAlignment = this.calculateValueAlignment(question, coreValues);

            return timeframeMatch && priorityMatch && valueAlignment > 0.3; // Threshold for value alignment
        });
    }

    private isPriorityLevelCompatible(
        questionPriority: PriorityLevel,
        contextPriority: PriorityLevel
    ): boolean {
        const priorityLevels = {
            [PriorityLevel.HIGH]: 3,
            [PriorityLevel.MEDIUM]: 2,
            [PriorityLevel.LOW]: 1
        };

        return priorityLevels[questionPriority] <= priorityLevels[contextPriority];
    }

    private calculateValueAlignment(question: Question, userValues: string[]): number {
        if (!question.valueCategories.length || !userValues.length) return 0;

        const matchingValues = question.valueCategories
            .filter(category => userValues.includes(category));

        return matchingValues.length / question.valueCategories.length;
    }

    private getValueSpecificQuestions(
        values: string[],
        timeframe: TimeFrame
    ): Question[] {
        // Implementation for value-specific questions
        // This would pull from a separate bank of value-focused questions
        return [];
    }
    private optimizeQuestionSequence(questions: Question[]): Question[] {
        return questions
            .sort((a, b) => {
                // Sort by priority level first
                if (a.priorityLevel !== b.priorityLevel) {
                    return this.getPriorityWeight(b.priorityLevel) - this.getPriorityWeight(a.priorityLevel);
                }
                // Then by question weight
                return b.weight - a.weight;
            })
            .slice(0, this.getMaxQuestions(questions.length)); // Limit total number of questions
    }

    private getPriorityWeight(priority: PriorityLevel): number {
        switch (priority) {
            case PriorityLevel.HIGH: return 3;
            case PriorityLevel.MEDIUM: return 2;
            case PriorityLevel.LOW: return 1;
            default: return 0;
        }
    }

    private getMaxQuestions(totalAvailable: number): number {
        // Limit questions based on total available to prevent survey fatigue
        if (totalAvailable <= 10) return totalAvailable;
        if (totalAvailable <= 20) return Math.ceil(totalAvailable * 0.8);
        return Math.min(Math.ceil(totalAvailable * 0.6), 25);
    }
}
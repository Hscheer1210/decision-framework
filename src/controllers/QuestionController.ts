// src/controllers/QuestionController.ts
import { WheelOfLife, ImpactLevel } from '../types';

// src/controllers/QuestionController.ts
interface ScaleParams {
    min: number;
    max: number;
    minLabel: string;
    maxLabel: string;
    midLabel: string;
    markers: Array<{
      value: number;
      label: string;
    }>;
  }
  
  interface Question {
    id: string;
    text: string;
    description: string;
    type: 'text' | 'number' | 'scale' | 'multiselect';
    scaleParams?: ScaleParams;
    options?: string[];
    required: boolean;
    category: WheelOfLife;
    subCategory?: string;
  }
  
  export class QuestionController {
    private questionBank: Map<WheelOfLife, Question[]>;
  
    constructor() {
      this.questionBank = this.initializeQuestionBank();
      this.validateQuestionBank(this.questionBank);
    }
  
    private initializeQuestionBank(): Map<WheelOfLife, Question[]> {
      const bank = new Map<WheelOfLife, Question[]>();
  
      // CAREER Questions
      bank.set(WheelOfLife.CAREER, [
        {
          id: 'career-growth',
          text: 'Professional Growth Impact',
          description: 'How will this decision affect your professional growth opportunities?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Limits Growth',
            maxLabel: 'Accelerates Growth',
            midLabel: 'Maintains Current Growth',
            markers: [
              { value: 0, label: 'Significantly Hinders Growth' },
              { value: 5, label: 'Maintains Status Quo' },
              { value: 10, label: 'Exceptional Growth Opportunity' }
            ]
          },
          required: true,
          category: WheelOfLife.CAREER
        },
        {
          id: 'career-advancement',
          text: 'Career Advancement',
          description: 'How will this impact your career advancement prospects?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Limits Advancement',
            maxLabel: 'Enhances Advancement',
            midLabel: 'Neutral Impact',
            markers: [
              { value: 0, label: 'May Set Back Career' },
              { value: 5, label: 'Maintains Current Path' },
              { value: 10, label: 'Opens New Opportunities' }
            ]
          },
          required: true,
          category: WheelOfLife.CAREER
        }
      ]);
  
      // FINANCE Questions
      bank.set(WheelOfLife.FINANCE, [
        {
          id: 'finance-security',
          text: 'Financial Security Impact',
          description: 'How will this affect your financial security?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Reduces Security',
            maxLabel: 'Enhances Security',
            midLabel: 'Maintains Security',
            markers: [
              { value: 0, label: 'High Financial Risk' },
              { value: 5, label: 'No Change to Security' },
              { value: 10, label: 'Significantly More Secure' }
            ]
          },
          required: true,
          category: WheelOfLife.FINANCE
        },
        {
          id: 'finance-resources',
          text: 'Resource Requirements',
          description: 'What level of financial resources will this require?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Minimal Resources',
            maxLabel: 'Substantial Resources',
            midLabel: 'Moderate Resources',
            markers: [
              { value: 0, label: 'Minimal Investment' },
              { value: 5, label: 'Moderate Investment' },
              { value: 10, label: 'Major Investment' }
            ]
          },
          required: true,
          category: WheelOfLife.FINANCE
        }
      ]);
  
      // HEALTH Questions
      bank.set(WheelOfLife.HEALTH, [
        {
          id: 'health-stress',
          text: 'Stress Impact',
          description: 'How will this affect your stress levels?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Reduces Stress',
            maxLabel: 'Increases Stress',
            midLabel: 'Neutral Impact',
            markers: [
              { value: 0, label: 'Stress Relief' },
              { value: 5, label: 'No Change' },
              { value: 10, label: 'High Stress' }
            ]
          },
          required: true,
          category: WheelOfLife.HEALTH
        },
        {
          id: 'health-balance',
          text: 'Work-Life Balance',
          description: 'How will this affect your work-life balance?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Reduces Balance',
            maxLabel: 'Improves Balance',
            midLabel: 'Maintains Balance',
            markers: [
              { value: 0, label: 'Significant Imbalance' },
              { value: 5, label: 'No Change' },
              { value: 10, label: 'Much Better Balance' }
            ]
          },
          required: true,
          category: WheelOfLife.HEALTH
        }
      ]);
  
      // RELATIONSHIPS Questions
      bank.set(WheelOfLife.RELATIONSHIPS, [
        {
          id: 'relationships-time',
          text: 'Time for Relationships',
          description: 'How will this affect time available for key relationships?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Reduces Time',
            maxLabel: 'Increases Time',
            midLabel: 'No Change',
            markers: [
              { value: 0, label: 'Significantly Less Time' },
              { value: 5, label: 'Same Time Available' },
              { value: 10, label: 'Much More Time' }
            ]
          },
          required: true,
          category: WheelOfLife.RELATIONSHIPS
        },
        {
          id: 'relationships-quality',
          text: 'Relationship Quality',
          description: 'How will this impact the quality of your relationships?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'May Strain Relations',
            maxLabel: 'Strengthens Relations',
            midLabel: 'Neutral Impact',
            markers: [
              { value: 0, label: 'Could Harm Relations' },
              { value: 5, label: 'No Impact' },
              { value: 10, label: 'Enriches Relations' }
            ]
          },
          required: true,
          category: WheelOfLife.RELATIONSHIPS
        }
      ]);
  
      // PERSONAL_GROWTH Questions
      bank.set(WheelOfLife.PERSONAL_GROWTH, [
        {
          id: 'growth-learning',
          text: 'Learning Opportunities',
          description: 'What level of personal growth opportunities does this present?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Limited Learning',
            maxLabel: 'Extensive Learning',
            midLabel: 'Moderate Learning',
            markers: [
              { value: 0, label: 'Minimal Growth' },
              { value: 5, label: 'Some Growth' },
              { value: 10, label: 'Significant Growth' }
            ]
          },
          required: true,
          category: WheelOfLife.PERSONAL_GROWTH
        },
        {
          id: 'growth-fulfillment',
          text: 'Personal Fulfillment',
          description: 'How fulfilling would this be for your personal development?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Not Fulfilling',
            maxLabel: 'Highly Fulfilling',
            midLabel: 'Moderately Fulfilling',
            markers: [
              { value: 0, label: 'Unfulfilling' },
              { value: 5, label: 'Somewhat Fulfilling' },
              { value: 10, label: 'Deeply Fulfilling' }
            ]
          },
          required: true,
          category: WheelOfLife.PERSONAL_GROWTH
        }
      ]);
  
      // RECREATION Questions
      bank.set(WheelOfLife.RECREATION, [
        {
          id: 'recreation-time',
          text: 'Leisure Time Impact',
          description: 'How will this affect your leisure time?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Reduces Leisure Time',
            maxLabel: 'Increases Leisure Time',
            midLabel: 'No Change',
            markers: [
              { value: 0, label: 'Much Less Free Time' },
              { value: 5, label: 'Same Amount of Time' },
              { value: 10, label: 'Much More Free Time' }
            ]
          },
          required: true,
          category: WheelOfLife.RECREATION
        },
        {
          id: 'recreation-quality',
          text: 'Recreation Quality',
          description: 'How will this affect the quality of your recreational activities?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Lower Quality',
            maxLabel: 'Higher Quality',
            midLabel: 'Same Quality',
            markers: [
              { value: 0, label: 'Diminished Quality' },
              { value: 5, label: 'No Change' },
              { value: 10, label: 'Enhanced Quality' }
            ]
          },
          required: true,
          category: WheelOfLife.RECREATION
        }
      ]);
  
      // ENVIRONMENT Questions
      bank.set(WheelOfLife.ENVIRONMENT, [
        {
          id: 'environment-living',
          text: 'Living Environment',
          description: 'How will this impact your living environment?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Negatively Impacts',
            maxLabel: 'Positively Impacts',
            midLabel: 'No Change',
            markers: [
              { value: 0, label: 'Worse Environment' },
              { value: 5, label: 'No Change' },
              { value: 10, label: 'Better Environment' }
            ]
          },
          required: true,
          category: WheelOfLife.ENVIRONMENT
        },
        {
          id: 'environment-stability',
          text: 'Environmental Stability',
          description: 'How will this affect the stability of your environment?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Less Stable',
            maxLabel: 'More Stable',
            midLabel: 'No Change',
            markers: [
              { value: 0, label: 'Much Less Stable' },
              { value: 5, label: 'Same Stability' },
              { value: 10, label: 'Much More Stable' }
            ]
          },
          required: true,
          category: WheelOfLife.ENVIRONMENT
        }
      ]);
  
      // SPIRITUALITY Questions
      bank.set(WheelOfLife.SPIRITUALITY, [
        {
          id: 'spirituality-alignment',
          text: 'Values Alignment',
          description: 'How well does this align with your values and beliefs?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Conflicts with Values',
            maxLabel: 'Strongly Aligns',
            midLabel: 'Neutral Alignment',
            markers: [
              { value: 0, label: 'Strong Conflict' },
              { value: 5, label: 'Neutral' },
              { value: 10, label: 'Perfect Alignment' }
            ]
          },
          required: true,
          category: WheelOfLife.SPIRITUALITY
        },
        {
          id: 'spirituality-purpose',
          text: 'Sense of Purpose',
          description: 'How will this impact your sense of purpose and meaning?',
          type: 'scale',
          scaleParams: {
            min: 0,
            max: 10,
            minLabel: 'Diminishes Purpose',
            maxLabel: 'Enhances Purpose',
            midLabel: 'Neutral Impact',
            markers: [
              { value: 0, label: 'Less Purposeful' },
              { value: 5, label: 'No Change' },
              { value: 10, label: 'More Purposeful' }
            ]
          },
          required: true,
          category: WheelOfLife.SPIRITUALITY
        }
      ]);
  
      return bank;
    }

    private validateQuestionBank(bank: Map<WheelOfLife, Question[]>): void {
        Object.values(WheelOfLife).forEach(area => {
            const questions = bank.get(area);
            if (!questions || questions.length === 0) {
                console.warn(`[QuestionController] No questions defined for area: ${area}`);
            }
        });
    }

  getQuestionsByImpact(area: WheelOfLife, impactLevel: ImpactLevel): Question[] {
    if (!area || !impactLevel) {
        console.warn('[QuestionController] Missing area or impact level');
        return [];
    }
    
    const areaQuestions = this.questionBank.get(area);
    if (!areaQuestions) {
        console.warn(`[QuestionController] No questions found for area: ${area}`);
        return [];
    }   
    
    switch (impactLevel) {
      case ImpactLevel.CRITICAL:
      case ImpactLevel.HIGH:
        return areaQuestions;
      case ImpactLevel.MEDIUM:
        return areaQuestions.filter(q => q.required);
      case ImpactLevel.LOW:
        return areaQuestions.filter(q => q.required).slice(0, 2);
      case ImpactLevel.NONE:
      default:
        console.warn(`[QuestionController] Invalid impact level: ${impactLevel}`);
        return [];
    }
  }

  // src/controllers/QuestionController.ts
  generateQuestionSequence(
    impactedAreas: WheelOfLife[],
    impactLevels: Record<WheelOfLife, ImpactLevel>
  ): Question[] {
    if (!impactedAreas || impactedAreas.length === 0 || !impactLevels) {
        console.warn('[QuestionController] Missing impacted areas or impact levels');
      return [];
    }

    try {
        let questions: Question[] = [];

        // Generate questions for each impacted area
        impactedAreas.forEach((area) => {
            if (!impactLevels[area]) {
                console.warn(`[QuestionController] Missing impact level for ${area}, defaulting to HIGH`);
                impactLevels[area] = ImpactLevel.HIGH;
            }

            const areaQuestions = this.getQuestionsByImpact(
                area, 
                impactLevels[area]
            );
            questions = questions.concat(areaQuestions);
        });

        return this.optimizeQuestionOrder(questions);
    } catch (error) {
        console.error('[QuestionController] Error generating question sequence:', error);
        return [];
    }}

  private optimizeQuestionOrder(questions: Question[]): Question[] {
    if (!questions || questions.length === 0) {
        return [];
    }

    const typeOrder: Record<string, number> = { 
        scale: 0, 
        multiselect: 1, 
        text: 2, 
        number: 3 
    };
    
    return questions.sort((a, b) => {
        // Required questions come first
        if (a.required && !b.required) return -1;
        if (!a.required && b.required) return 1;

        // Then sort by question type
        const aTypeOrder = typeOrder[a.type] ?? 4;
        const bTypeOrder = typeOrder[b.type] ?? 4;
        return aTypeOrder - bTypeOrder;
    });
    
    }

}
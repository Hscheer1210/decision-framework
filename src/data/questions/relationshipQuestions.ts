import { Question, QuestionType, TimeFrame, PriorityLevel, WheelOfLife } from '../../types';

export const relationshipQuestions: Question[] = [
  {
    id: 'relationships-quality-time',
    text: "How would this impact the quality time spent with important people in your life?",
    description: "Consider time with family, friends, and significant others",
    type: QuestionType.SCALE,
    category: WheelOfLife.RELATIONSHIPS,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Family', 'Friendship', 'Love'],
    weight: 0.85,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Much Less Time",
      maxLabel: "Much More Time",
      midLabel: "Same Amount",
      markers: [
        { value: 0, label: "Severely Limited" },
        { value: 5, label: "No Change" },
        { value: 10, label: "Greatly Increased" }
      ]
    }
  },
  {
    id: 'relationships-support-network',
    text: "How would this affect your support network?",
    description: "Consider access to friends, family, and professional connections",
    type: QuestionType.SCALE,
    category: WheelOfLife.RELATIONSHIPS,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Community', 'Supportiveness', 'Connection'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Weakens Network",
      maxLabel: "Strengthens Network",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "Isolating" },
        { value: 5, label: "Neutral" },
        { value: 10, label: "Very Supportive" }
      ]
    }
  },
  {
    id: 'relationships-communication',
    text: "How would this impact your ability to maintain meaningful communication?",
    description: "Consider frequency and quality of interactions with loved ones",
    type: QuestionType.SCALE,
    category: WheelOfLife.RELATIONSHIPS,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.MEDIUM,
    required: true,
    valueCategories: ['Communication', 'Empathy', 'Connection'],
    weight: 0.75,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Much Harder",
      maxLabel: "Much Easier",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "Very Difficult" },
        { value: 5, label: "Same as Now" },
        { value: 10, label: "Much Better" }
      ]
    }
  },
  {
    id: 'relationships-new-connections',
    text: "How would this affect opportunities to form new relationships?",
    description: "Consider potential for meeting new people and building connections",
    type: QuestionType.SCALE,
    category: WheelOfLife.RELATIONSHIPS,
    timeframe: TimeFrame.LONG_TERM,
    priorityLevel: PriorityLevel.MEDIUM,
    required: true,
    valueCategories: ['Friendship', 'Community', 'Open-mindedness'],
    weight: 0.7,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Fewer Opportunities",
      maxLabel: "More Opportunities",
      midLabel: "Same Opportunities",
      markers: [
        { value: 0, label: "Very Limited" },
        { value: 5, label: "No Change" },
        { value: 10, label: "Many New Opportunities" }
      ]
    }
  },
  {
    id: 'relationships-existing-commitments',
    text: "How well does this align with your existing relationship commitments?",
    description: "Consider impact on current relationships and commitments",
    type: QuestionType.SCALE,
    category: WheelOfLife.RELATIONSHIPS,
    timeframe: TimeFrame.SHORT_TERM,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Commitment', 'Loyalty', 'Responsibility'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Major Conflicts",
      maxLabel: "Perfect Alignment",
      midLabel: "Neutral Impact",
      markers: [
        { value: 0, label: "Serious Conflicts" },
        { value: 5, label: "No Impact" },
        { value: 10, label: "Enhances Commitments" }
      ]
    }
  }
];
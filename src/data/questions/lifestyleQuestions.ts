import { Question, QuestionType, TimeFrame, PriorityLevel, WheelOfLife } from '../../types';

export const lifestyleQuestions: Question[] = [
  {
    id: 'lifestyle-daily-routine',
    text: "How would this impact your daily routine and lifestyle?",
    description: "Consider changes to your daily schedule, habits, and activities",
    type: QuestionType.SCALE,
    category: WheelOfLife.LIFESTYLE,
    timeframe: TimeFrame.SHORT_TERM,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Balance', 'Flexibility', 'Simplicity'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Very Disruptive",
      maxLabel: "Very Beneficial",
      midLabel: "Neutral Impact",
      markers: [
        { value: 0, label: "Major Disruption" },
        { value: 5, label: "No Change" },
        { value: 10, label: "Significant Improvement" }
      ]
    }
  },
  {
    id: 'lifestyle-leisure-time',
    text: "How would this affect your leisure and recreational time?",
    description: "Consider impact on hobbies, entertainment, and personal interests",
    type: QuestionType.SCALE,
    category: WheelOfLife.LIFESTYLE,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Balance', 'Pleasure', 'Freedom'],
    weight: 0.75,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Much Less Time",
      maxLabel: "Much More Time",
      midLabel: "Same Time",
      markers: [
        { value: 0, label: "Severely Limited" },
        { value: 5, label: "No Change" },
        { value: 10, label: "Greatly Increased" }
      ]
    }
  },
  {
    id: 'lifestyle-quality',
    text: "How would this affect your overall quality of life?",
    description: "Consider impact on comfort, convenience, and life satisfaction",
    type: QuestionType.SCALE,
    category: WheelOfLife.LIFESTYLE,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Balance', 'Comfort', 'Fulfillment'],
    weight: 0.85,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Much Lower",
      maxLabel: "Much Higher",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "Significantly Worse" },
        { value: 5, label: "Same as Now" },
        { value: 10, label: "Significantly Better" }
      ]
    }
  },
  {
    id: 'lifestyle-location',
    text: "How would this impact your living situation or location?",
    description: "Consider changes to home, community, or geographic location",
    type: QuestionType.SCALE,
    category: WheelOfLife.LIFESTYLE,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Community', 'Stability', 'Environment'],
    weight: 0.75,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Very Negative",
      maxLabel: "Very Positive",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "Major Downgrade" },
        { value: 5, label: "Similar to Current" },
        { value: 10, label: "Major Upgrade" }
      ]
    }
  },
  {
    id: 'lifestyle-personal-interests',
    text: "How well does this align with your personal interests and hobbies?",
    description: "Consider impact on ability to pursue personal interests",
    type: QuestionType.SCALE,
    category: WheelOfLife.LIFESTYLE,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.MEDIUM,
    required: true,
    valueCategories: ['Freedom', 'Pleasure', 'Self-expression'],
    weight: 0.7,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Conflicts",
      maxLabel: "Supports",
      midLabel: "Neutral",
      markers: [
        { value: 0, label: "Prevents Pursuit" },
        { value: 5, label: "No Impact" },
        { value: 10, label: "Enhances Pursuit" }
      ]
    }
  }
];
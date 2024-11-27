import { Question, QuestionType, TimeFrame, PriorityLevel, WheelOfLife } from '../../types';

export const healthQuestions: Question[] = [
  {
    id: 'health-physical-wellbeing',
    text: "How would this decision impact your physical health and wellbeing?",
    description: "Consider effects on exercise routine, nutrition, and general health",
    type: QuestionType.SCALE,
    category: WheelOfLife.HEALTH,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Health', 'Vitality', 'Balance'],
    weight: 0.85,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Very Negative Impact",
      maxLabel: "Very Positive Impact",
      midLabel: "Neutral Impact",
      markers: [
        { value: 0, label: "Severely Compromised" },
        { value: 5, label: "No Change" },
        { value: 10, label: "Greatly Enhanced" }
      ]
    }
  },
  {
    id: 'health-stress-levels',
    text: "What effect would this have on your stress levels?",
    description: "Consider mental and emotional pressure, anxiety, and tension",
    type: QuestionType.SCALE,
    category: WheelOfLife.HEALTH,
    timeframe: TimeFrame.SHORT_TERM,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Balance', 'Serenity', 'Mindfulness'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Much More Stress",
      maxLabel: "Much Less Stress",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "Highly Stressful" },
        { value: 5, label: "Neutral" },
        { value: 10, label: "Very Relaxing" }
      ]
    }
  },
  {
    id: 'health-lifestyle-habits',
    text: "How would this affect your healthy lifestyle habits?",
    description: "Consider sleep, exercise, diet, and self-care routines",
    type: QuestionType.SCALE,
    category: WheelOfLife.HEALTH,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Health', 'Self-discipline', 'Balance'],
    weight: 0.75,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Disrupts Habits",
      maxLabel: "Enhances Habits",
      midLabel: "Maintains Habits",
      markers: [
        { value: 0, label: "Major Disruption" },
        { value: 5, label: "No Change" },
        { value: 10, label: "Major Improvement" }
      ]
    }
  },
  {
    id: 'health-work-life-balance',
    text: "How would this impact your work-life balance?",
    description: "Consider time allocation between work, rest, and personal life",
    type: QuestionType.SCALE,
    category: WheelOfLife.HEALTH,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Balance', 'Harmony', 'Flexibility'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Much Worse Balance",
      maxLabel: "Much Better Balance",
      midLabel: "Same Balance",
      markers: [
        { value: 0, label: "Severe Imbalance" },
        { value: 5, label: "No Change" },
        { value: 10, label: "Ideal Balance" }
      ]
    }
  },
  {
    id: 'health-mental-wellbeing',
    text: "How would this affect your mental and emotional wellbeing?",
    description: "Consider effects on mood, anxiety, and emotional stability",
    type: QuestionType.SCALE,
    category: WheelOfLife.HEALTH,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Mindfulness', 'Serenity', 'Balance'],
    weight: 0.85,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Very Negative Impact",
      maxLabel: "Very Positive Impact",
      midLabel: "Neutral Impact",
      markers: [
        { value: 0, label: "Highly Detrimental" },
        { value: 5, label: "No Impact" },
        { value: 10, label: "Very Beneficial" }
      ]
    }
  }
];
import { Question, QuestionType, TimeFrame, PriorityLevel, WheelOfLife } from '../../types';

export const coreValuesQuestions: Question[] = [
  {
    id: 'values-alignment',
    text: "How well does this decision align with your core values?",
    description: "Consider alignment with your most important personal values",
    type: QuestionType.SCALE,
    category: WheelOfLife.CORE_VALUES,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Integrity', 'Authenticity', 'Purpose'],
    weight: 0.9,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Conflicts with Values",
      maxLabel: "Strongly Aligns",
      midLabel: "Neutral",
      markers: [
        { value: 0, label: "Strong Conflict" },
        { value: 5, label: "Neither Aligns nor Conflicts" },
        { value: 10, label: "Perfect Alignment" }
      ]
    }
  },
  {
    id: 'values-authenticity',
    text: "How authentic would you feel making this decision?",
    description: "Consider how true this feels to your authentic self",
    type: QuestionType.SCALE,
    category: WheelOfLife.CORE_VALUES,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Self-expression', 'Integrity', 'Honesty'],
    weight: 0.85,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Very Inauthentic",
      maxLabel: "Completely Authentic",
      midLabel: "Somewhat Authentic",
      markers: [
        { value: 0, label: "Feels False" },
        { value: 5, label: "Neutral" },
        { value: 10, label: "Feels True" }
      ]
    }
  },
  {
    id: 'values-purpose',
    text: "How would this contribute to your sense of purpose?",
    description: "Consider impact on life meaning and personal mission",
    type: QuestionType.SCALE,
    category: WheelOfLife.CORE_VALUES,
    timeframe: TimeFrame.LONG_TERM,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Purpose', 'Fulfillment', 'Growth'],
    weight: 0.85,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Detracts from Purpose",
      maxLabel: "Enhances Purpose",
      midLabel: "Neutral Impact",
      markers: [
        { value: 0, label: "Meaningless" },
        { value: 5, label: "No Impact" },
        { value: 10, label: "Deeply Meaningful" }
      ]
    }
  },
  {
    id: 'values-ethical-alignment',
    text: "How well does this align with your ethical principles?",
    description: "Consider moral and ethical implications of the decision",
    type: QuestionType.SCALE,
    category: WheelOfLife.CORE_VALUES,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Integrity', 'Justice', 'Responsibility'],
    weight: 0.85,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Ethically Problematic",
      maxLabel: "Ethically Sound",
      midLabel: "Neutral",
      markers: [
        { value: 0, label: "Ethical Conflicts" },
        { value: 5, label: "No Ethical Issues" },
        { value: 10, label: "Ethically Positive" }
      ]
    }
  },
  {
    id: 'values-future-self',
    text: "How well does this align with your vision of your future self?",
    description: "Consider alignment with who you want to become",
    type: QuestionType.SCALE,
    category: WheelOfLife.CORE_VALUES,
    timeframe: TimeFrame.LONG_TERM,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Growth', 'Purpose', 'Vision'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Moves Away",
      maxLabel: "Moves Toward",
      midLabel: "No Impact",
      markers: [
        { value: 0, label: "Wrong Direction" },
        { value: 5, label: "Neutral" },
        { value: 10, label: "Perfect Direction" }
      ]
    }
  }
];
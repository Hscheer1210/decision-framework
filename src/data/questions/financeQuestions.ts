import { Question, QuestionType, TimeFrame, PriorityLevel, WheelOfLife } from '../../types';

export const financeQuestions: Question[] = [
  {
    id: 'finance-income-potential',
    text: "How will this decision affect your income potential?",
    description: "Consider both immediate and long-term income implications",
    type: QuestionType.SCALE,
    category: WheelOfLife.FINANCE,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Financial security', 'Achievement', 'Stability'],
    weight: 0.85,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Significant Decrease",
      maxLabel: "Significant Increase",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "Major Reduction" },
        { value: 5, label: "Neutral" },
        { value: 10, label: "Major Increase" }
      ]
    }
  },
  {
    id: 'finance-stability',
    text: "How would this impact your financial stability?",
    description: "Consider savings, debt, and financial security",
    type: QuestionType.SCALE,
    category: WheelOfLife.FINANCE,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Financial security', 'Stability', 'Responsibility'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Much Less Stable",
      maxLabel: "Much More Stable",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "High Risk" },
        { value: 5, label: "Neutral" },
        { value: 10, label: "Very Secure" }
      ]
    }
  },
  {
    id: 'finance-resources',
    text: "What level of financial resources would this require?",
    description: "Consider immediate costs, investments, and ongoing expenses",
    type: QuestionType.SCALE,
    category: WheelOfLife.FINANCE,
    timeframe: TimeFrame.SHORT_TERM,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Resourcefulness', 'Responsibility'],
    weight: 0.75,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Minimal Resources",
      maxLabel: "Significant Resources",
      midLabel: "Moderate Resources",
      markers: [
        { value: 0, label: "No Investment" },
        { value: 5, label: "Moderate Investment" },
        { value: 10, label: "Major Investment" }
      ]
    }
  },
  {
    id: 'finance-long-term-growth',
    text: "How does this contribute to your long-term financial growth?",
    description: "Consider wealth building, investments, and future financial opportunities",
    type: QuestionType.SCALE,
    category: WheelOfLife.FINANCE,
    timeframe: TimeFrame.LONG_TERM,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Financial security', 'Growth', 'Achievement'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Limited Growth",
      maxLabel: "Significant Growth",
      midLabel: "Moderate Growth",
      markers: [
        { value: 0, label: "No Growth Potential" },
        { value: 5, label: "Some Growth" },
        { value: 10, label: "Excellent Growth" }
      ]
    }
  },
  {
    id: 'finance-risk-assessment',
    text: "What is the level of financial risk involved?",
    description: "Consider potential losses, market conditions, and contingencies",
    type: QuestionType.SCALE,
    category: WheelOfLife.FINANCE,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Financial security', 'Responsibility', 'Risk-taking'],
    weight: 0.75,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Very High Risk",
      maxLabel: "Very Low Risk",
      midLabel: "Moderate Risk",
      markers: [
        { value: 0, label: "Extremely Risky" },
        { value: 5, label: "Moderate Risk" },
        { value: 10, label: "Very Safe" }
      ]
    }
  }
];
import { Question, QuestionType, TimeFrame, PriorityLevel, WheelOfLife } from '../../types';

export const environmentQuestions: Question[] = [
  {
    id: 'environment-living-space',
    text: "How would this impact your living or working space?",
    description: "Consider changes to your physical environment and surroundings",
    type: QuestionType.SCALE,
    category: WheelOfLife.ENVIRONMENT,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Comfort', 'Beauty', 'Stability'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Much Worse",
      maxLabel: "Much Better",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "Significant Downgrade" },
        { value: 5, label: "Same as Current" },
        { value: 10, label: "Significant Upgrade" }
      ]
    }
  },
  {
    id: 'environment-nature-access',
    text: "How would this affect your access to nature and outdoor spaces?",
    description: "Consider proximity to parks, natural areas, and outdoor activities",
    type: QuestionType.SCALE,
    category: WheelOfLife.ENVIRONMENT,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.MEDIUM,
    required: true,
    valueCategories: ['Nature', 'Environmental stewardship', 'Health'],
    weight: 0.7,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Limited Access",
      maxLabel: "Improved Access",
      midLabel: "Same Access",
      markers: [
        { value: 0, label: "Very Limited" },
        { value: 5, label: "No Change" },
        { value: 10, label: "Excellent Access" }
      ]
    }
  },
  {
    id: 'environment-community',
    text: "How would this affect your community environment?",
    description: "Consider neighborhood, local services, and community amenities",
    type: QuestionType.SCALE,
    category: WheelOfLife.ENVIRONMENT,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Community', 'Safety', 'Cultural respect'],
    weight: 0.75,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Much Worse",
      maxLabel: "Much Better",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "Poor Community" },
        { value: 5, label: "Similar to Current" },
        { value: 10, label: "Excellent Community" }
      ]
    }
  },
  {
    id: 'environment-sustainability',
    text: "How environmentally sustainable is this decision?",
    description: "Consider environmental impact and ecological footprint",
    type: QuestionType.SCALE,
    category: WheelOfLife.ENVIRONMENT,
    timeframe: TimeFrame.LONG_TERM,
    priorityLevel: PriorityLevel.MEDIUM,
    required: true,
    valueCategories: ['Environmental stewardship', 'Responsibility', 'Nature'],
    weight: 0.7,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Not Sustainable",
      maxLabel: "Very Sustainable",
      midLabel: "Neutral Impact",
      markers: [
        { value: 0, label: "Harmful Impact" },
        { value: 5, label: "Neutral Impact" },
        { value: 10, label: "Positive Impact" }
      ]
    }
  },
  {
    id: 'environment-organization',
    text: "How would this affect your ability to maintain an organized environment?",
    description: "Consider impact on personal space organization and maintenance",
    type: QuestionType.SCALE,
    category: WheelOfLife.ENVIRONMENT,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.MEDIUM,
    required: true,
    valueCategories: ['Simplicity', 'Order', 'Efficiency'],
    weight: 0.65,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "More Chaotic",
      maxLabel: "More Organized",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "Very Disorganized" },
        { value: 5, label: "Same as Current" },
        { value: 10, label: "Highly Organized" }
      ]
    }
  }
];
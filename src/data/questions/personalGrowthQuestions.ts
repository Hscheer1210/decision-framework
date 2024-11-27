import { Question, QuestionType, TimeFrame, PriorityLevel, WheelOfLife } from '../../types';

export const personalGrowthQuestions: Question[] = [
  {
    id: 'growth-learning-opportunities',
    text: "How would this decision impact your learning and development opportunities?",
    description: "Consider opportunities for skill development, education, and personal growth",
    type: QuestionType.SCALE,
    category: WheelOfLife.PERSONAL_GROWTH,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Growth', 'Learning', 'Knowledge'],
    weight: 0.85,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Limited Opportunities",
      maxLabel: "Abundant Opportunities",
      midLabel: "Some Opportunities",
      markers: [
        { value: 0, label: "No Growth Potential" },
        { value: 5, label: "Moderate Growth" },
        { value: 10, label: "Exceptional Growth" }
      ]
    }
  },
  {
    id: 'growth-self-expression',
    text: "How would this affect your ability to express yourself authentically?",
    description: "Consider freedom of expression, creativity, and personal authenticity",
    type: QuestionType.SCALE,
    category: WheelOfLife.PERSONAL_GROWTH,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Self-expression', 'Creativity', 'Independence'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Very Restrictive",
      maxLabel: "Very Supportive",
      midLabel: "Neutral",
      markers: [
        { value: 0, label: "Highly Constrained" },
        { value: 5, label: "No Change" },
        { value: 10, label: "Complete Freedom" }
      ]
    }
  },
  {
    id: 'growth-challenge-level',
    text: "How challenging would this be for your personal development?",
    description: "Consider the level of challenge and potential for growth",
    type: QuestionType.SCALE,
    category: WheelOfLife.PERSONAL_GROWTH,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Achievement', 'Growth', 'Courage'],
    weight: 0.75,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Too Easy",
      maxLabel: "Optimal Challenge",
      midLabel: "Moderate",
      markers: [
        { value: 0, label: "No Challenge" },
        { value: 5, label: "Comfortable Challenge" },
        { value: 10, label: "Growth-Promoting Challenge" }
      ]
    }
  },
  {
    id: 'growth-purpose-alignment',
    text: "How well does this align with your sense of purpose?",
    description: "Consider alignment with personal mission and life purpose",
    type: QuestionType.SCALE,
    category: WheelOfLife.PERSONAL_GROWTH,
    timeframe: TimeFrame.LONG_TERM,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Purpose', 'Fulfillment', 'Connection'],
    weight: 0.85,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Misaligned",
      maxLabel: "Perfectly Aligned",
      midLabel: "Somewhat Aligned",
      markers: [
        { value: 0, label: "Conflicts with Purpose" },
        { value: 5, label: "Neutral" },
        { value: 10, label: "Enhances Purpose" }
      ]
    }
  },
  {
    id: 'growth-potential-realization',
    text: "How would this help you realize your full potential?",
    description: "Consider opportunities to utilize and expand your capabilities",
    type: QuestionType.SCALE,
    category: WheelOfLife.PERSONAL_GROWTH,
    timeframe: TimeFrame.LONG_TERM,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Achievement', 'Excellence', 'Growth'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Limits Potential",
      maxLabel: "Maximizes Potential",
      midLabel: "Neutral Impact",
      markers: [
        { value: 0, label: "Severely Limiting" },
        { value: 5, label: "Maintains Current Level" },
        { value: 10, label: "Full Potential" }
      ]
    }
  }
];
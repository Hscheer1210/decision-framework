import { Question, QuestionType, TimeFrame, PriorityLevel, WheelOfLife } from '../../types';

export const careerQuestions: Question[] = [
  {
    id: 'career-growth-trajectory',
    text: "How will this decision impact your career growth trajectory?",
    description: "Consider both immediate opportunities and long-term career development",
    type: QuestionType.SCALE,
    category: WheelOfLife.CAREER,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Growth', 'Achievement', 'Ambition', 'Excellence'],
    weight: 0.8,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Significantly Hinders",
      maxLabel: "Significantly Enhances",
      midLabel: "Neutral Impact",
      markers: [
        { value: 0, label: "Major Career Setback" },
        { value: 3, label: "Minor Hindrance" },
        { value: 5, label: "No Impact" },
        { value: 7, label: "Positive Growth" },
        { value: 10, label: "Exceptional Opportunity" }
      ]
    }
  },
  {
    id: 'career-skills-alignment',
    text: "How well does this align with your key skills and expertise?",
    description: "Consider both your current skillset and skills you want to develop",
    type: QuestionType.SCALE,
    category: WheelOfLife.CAREER,
    timeframe: TimeFrame.SHORT_TERM,
    priorityLevel: PriorityLevel.MEDIUM,
    required: true,
    valueCategories: ['Competence', 'Learning', 'Excellence'],
    weight: 0.7,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Poor Alignment",
      maxLabel: "Perfect Alignment",
      midLabel: "Moderate Alignment",
      markers: [
        { value: 0, label: "Complete Mismatch" },
        { value: 5, label: "Partial Match" },
        { value: 10, label: "Perfect Match" }
      ]
    }
  },
  {
    id: 'career-responsibility-level',
    text: "How would this decision affect your level of responsibility and authority?",
    description: "Think about changes in leadership, decision-making power, and accountability",
    type: QuestionType.SCALE,
    category: WheelOfLife.CAREER,
    timeframe: TimeFrame.BOTH,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Leadership', 'Responsibility', 'Achievement'],
    weight: 0.75,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Decreased Responsibility",
      maxLabel: "Increased Responsibility",
      midLabel: "Same Level",
      markers: [
        { value: 0, label: "Significant Decrease" },
        { value: 5, label: "No Change" },
        { value: 10, label: "Significant Increase" }
      ]
    }
  },
  {
    id: 'career-work-environment',
    text: "How would this impact your work environment and culture?",
    description: "Consider team dynamics, company culture, and working conditions",
    type: QuestionType.SCALE,
    category: WheelOfLife.CAREER,
    timeframe: TimeFrame.SHORT_TERM,
    priorityLevel: PriorityLevel.MEDIUM,
    required: true,
    valueCategories: ['Work ethic', 'Collaboration', 'Harmony'],
    weight: 0.6,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Much Worse",
      maxLabel: "Much Better",
      midLabel: "No Change",
      markers: [
        { value: 0, label: "Toxic Environment" },
        { value: 5, label: "Similar to Current" },
        { value: 10, label: "Ideal Environment" }
      ]
    }
  },
  {
    id: 'career-industry-alignment',
    text: "How well does this align with industry trends and future opportunities?",
    description: "Consider market conditions, industry growth, and future prospects",
    type: QuestionType.SCALE,
    category: WheelOfLife.CAREER,
    timeframe: TimeFrame.LONG_TERM,
    priorityLevel: PriorityLevel.HIGH,
    required: true,
    valueCategories: ['Innovation', 'Growth', 'Security'],
    weight: 0.75,
    scaleParams: {
      min: 0,
      max: 10,
      minLabel: "Poor Outlook",
      maxLabel: "Excellent Outlook",
      midLabel: "Moderate Outlook",
      markers: [
        { value: 0, label: "Declining Industry" },
        { value: 5, label: "Stable Industry" },
        { value: 10, label: "Growing Industry" }
      ]
    }
  }
];
// src/types/index.ts
/**
 * Represents the different life areas in the Wheel of Life framework
 */
export enum WheelOfLife {
    CAREER = 'Career_',
    FINANCE = 'Finance',
    HEALTH = 'Health_&_Wellness',
    RELATIONSHIPS = 'Relationships',
    PERSONAL_GROWTH = 'Personal_Growth',
    RECREATION = 'Recreation',
    ENVIRONMENT = 'Physical_Environment',
    SPIRITUALITY = 'Spirituality_&_Purpose'
}

/**
 * Represents the level of impact a decision has on each life area
 */
export enum ImpactLevel {
    NONE = 'none',
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    CRITICAL = 'critical'
}

export type MonthlyMetrics = Record<string, number>;
export type AnnualMetrics = Record<string, number>;

export type QuestionResponse = string | number | string[];
export type ResponseRecord = Record<string, QuestionResponse>;

// Updated interfaces with more specific types and documentation
export interface DecisionContext {
    description: string;
    primaryArea: WheelOfLife;
    secondaryAreas: WheelOfLife[];
    impactLevels: Record<WheelOfLife, ImpactLevel>;
    createdAt?: Date; // Optional: might be useful for tracking
}

export interface FinancialMetrics {
    immediate: {
        costs: number;
        income: number;
        investments: number;
    };
    ongoing: {
        monthly: MonthlyMetrics;
        annual: AnnualMetrics;
    };
}

export interface TimeMetrics {
    immediate: {
        setup: number;
        transition: number;
    };
    ongoing: {
        weekly: number;
        monthly: number;
    };
    duration: string; // Consider making this an enum or more specific type
}

export interface ResourceMetrics {
    required: string[];
    available: string[];
    gaps: string[];
}

export interface ObjectiveMetrics {
    financial: FinancialMetrics;
    time: TimeMetrics;
    resources: ResourceMetrics;
}

export interface SubjectiveMetrics {
    currentState: Record<WheelOfLife, number>;
    responses: ResponseRecord;
}

export interface AnalysisResults {
    balanceScore: number;
    alignmentScore: number;
    sustainabilityScore: number;
    overall: number;
    recommendations: string[];
    timestamp?: Date; // Optional: might be useful for tracking
    details?: {
        [key in WheelOfLife]?: {
            score: number;
            impacts: string[];
            suggestions: string[];
        };
    };
}

// Add validation helpers
export const isValidScore = (score: number): boolean => {
    return score >= 0 && score <= 10;
};

export const isValidImpactLevel = (level: string): level is ImpactLevel => {
    return Object.values(ImpactLevel).includes(level as ImpactLevel);
};

export const isValidWheelArea = (area: string): area is WheelOfLife => {
    return Object.values(WheelOfLife).includes(area as WheelOfLife);
};

// Add type guards
export const isCompleteDecisionContext = (context: Partial<DecisionContext>): context is DecisionContext => {
    return !!(
        context.description &&
        context.primaryArea &&
        Array.isArray(context.secondaryAreas) &&
        context.impactLevels &&
        Object.keys(context.impactLevels).length > 0
    );
};

// Constants for validation
export const SCORE_RANGE = {
    MIN: 0,
    MAX: 10
} as const;

export const TIME_CONSTRAINTS = {
    WEEKLY_HOURS_MAX: 168, // 24 * 7
    MONTHLY_HOURS_MAX: 744, // 24 * 31
} as const;
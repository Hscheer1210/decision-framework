// src/utils/calculations.ts
export const normalizeScore = (score: number, min: number = 0, max: number = 10): number => {
    return Math.max(min, Math.min(max, score));
  };
  
  export const calculateWeightedAverage = (
    scores: number[],
    weights: number[]
  ): number => {
    if (scores.length !== weights.length) {
      throw new Error('Scores and weights arrays must be the same length');
    }
  
    const sum = scores.reduce((acc, score, index) => {
      return acc + (score * weights[index]);
    }, 0);
  
    const weightSum = weights.reduce((acc, weight) => acc + weight, 0);
  
    return sum / weightSum;
  };
  
  export const calculatePercentage = (value: number, total: number): number => {
    return (value / total) * 100;
  };
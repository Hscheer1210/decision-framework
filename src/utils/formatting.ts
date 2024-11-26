// src/utils/formatting.ts
export const formatCurrency = (
    amount: number,
    currency: string = 'USD'
  ): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency
    }).format(amount);
  };
  
  export const formatPercentage = (
    value: number,
    decimals: number = 1
  ): string => {
    return `${value.toFixed(decimals)}%`;
  };
  
  export const formatDuration = (hours: number): string => {
    if (hours < 1) {
      return `${Math.round(hours * 60)} minutes`;
    }
    return hours === 1 ? '1 hour' : `${hours} hours`;
  };
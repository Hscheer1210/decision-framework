// src/components/Visualization/LifeWheelChart.tsx
import React from 'react';
import { 
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Legend,
} from 'recharts';
import { WheelOfLife } from '../../types';

interface LifeWheelChartProps {
  data: Record<WheelOfLife, number>;
}

export const LifeWheelChart: React.FC<LifeWheelChartProps> = ({ data }) => {
  const chartData = Object.entries(data).map(([key, value]) => ({
    area: key.replace(/_/g, ' '),
    value,
  }));

  return (
    <RadarChart
        outerRadius={90}
        width={400}
        height={400}
        data={chartData}
    >
        {/* Add grid and axis */}
        <PolarGrid />
        <PolarAngleAxis dataKey="area" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        {/* Radar layer */}
        <Radar
            name="Satisfaction Level"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
        />
        {/* Optional legend */}
        <Legend />
    </RadarChart>
 );
};
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { AppUsage } from '../../types';

interface AppUsageChartProps {
  data: AppUsage[];
}

export const AppUsageChart: React.FC<AppUsageChartProps> = ({ data }) => {
  const sortedData = [...data].sort((a, b) => b.duration - a.duration);

  const formatDuration = (value: number) => {
    const hours = Math.floor(value / 60);
    const mins = value % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={sortedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E5E5" />
          <XAxis 
            type="number" 
            hide 
          />
          <YAxis 
            type="category" 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            width={80}
            style={{ fontSize: '12px', fontWeight: 500 }}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            formatter={(value: number) => [formatDuration(value), 'Usage']}
            contentStyle={{ 
              borderRadius: '8px', 
              border: 'none', 
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
            }}
          />
          <Bar 
            dataKey="duration" 
            radius={[0, 4, 4, 0]}
            barSize={20}
          >
            {sortedData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.category === 'Social' ? '#6366F1' : '#CBD5E1'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

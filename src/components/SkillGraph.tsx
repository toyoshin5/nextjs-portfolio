// Source Widget: SkillGraph (graph.dart)

'use client';

import { useState } from 'react';
import { Skill } from '@/types/portfolio';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from 'recharts';

interface SkillGraphProps {
  skills: Skill[];
  height?: number;
}

const levelTexts: Record<number, string> = {
  5: '完全に理解している',
  4: 'できる',
  3: 'すこしできる',
  2: 'わずかにできる',
  1: 'さわったことある',
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: Skill }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as Skill;
    return (
      <div className="bg-slate-600 text-white px-3 py-2 rounded-lg shadow-lg">
        <p className="font-bold text-lg">{data.languageFull}</p>
        <p className="text-sm">{levelTexts[data.level]}</p>
      </div>
    );
  }
  return null;
};

export const SkillGraph = ({ skills, height = 600 }: SkillGraphProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={skills}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
        >
          <XAxis type="number" domain={[0, 6]} hide />
          <YAxis
            type="category"
            dataKey="language"
            tick={{ fontWeight: 'bold', fontSize: 16 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
          <Bar
            dataKey="level"
            radius={[0, 4, 4, 0]}
            barSize={22}
            onMouseEnter={(_, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            {skills.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={hoveredIndex === index ? '#93c5fd' : '#3b82f6'}
                stroke={hoveredIndex === index ? '#ffffff' : 'none'}
                strokeWidth={hoveredIndex === index ? 2 : 0}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

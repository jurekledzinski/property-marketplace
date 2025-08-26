'use client';
import { useMemo } from 'react';
import type { UseChartBarControlProps } from './types';

const temp = ['', '', ''];

export const useChartBarControl = ({
  backgroundColor,
  chartData,
  label,
}: UseChartBarControlProps) => {
  const data = useMemo(() => {
    if (!chartData?.length) return { labels: [], datasets: [] };
    const formatData = chartData.map((i) => i.label.slice(0, 10) + '...');

    return {
      labels: formatData.length > 3 ? formatData : formatData.concat(temp),
      datasets: [
        {
          label,
          data: chartData.map((i) => i.amount),
          backgroundColor,
        },
      ],
    };
  }, [backgroundColor, chartData, label]);

  return data;
};

'use client';
import { useEffect, useMemo } from 'react';
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

  useEffect(() => {
    const chartBody = document.querySelector('#chartBody') as HTMLDivElement;
    if (!chartBody) return;

    const totalLabels = (chartData || []).length;

    if (totalLabels > 7) {
      const newWidth = 700 + (totalLabels - 7) * 100;
      chartBody.style.width = `${newWidth}px`;
    }
  }, [chartData]);

  return data;
};

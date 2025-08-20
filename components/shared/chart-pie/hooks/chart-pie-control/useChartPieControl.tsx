import { UseChartPieControlProps } from './types';
import { useMemo } from 'react';

export const useChartPieControl = ({
  backgroundColor,
  chartData,
  label,
}: UseChartPieControlProps) => {
  const data = useMemo(() => {
    if (!chartData?.length) return { labels: [], datasets: [] };

    return {
      labels: chartData.map((i) => i.label),
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

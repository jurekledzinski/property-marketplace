'use client';
import { useMemo } from 'react';
import type { ChartOptions } from 'chart.js';

export const useChartPieOptions = () => {
  const options = useMemo<ChartOptions<'pie'>>(() => {
    return {
      plugins: {
        legend: {
          align: 'center',
          position: 'bottom',
          labels: {
            boxHeight: 20,
            boxWidth: 40,
          },
        },
        tooltip: {
          cornerRadius: 0,
        },
      },
      maintainAspectRatio: false,
    };
  }, []);

  return options;
};

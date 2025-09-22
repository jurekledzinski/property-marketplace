'use client';
import { UseChartBarOptionsProps } from './types';
import { useMemo } from 'react';
import type { ChartOptions } from 'chart.js';

export const useChartBarOptions = ({ chartData }: UseChartBarOptionsProps) => {
  const options = useMemo<ChartOptions<'bar'>>(() => {
    return {
      indexAxis: 'x',
      plugins: {
        legend: { display: false },
        tooltip: {
          cornerRadius: 0,
          callbacks: {
            title: (tooltipItems) => {
              const i = tooltipItems[0].dataIndex;
              return chartData ? chartData[i].label : 'No data';
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            drawTicks: false,
            drawOnChartArea: false,
            display: true,
            offset: true,
          },
          border: {
            dash: [5, 5],
            color: '#dddddd',
          },
        },
        y: {
          border: {
            dash: [5, 5],
            color: '#dddddd',
          },
          grid: {
            drawTicks: false,
          },
          ticks: {
            align: 'start',
            precision: 0,
          },
        },
      },
      maintainAspectRatio: false,
    };
  }, [chartData]);

  return options;
};

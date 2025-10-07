'use client';
import { DoughnutPlugin } from './types';
import { useMemo, useRef, useState } from 'react';
import type { ChartOptions, LegendItem, Chart } from 'chart.js';

export const useChartDoughnutOptions = () => {
  const [stylesLegend, setStylesLegend] = useState<LegendItem[]>();
  const legendItems = useRef<LegendItem[]>([]);
  const toggleVisibility = useRef<Chart['toggleDataVisibility']>(undefined);
  const chartUpdate = useRef<Chart['update']>(undefined);
  const isMounted = useRef(false);

  const options = useMemo<ChartOptions<'doughnut'>>(() => {
    return {
      animation: {
        easing: 'linear',
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          cornerRadius: 0,
        },
        htmlPlugin: {
          containerID: 'legend-container',
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      type: 'doughnut',
    };
  }, []);

  const objectPlugin: DoughnutPlugin = {
    id: 'htmlPlugin',
    afterUpdate: (chart) => {
      if (
        !chart ||
        !chart.options ||
        !chart.options.plugins ||
        !chart.options.plugins.legend ||
        !chart.options.plugins.legend.labels ||
        !chart.options.plugins.legend.labels.generateLabels
      )
        return;

      const items = chart.options.plugins.legend.labels.generateLabels(chart);

      if (!isMounted.current) setStylesLegend(items);

      legendItems.current = items;

      if ('type' in chart.config && chart.config.type === 'doughnut') {
        toggleVisibility.current = chart.toggleDataVisibility.bind(chart);
        chartUpdate.current = chart.update.bind(chart);
      }

      isMounted.current = true;
    },
  };

  const htmlLegendPlugin = [objectPlugin];

  const toggleLegend = (index: number) => {
    if (!toggleVisibility || !chartUpdate) return;
    if (!chartUpdate?.current || !toggleVisibility.current) return;

    isMounted.current = false;
    toggleVisibility.current(index);
    chartUpdate.current();
  };

  return { htmlLegendPlugin, options, stylesLegend, toggleLegend };
};

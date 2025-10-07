'use client';
import styles from '../../UserDashboard.module.css';
import { AdvertsViewsChartProps } from './types';
import { Bar } from 'react-chartjs-2';
import { useRef } from 'react';
import { useResizeObserver } from '@/hooks';

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const AdvertsViewsChart = ({
  classChartContainer,
  options,
  views,
}: AdvertsViewsChartProps) => {
  const chartRef = useRef<Chart<'bar'>>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useResizeObserver({
    onResize: () => {
      if (chartRef.current) chartRef.current.resize();
    },
    ref: containerRef,
  });

  return (
    <div ref={containerRef} className={styles.viewsChart}>
      <div className={classChartContainer}>
        <div id="chartBody" className={styles.chartBody}>
          <Bar
            ref={chartRef}
            data={views ?? { labels: [], datasets: [] }}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

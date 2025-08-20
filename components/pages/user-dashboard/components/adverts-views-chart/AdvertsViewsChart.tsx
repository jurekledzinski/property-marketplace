'use client';
import styles from '../../UserDashboard.module.css';
import { AdvertsViewsChartProps } from './types';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const AdvertsViewsChart = ({
  options,
  views,
}: AdvertsViewsChartProps) => {
  return (
    <div className={styles.viewsChart}>
      <Bar data={views ?? { labels: [], datasets: [] }} options={options} />
    </div>
  );
};

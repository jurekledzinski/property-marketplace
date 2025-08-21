import styles from '../../UserDashboard.module.css';
import { AdvertsStatusChartProps } from './types';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const AdvertsStatusChart = ({
  stats,
  options,
}: AdvertsStatusChartProps) => {
  return (
    <div className={styles.statusChart}>
      <Pie data={stats ?? { labels: [], datasets: [] }} options={options} />
    </div>
  );
};

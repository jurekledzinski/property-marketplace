import { useChartPieControl } from '@/components/shared';
import { ChartOptions } from 'chart.js';

export type AdvertsStatusChartProps = {
  stats?: ReturnType<typeof useChartPieControl>;
  options?: ChartOptions<'doughnut'>;
};

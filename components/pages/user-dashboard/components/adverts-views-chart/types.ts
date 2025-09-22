import { ChartOptions } from 'chart.js';
import { useChartBarControl } from '@/components';

export type AdvertsViewsChartProps = {
  classChartContainer?: string;
  options?: ChartOptions<'bar'>;
  views?: ReturnType<typeof useChartBarControl>;
};

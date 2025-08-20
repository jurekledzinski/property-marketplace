import { ChartOptions } from 'chart.js';
import { useChartBarControl } from '@/components';

export type AdvertsViewsChartProps = {
  options?: ChartOptions<'bar'>;
  views?: ReturnType<typeof useChartBarControl>;
};

import { useChartPieControl } from '@/components/shared';
import { ChartOptions, LegendItem, Plugin } from 'chart.js';

export type AdvertsStatusChartProps = {
  toggleLegend: (index: number) => void;
  options?: ChartOptions<'doughnut'>;
  plugins?: Plugin<'doughnut', object>[];
  stats?: ReturnType<typeof useChartPieControl>;
  stylesLegend?: LegendItem[];
};

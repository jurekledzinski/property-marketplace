import { ChartOptions, LegendItem, Plugin } from 'chart.js';
import { useChartDoughnutControl } from '@/components';

export type AdvertsStatusChartProps = {
  toggleLegend: (index: number) => void;
  options?: ChartOptions<'doughnut'>;
  plugins?: Plugin<'doughnut', object>[];
  stats?: ReturnType<typeof useChartDoughnutControl>;
  stylesLegend?: LegendItem[];
};

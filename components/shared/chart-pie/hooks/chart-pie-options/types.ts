import { ChartData } from '@/components/shared/chart-bar';
import { Plugin, ChartType } from 'chart.js';
import type { ChartOptions, LegendItem } from 'chart.js';

export type UseChartPieOptionsProps = {
  chartData?: ChartData;
  title?: string;
};

export type DoughnutPlugin = {
  id: string;
  afterUpdate: Plugin<ChartType, ChartOptions<'doughnut'>>['afterUpdate'];
};

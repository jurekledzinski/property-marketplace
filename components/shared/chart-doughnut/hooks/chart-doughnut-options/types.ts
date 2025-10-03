import { Plugin, ChartType } from 'chart.js';
import type { ChartOptions } from 'chart.js';

export type DoughnutPlugin = {
  id: string;
  afterUpdate: Plugin<ChartType, ChartOptions<'doughnut'>>['afterUpdate'];
};

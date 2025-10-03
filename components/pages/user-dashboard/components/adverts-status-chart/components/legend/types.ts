import { LegendItem } from 'chart.js';

export type DoughnutLegendProps = {
  stylesLegend: LegendItem[];
  toggleLegend: (index: number) => void;
};

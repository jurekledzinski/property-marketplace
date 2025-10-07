export type ChartData = { label: string; amount: number }[];

export type UseChartBarControlProps = {
  backgroundColor?: string[];
  chartData?: ChartData;
  label?: string;
};

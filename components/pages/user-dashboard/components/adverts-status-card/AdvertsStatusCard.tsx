import styles from '../../UserDashboard.module.css';
import {
  AdvertsStatusCardProps,
  AdvertsStatusChart,
  bgColors,
  Card,
  Heading,
  useChartPieControl,
  useChartPieOptions,
} from '@/components';

export const AdvertsStatusCard = ({
  label,
  stats,
  title,
}: AdvertsStatusCardProps) => {
  const formattedStats = useChartPieControl({
    backgroundColor: [...bgColors].reverse(),
    chartData: stats,
    label,
  });

  const { htmlLegendPlugin, options, stylesLegend, toggleLegend } =
    useChartPieOptions();

  return (
    <Card className={styles.statusAdverts}>
      <Heading className={styles.heading} level={4} mb="mb-md">
        {title}
      </Heading>
      <AdvertsStatusChart
        options={options}
        plugins={htmlLegendPlugin}
        stats={formattedStats}
        stylesLegend={stylesLegend}
        toggleLegend={toggleLegend}
      />
    </Card>
  );
};

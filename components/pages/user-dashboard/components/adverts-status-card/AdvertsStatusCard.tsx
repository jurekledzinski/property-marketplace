import styles from '../../UserDashboard.module.css';
import {
  AdvertsStatusCardProps,
  AdvertsStatusChart,
  bgColors,
  Card,
  Heading,
  useChartBgFormat,
  useChartPieControl,
  useChartPieOptions,
} from '@/components';

export const AdvertsStatusCard = ({
  label,
  mode,
  stats,
  title,
}: AdvertsStatusCardProps) => {
  const backgroundColor = useChartBgFormat({
    bgColors: [...bgColors].reverse(),
    mode,
  });

  const formattedStats = useChartPieControl({
    backgroundColor,
    chartData: stats,
    label,
  });

  const options = useChartPieOptions();

  return (
    <Card className={styles.statusAdverts}>
      <Heading className={styles.heading} level={4} mb="mb-md">
        {title}
      </Heading>
      <AdvertsStatusChart stats={formattedStats} options={options} />
    </Card>
  );
};

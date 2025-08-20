import styles from '../../UserDashboard.module.css';
import {
  AdvertsStatusCardProps,
  AdvertsStatusChart,
  bgColors,
  Card,
  Heading,
  useChartPieControl,
} from '@/components';

export const AdvertsStatusCard = ({ mode, stats }: AdvertsStatusCardProps) => {
  const data = useChartPieControl({
    backgroundColor:
      mode === 'light'
        ? bgColors
        : bgColors.map((c) => c.replace('0.4', '0.8')),
    chartData: stats,
    label: 'Amount',
  });

  return (
    <Card className={styles.statusAdverts}>
      <Heading className={styles.heading} level={4} mb="mb-md">
        Status adverts
      </Heading>
      <AdvertsStatusChart stats={data} />
    </Card>
  );
};

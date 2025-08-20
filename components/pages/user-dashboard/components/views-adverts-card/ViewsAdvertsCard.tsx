import styles from '../../UserDashboard.module.css';
import { AdvertsViewsChart } from '../adverts-views-chart';
import {
  Heading,
  useChartBarControl,
  useChartBarOptions,
  Card,
  bgColors,
} from '@/components';
import { ViewAdvertsCardProps } from './types';

export const ViewsAdvertsCard = ({
  mode,
  label,
  title,
  views,
}: ViewAdvertsCardProps) => {
  const formattedViews = useChartBarControl({
    chartData: views,
    label,
    backgroundColor:
      mode === 'light'
        ? bgColors
        : bgColors.map((c) => c.replace('0.4', '0.8')),
  });
  const options = useChartBarOptions({ chartData: views });

  return (
    <Card className={styles.viewsAdverts}>
      <Heading className={styles.heading} level={4} mb="mb-md">
        {title}
      </Heading>
      <AdvertsViewsChart options={options} views={formattedViews} />
    </Card>
  );
};

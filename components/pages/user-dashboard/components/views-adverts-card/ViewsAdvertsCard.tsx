import styles from '../../UserDashboard.module.css';
import { AdvertsViewsChart } from '../adverts-views-chart';
import { ViewAdvertsCardProps } from './types';
import {
  Heading,
  useChartBarControl,
  useChartBarOptions,
  Card,
  bgColors,
  useChartBgFormat,
} from '@/components';

export const ViewsAdvertsCard = ({
  mode,
  label,
  title,
  views,
}: ViewAdvertsCardProps) => {
  const backgroundColor = useChartBgFormat({ bgColors, mode });

  const formattedViews = useChartBarControl({
    chartData: views,
    label,
    backgroundColor,
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

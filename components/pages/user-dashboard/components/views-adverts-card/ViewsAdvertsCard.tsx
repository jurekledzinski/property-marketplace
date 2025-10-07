import styles from '../../UserDashboard.module.css';
import { AdvertsViewsChart } from '../adverts-views-chart';
import { ViewAdvertsCardProps } from './types';
import {
  Heading,
  useChartBarControl,
  useChartBarOptions,
  Card,
  bgColors,
} from '@/components';

export const ViewsAdvertsCard = ({
  className,
  label,
  title,
  views,
}: ViewAdvertsCardProps) => {
  const formattedViews = useChartBarControl({
    chartData: views,
    label,
    backgroundColor: bgColors,
  });
  const options = useChartBarOptions({ chartData: views });

  return (
    <Card className={styles.viewsAdverts}>
      <Heading className={styles.heading} level={4} mb="mb-md">
        {title}
      </Heading>
      <AdvertsViewsChart
        classChartContainer={className}
        options={options}
        views={formattedViews}
      />
    </Card>
  );
};

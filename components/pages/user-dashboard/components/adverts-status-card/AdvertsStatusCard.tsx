import styles from '../../UserDashboard.module.css';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import {
  AdvertsStatusCardProps,
  AdvertsStatusChart,
  bgColors,
  Card,
  Heading,
  NoResults,
  useChartDoughnutControl,
  useChartDoughnutOptions,
} from '@/components';

export const AdvertsStatusCard = ({
  label,
  stats,
  title,
}: AdvertsStatusCardProps) => {
  const formattedStats = useChartDoughnutControl({
    backgroundColor: [...bgColors].reverse(),
    chartData: stats,
    label,
  });
  const isStatus = (stats ?? []).find((status) => status.amount);

  const { htmlLegendPlugin, options, stylesLegend, toggleLegend } =
    useChartDoughnutOptions();

  return (
    <Card className={styles.statusAdverts}>
      <Heading className={styles.heading} level={4} mb="mb-md">
        {title}
      </Heading>
      {isStatus ? (
        <AdvertsStatusChart
          options={options}
          plugins={htmlLegendPlugin}
          stats={formattedStats}
          stylesLegend={stylesLegend}
          toggleLegend={toggleLegend}
        />
      ) : (
        <NoResults
          className={styles.infoStatus}
          icon={faChartSimple}
          iconSize="2x"
          level={5}
          text="No data to display"
        />
      )}
    </Card>
  );
};

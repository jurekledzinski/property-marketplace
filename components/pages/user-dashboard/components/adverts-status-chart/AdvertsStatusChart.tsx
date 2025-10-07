import styles from '../../UserDashboard.module.css';
import { AdvertsStatusChartProps } from './types';
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutLegend } from './components';

Chart.register(ArcElement, Tooltip, Legend);

export const AdvertsStatusChart = ({
  options,
  plugins,
  stats,
  stylesLegend = [],
  toggleLegend,
}: AdvertsStatusChartProps) => {
  return (
    <>
      <div className={styles.statusChart}>
        <Doughnut
          data={stats ?? { labels: [], datasets: [] }}
          options={options}
          plugins={plugins}
        />
      </div>
      <div className={styles.legend} id="legend-container">
        <DoughnutLegend
          stylesLegend={stylesLegend}
          toggleLegend={toggleLegend}
        />
      </div>
    </>
  );
};

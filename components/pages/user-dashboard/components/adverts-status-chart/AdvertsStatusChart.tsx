import { Checkbox, CheckboxGroup } from '@/components/shared';
import styles from '../../UserDashboard.module.css';
import { AdvertsStatusChartProps } from './types';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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
      {/* <div className={styles.legendContainer} id="legend-container">
        <CheckboxGroup orientation="column" spacing="tight">
          {stylesLegend.map((item, index) => {
            return (
              <Checkbox
                key={item.text}
                id={item.text.toLowerCase()}
                value={item.text.toLowerCase()}
                size="size-xs"
                checked={item.hidden}
                onChange={() => toggleLegend(item.index || index)}
              >
                {item.text}
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </div> */}
    </>
  );
};

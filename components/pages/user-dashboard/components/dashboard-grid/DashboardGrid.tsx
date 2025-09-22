'use client';
import styles from '../../UserDashboard.module.css';
import { DashboardGridProps } from './types';
import { useDrawer } from '@/store';
import {
  AdvertsStatusCard,
  AdvertsTypeStatsCard,
  Box,
  getClassNamesGrid,
  MessagesCard,
  TopAdvertCard,
  TotalAdvertsCard,
  ViewsAdvertsCard,
} from '@/components';

export const DashboardGrid = ({ analytics }: DashboardGridProps) => {
  const { openMenuPanel: open } = useDrawer();
  const classes = getClassNamesGrid({ open });

  return (
    <Box className={styles.grid}>
      <TotalAdvertsCard amount={analytics?.total.adverts || 0} />
      <AdvertsTypeStatsCard
        rent={analytics?.total.rent || 0}
        sale={analytics?.total.sale || 0}
      />
      <TopAdvertCard title={analytics?.topAdvert || 'No data ...'} />
      <MessagesCard amount={analytics?.total.messages || 0} />
      <AdvertsStatusCard
        label="Amount"
        stats={analytics?.stats || []}
        title="Status adverts"
      />
      <ViewsAdvertsCard
        classChartContainer={classes.chartContainer}
        label="Views"
        title="Views per advert"
        views={analytics?.views || []}
      />
    </Box>
  );
};

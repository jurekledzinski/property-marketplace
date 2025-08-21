'use client';
import styles from '../../UserDashboard.module.css';
import { DashboardGridProps } from './types';
import { useTheme } from '@/store';
import {
  AdvertsStatusCard,
  AdvertsTypeStatsCard,
  Box,
  MessagesCard,
  TopAdvertCard,
  TotalAdvertsCard,
  ViewsAdvertsCard,
} from '@/components';

export const DashboardGrid = ({ dashboardAnalytics }: DashboardGridProps) => {
  const { mode } = useTheme();

  return (
    <Box className={styles.grid}>
      <TotalAdvertsCard />
      <AdvertsTypeStatsCard />
      <TopAdvertCard />
      <MessagesCard />
      <AdvertsStatusCard
        label="Amount"
        mode={mode}
        stats={dashboardAnalytics.stats}
        title="Status adverts"
      />
      <ViewsAdvertsCard
        label="Views"
        mode={mode}
        title="Views per advert"
        views={dashboardAnalytics.views}
      />
    </Box>
  );
};

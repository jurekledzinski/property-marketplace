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

export const DashboardGrid = ({ analytics }: DashboardGridProps) => {
  const { mode } = useTheme();

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
        mode={mode}
        stats={analytics?.stats || []}
        title="Status adverts"
      />
      <ViewsAdvertsCard
        label="Views"
        mode={mode}
        title="Views per advert"
        views={analytics?.views || []}
      />
    </Box>
  );
};

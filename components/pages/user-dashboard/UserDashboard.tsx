'use client';
import { getClassNamesUserDashboard } from './utils';
import { useDrawer, useTheme } from '@/store';
import { UserDashboardProps } from './types';

import {
  AdvertsStatusCard,
  AdvertsTypeStatsCard,
  Box,
  Container,
  Drawer,
  DrawerPanel,
  TopAdvertCard,
  TotalAdvertsCard,
  ViewsAdvertsCard,
  MessagesCard,
} from '@/components';

export const UserDashboard = ({ dashboardAnalytics }: UserDashboardProps) => {
  const { mode } = useTheme();
  const { openMenuPanel: open } = useDrawer();
  const classes = getClassNamesUserDashboard({ open });

  return (
    <div className={classes.dashboard}>
      <Container className={classes.container} m="m-center" maxWidth="mw-md">
        <Drawer direction="left" open={open} variant="push">
          <DrawerPanel />
        </Drawer>

        <Box className={classes.grid}>
          <TotalAdvertsCard />
          <AdvertsTypeStatsCard />
          <TopAdvertCard />
          <MessagesCard />
          <AdvertsStatusCard mode={mode} stats={dashboardAnalytics.stats} />
          <ViewsAdvertsCard
            label="Views"
            mode={mode}
            title="Views per advert"
            views={dashboardAnalytics.views}
          />
        </Box>
      </Container>
    </div>
  );
};

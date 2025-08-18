'use client';
import { getClassNamesUserDashboard } from './utils';
import { useDrawer } from '@/store';

import {
  AdvertsStatusCard,
  AdvertsTypeStatsCard,
  Box,
  Container,
  Drawer,
  DrawerPanel,
  LatestAdvertsCard,
  TopAdvertCard,
  TotalAdvertsCard,
  ViewAdvertsCard,
} from '@/components';

export const UserDashboard = () => {
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
          <AdvertsStatusCard />
          <ViewAdvertsCard />
          <TopAdvertCard />
          <LatestAdvertsCard />
        </Box>
      </Container>
    </div>
  );
};

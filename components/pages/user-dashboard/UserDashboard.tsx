'use client';
import { Box, Container, Drawer, DrawerPanel } from '@/components';
import { getClassNamesUserDashboard } from './utils';
import { useDrawer } from '@/store';
import { UserDashboardProps } from './types';

export const UserDashboard = ({ children }: UserDashboardProps) => {
  const { openMenuPanel: open } = useDrawer();
  const classes = getClassNamesUserDashboard({ open });

  return (
    <Box className={classes.dashboard}>
      <Container className={classes.container} m="m-center" maxWidth="mw-md">
        <Drawer direction="left" open={open} variant="push">
          <DrawerPanel />
        </Drawer>
        {children}
      </Container>
    </Box>
  );
};

'use client';
import { Box, Container, Drawer, DrawerPanel } from '@/components';
import { getClassNamesUserDashboard } from './utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useDrawer } from '@/store';
import { UserDashboardProps } from './types';

export const queryClient = new QueryClient();

export const UserDashboard = ({ children }: UserDashboardProps) => {
  const { openMenuPanel: open } = useDrawer();
  const classes = getClassNamesUserDashboard({ open });

  return (
    <QueryClientProvider client={queryClient}>
      <Box className={classes.dashboard}>
        <Container className={classes.container} m="m-center" maxWidth="mw-md">
          <Drawer direction="left" top={54} open={open} variant="push">
            <DrawerPanel />
          </Drawer>
          <Box className={classes.content}>{children}</Box>
        </Container>
      </Box>
    </QueryClientProvider>
  );
};

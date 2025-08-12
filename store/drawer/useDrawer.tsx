import { DrawerContext } from './drawerContext';
import { useContext } from 'react';

export const useDrawer = () => {
  const theme = useContext(DrawerContext);

  if (!theme) {
    throw new Error('Drawer context not found!');
  }

  return theme;
};

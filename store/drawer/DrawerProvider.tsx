'use client';
import { DrawerContext } from './drawerContext';
import { DrawerProviderProps } from './types';
import { useMemo, useState } from 'react';

const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [openFiltersPanel, setOpenFiltersPanel] = useState(false);
  const [openMenuPanel, setOpenMenuPanel] = useState(false);

  const value = useMemo(
    () => ({
      openFiltersPanel,
      openMenuPanel,
      onCloseFilterPanel: () => setOpenFiltersPanel(false),
      onToggleFiltersPanel: () => setOpenFiltersPanel((prev) => !prev),
      onToggleMenuPanel: () => setOpenMenuPanel((prev) => !prev),
    }),
    [openFiltersPanel, openMenuPanel]
  );

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

export default DrawerProvider;

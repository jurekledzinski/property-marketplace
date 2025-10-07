export type ContextDrawer = {
  onCloseFilterPanel: () => void;
  onToggleFiltersPanel: () => void;
  onToggleMenuPanel: () => void;
  openFiltersPanel: boolean;
  openMenuPanel: boolean;
};

export type DrawerProviderProps = {
  children: React.ReactNode;
};

export type ContextDrawer = {
  openFiltersPanel?: boolean;
  openMenuPanel?: boolean;
  onToggleFiltersPanel?: () => void;
  onToggleMenuPanel?: () => void;
};

export type DrawerProviderProps = {
  children: React.ReactNode;
};

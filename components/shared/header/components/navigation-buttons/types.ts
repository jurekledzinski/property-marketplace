import { ThemeMode } from '@/store';

export type NavigationButtonsProps = {
  mode: ThemeMode;
  onChangeTheme: (mode: ThemeMode) => void;
  onToggleFilters: () => void;
  onToggleMenu: () => void;
};

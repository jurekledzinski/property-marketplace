export type ThemeMode = 'light' | 'dark';

export type ContextTheme = {
  mode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
};

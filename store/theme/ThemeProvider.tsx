'use client';
import { ThemeContext } from './themeContext';
import { ContextTheme, ThemeMode, ThemeProviderProps } from './types';
import { useEffect, useMemo, useState } from 'react';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const stored = localStorage.getItem('mode');
    const themeLocal = stored ? JSON.parse(stored) : 'light';
    document.documentElement.setAttribute('data-theme', themeLocal);
    setTheme(themeLocal);
  }, []);

  const value = useMemo<ContextTheme>(
    () => ({
      mode: theme,
      onChange: (mode) => {
        setTheme(mode);
        document.cookie = `mode=${mode}; path=/; max-age=31536000`;
        localStorage.setItem('mode', JSON.stringify(mode));
        document.documentElement.setAttribute('data-theme', mode);
      },
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

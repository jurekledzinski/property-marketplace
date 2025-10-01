'use client';
import { ContextTheme, ThemeMode, ThemeProviderProps } from './types';
import { ThemeContext } from './themeContext';
import { useEffect, useMemo, useRef, useState } from 'react';

import {
  controlSetTimeoutDisable,
  getInitialTheme,
  setThemeAttributes,
} from './utils';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const timeoutId = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const themeLocal = getInitialTheme();
    setTheme(themeLocal);
  }, []);

  const value = useMemo<ContextTheme>(
    () => ({
      mode: theme,
      onChange: (mode) => {
        setTheme(mode);
        setThemeAttributes(mode);
        controlSetTimeoutDisable(timeoutId);
      },
    }),
    [theme]
  );

  useEffect(() => {
    const copyTimeoutId = timeoutId.current;
    return () => {
      if (copyTimeoutId) clearTimeout(copyTimeoutId);
    };
  }, []);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

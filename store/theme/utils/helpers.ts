import { getLocalItem, setLocalItem } from '@/utils-client';
import { RefObject } from 'react';
import { ThemeMode } from '../types';

export const setThemeAttributes = (mode: ThemeMode) => {
  if (typeof document === 'undefined') return;
  document.cookie = `mode=${mode}; path=/; max-age=31536000`;
  setLocalItem('mode', mode);
  document.documentElement.setAttribute('data-theme', mode);
  document.documentElement.classList.add('disabled-transition');
};

export const controlSetTimeoutDisable = (
  timeoutId: RefObject<NodeJS.Timeout | number | null>
) => {
  if (typeof document === 'undefined') return;
  if (timeoutId.current) clearTimeout(timeoutId.current);

  timeoutId.current = setTimeout(
    () => document.documentElement.classList.remove('disabled-transition'),
    100
  );
};

export const getInitialTheme = () => {
  if (typeof document === 'undefined') return 'light';
  const stored = getLocalItem('mode');
  const themeLocal = stored ? JSON.parse(stored) : 'light';
  document.documentElement.setAttribute('data-theme', themeLocal);
  return themeLocal;
};

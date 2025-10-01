import { RefObject } from 'react';
import { getLocalItem, setLocalItem } from '@/helpers';
import { ThemeMode } from '../types';

export const setThemeAttributes = (mode: ThemeMode) => {
  document.cookie = `mode=${mode}; path=/; max-age=31536000`;
  setLocalItem('mode', mode);
  document.documentElement.setAttribute('data-theme', mode);
  document.documentElement.classList.add('disbled-transition');
};

export const controlSetTimeoutDisable = (
  timeoutId: RefObject<NodeJS.Timeout | null>
) => {
  if (timeoutId.current) clearTimeout(timeoutId.current);

  timeoutId.current = setTimeout(
    () => document.documentElement.classList.remove('disbled-transition'),
    100
  );
};

export const getInitialTheme = () => {
  const stored = getLocalItem('mode');
  const themeLocal = stored ? JSON.parse(stored) : 'light';
  document.documentElement.setAttribute('data-theme', themeLocal);

  return themeLocal;
};

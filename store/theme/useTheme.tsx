import { ThemeContext } from './themeContext';
import { useContext } from 'react';

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('Theme context not found!');
  }

  return theme;
};

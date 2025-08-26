import { useContext } from 'react';
import { MenuContext } from './MenuContext';

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (!context) throw new Error('Menu context not found!');

  return context;
};

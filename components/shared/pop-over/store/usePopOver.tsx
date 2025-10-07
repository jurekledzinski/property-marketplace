import { useContext } from 'react';
import { PopOverContext } from './context';

export const usePopOver = () => {
  const context = useContext(PopOverContext);
  if (!context) throw new Error('PopOver context not found!');
  return context;
};

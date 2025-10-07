import { useContext } from 'react';
import { SelectContext } from './contextSelect';

export const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('Select context not found!');
  return context;
};

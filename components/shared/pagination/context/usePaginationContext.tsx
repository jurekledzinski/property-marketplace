import { useContext } from 'react';
import { ContextPagination } from './context';

export const usePaginationContext = () => {
  const context = useContext(ContextPagination);

  if (!context) throw new Error('Pagination context not found');

  return context;
};

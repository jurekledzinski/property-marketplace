import { createContext } from 'react';
import { PaginationContextValue } from './types';

export const ContextPagination = createContext<
  PaginationContextValue | undefined
>(undefined);

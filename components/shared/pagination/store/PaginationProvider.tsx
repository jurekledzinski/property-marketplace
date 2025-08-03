import { ContextPagination } from './context';
import { PaginationProviderProps } from './types';

const PaginationProvider = ({ children, value }: PaginationProviderProps) => {
  return (
    <ContextPagination.Provider value={value}>
      {children}
    </ContextPagination.Provider>
  );
};

export default PaginationProvider;

import PaginationProvider from './store';
import { getClassNamesPagination, getPaginationProps } from './utils';
import { PaginationProps } from './types';
import { usePagination } from './hooks';

export const Pagination = ({ children, ...props }: PaginationProps) => {
  const { uiPaginationProps, uxPaginationProps } = getPaginationProps(props);

  const paginationControl = usePagination(uxPaginationProps);

  const classes = getClassNamesPagination({ spacing: props.spacing });

  return (
    <PaginationProvider
      value={{
        ...paginationControl,
        ...uiPaginationProps,
        totalPages: props.totalPages,
      }}
    >
      <div className={classes}>{children}</div>
    </PaginationProvider>
  );
};

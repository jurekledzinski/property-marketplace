import { getClassNamesPaginationItems } from '@/components';
import { PaginationItemProps } from './types';

export const PaginationItem = ({
  page,
  onClick,
  ...props
}: PaginationItemProps) => {
  const classes = getClassNamesPaginationItems(props);

  return (
    <button
      {...props}
      key={page}
      className={classes.paginationItem}
      onClick={() => onClick('page', page)}
    >
      {page + 1}
    </button>
  );
};

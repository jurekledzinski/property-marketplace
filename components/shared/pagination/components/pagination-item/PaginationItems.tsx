import { PaginationItem } from './components';
import { PaginationItemsProps } from './types';
import { usePaginationContext } from '../../context';
import { getPaginationItemsProps } from '../../utils';

export const PaginationItems = ({ ...props }: PaginationItemsProps) => {
  const { currentPage, onClick, paginationItems, ...rest } =
    usePaginationContext();

  const uiPaginationProps = getPaginationItemsProps(rest);

  return (
    <>
      {paginationItems.map((page) => (
        <PaginationItem
          {...props}
          {...uiPaginationProps}
          key={page}
          page={page}
          onClick={onClick}
          isActive={currentPage === page}
        />
      ))}
    </>
  );
};

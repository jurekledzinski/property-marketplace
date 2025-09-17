import { HomeAdvertsPaginationProps } from './types';
import { Pagination, PaginationArrow, PaginationInfo } from '@/components';
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export const HomeAdvertsPagination = ({
  amountData,
  currentPage,
  itemsPerPage,
  onChangePage,
}: HomeAdvertsPaginationProps) => {
  return (
    <Pagination
      size="size-sm"
      spacing="tight"
      totalPages={amountData}
      variant="outlined"
      onChangePage={onChangePage}
      perPage={[itemsPerPage]}
    >
      <PaginationArrow id="first" label={faAnglesLeft} disabled={false} />
      <PaginationArrow id="prev" label={faChevronLeft} disabled={false} />
      <PaginationInfo
        indexStart={(currentPage - 1) * itemsPerPage + 1}
        indexEnd={Math.min(currentPage * itemsPerPage, amountData)}
        totalAmount={amountData}
      />
      <PaginationArrow id="next" label={faChevronRight} disabled={false} />
      <PaginationArrow id="last" label={faAnglesRight} disabled={false} />
    </Pagination>
  );
};

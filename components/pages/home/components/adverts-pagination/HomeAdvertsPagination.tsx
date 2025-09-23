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
  const firstPage = (currentPage - 1) * itemsPerPage + 1;
  const lastPage = Math.min(currentPage * itemsPerPage, amountData);

  return (
    <Pagination
      size="size-sm"
      spacing="tight"
      totalPages={amountData}
      variant="outlined"
      onChangePage={onChangePage}
      perPage={[itemsPerPage]}
    >
      <PaginationArrow
        id="first"
        label={faAnglesLeft}
        disabled={firstPage === 1}
      />
      <PaginationArrow
        id="prev"
        label={faChevronLeft}
        disabled={firstPage === 1}
      />
      <PaginationInfo
        indexStart={(currentPage - 1) * itemsPerPage + 1}
        indexEnd={Math.min(currentPage * itemsPerPage, amountData)}
        totalAmount={amountData}
      />
      <PaginationArrow
        id="next"
        label={faChevronRight}
        disabled={lastPage === amountData}
      />
      <PaginationArrow
        id="last"
        label={faAnglesRight}
        disabled={lastPage === amountData}
      />
    </Pagination>
  );
};

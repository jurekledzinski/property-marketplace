import { OnChangePage } from '@/components';

export type HomeAdvertsPaginationProps = {
  amountData: number;
  currentPage: number;
  itemsPerPage: number;
  onChangePage?: OnChangePage;
};

import { OnChangePage, UxPagination } from '../types';

export interface UsePaginationProps extends UxPagination {
  onChangePage?: OnChangePage;
}

export type ActionType = 'first' | 'last' | 'next' | 'prev' | 'page';

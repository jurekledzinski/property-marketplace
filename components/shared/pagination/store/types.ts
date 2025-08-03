import { ActionType } from '../hooks';
import { UiPagination } from '../types';

export interface PaginationContextValue extends UiPagination {
  currentPage: number;
  infoEnd: number;
  infoStart: number;
  onClick: (actionType: ActionType, value?: number) => void;
  paginationItems: number[];
  totalPages: number;
  onSetPerPage?: (value: number) => void;
}

export type PaginationProviderProps = {
  children: React.ReactNode;
  value: PaginationContextValue;
};

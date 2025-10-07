import { ActionType } from '../../../hooks';
import { UiPagination } from '../../../types';

export interface PaginationItemProps extends UiPagination {
  onClick: (actionType: ActionType, value?: number) => void;
  page: number;
  isActive?: boolean;
}

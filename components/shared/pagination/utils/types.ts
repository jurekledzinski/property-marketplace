import { UiPagination } from '../types';

export interface PaginationItemParams extends UiPagination {
  isActive?: boolean;
}

type PaginationParams = Pick<PaginationItemParams, 'spacing'>;

type CommonClassesParams = {
  styles: Record<string, string>;
  className: string;
  paginationParams: PaginationItemParams;
};

export type GetClassNamesPaginationItems = (params: PaginationItemParams) => {
  paginationArrow: string;
  paginationItem: string;
};

export type GetClassNamesPagination = (params: PaginationParams) => string;

export type GetClassNamesPaginationInfo = (params: UiPagination) => string;

export type GenerateCommonClasses = (params: CommonClassesParams) => string;

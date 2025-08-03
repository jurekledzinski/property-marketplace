import { Border, Color, Radius, Size, Spacing, Variant } from '@/types';

type PaginationColor = Extract<Color, 'primary' | 'secondary'>;
type PaginationSize = Size | 'size-xxs';

export type UiPagination = {
  border?: Border;
  color?: PaginationColor;
  radius?: Radius;
  size?: PaginationSize;
  spacing?: Spacing;
  variant?: Variant;
};

export type UxPagination = {
  totalPages: number;
  maxRange?: number;
  perPage?: number[];
};

export type OnChangePage = (page: number, pageSize: number) => void;

export interface PaginationProps extends UiPagination, UxPagination {
  children?: React.ReactNode;
  onChangePage?: OnChangePage;
}

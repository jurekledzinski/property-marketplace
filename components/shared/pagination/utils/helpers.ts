import { PaginationContextValue } from '../context';
import { PaginationProps } from '../types';

type CustomPaginationProps = Omit<PaginationProps, 'children'>;
type CustomPropsButton = Partial<PaginationContextValue>;

export const getPaginationProps = (props: CustomPaginationProps) => {
  const { onChangePage, totalPages, maxRange, perPage, ...rest } = props;

  const uxPaginationProps = { onChangePage, totalPages, maxRange, perPage };
  const uiPaginationProps = rest;

  return { uiPaginationProps, uxPaginationProps };
};

export const getCommonPaginationProps = <T extends CustomPropsButton>(
  props: T
) => {
  const { border, color, radius, size, spacing, variant } = props;
  return { border, color, radius, size, spacing, variant };
};

export const getPaginationItemsProps = (props: CustomPropsButton) => {
  return getCommonPaginationProps(props);
};

export const getPaginationArrowProps = (props: CustomPropsButton) => {
  return getCommonPaginationProps(props);
};

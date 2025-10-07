import styles from '../styles/Styles.module.css';
import stylesPagination from '../Pagination.module.css';
import { generateClassNames } from '@/utils-client';

import {
  GenerateCommonClasses,
  GetClassNamesPagination,
  GetClassNamesPaginationInfo,
  GetClassNamesPaginationItems,
} from './types';

export const getClassNamesPagination: GetClassNamesPagination = (params) => {
  const { spacing } = params;

  return generateClassNames(stylesPagination, {
    pagination: true,
    [`${spacing}`]: Boolean(spacing),
  });
};

const generateCommonClasses: GenerateCommonClasses = (params) => {
  const { className, paginationParams, styles } = params;
  const { border, color, isActive, radius, size, spacing, variant } =
    paginationParams;

  return generateClassNames(styles, {
    [className]: true,
    [`active`]: Boolean(isActive),
    [`${border}`]: Boolean(border),
    [`${color}`]: Boolean(color),
    [`${radius}`]: Boolean(radius),
    [`${size}`]: Boolean(size),
    [`${spacing}`]: Boolean(spacing),
    [`${variant}`]: Boolean(variant),
  });
};

export const getClassNamesPaginationItems: GetClassNamesPaginationItems = (
  params
) => {
  return {
    paginationArrow: generateCommonClasses({
      className: 'button',
      paginationParams: params,
      styles,
    }),
    paginationItem: generateCommonClasses({
      className: 'button',
      paginationParams: params,
      styles,
    }),
  };
};

export const getClassNamesPaginationInfo: GetClassNamesPaginationInfo = (
  params
) => {
  return generateCommonClasses({
    className: 'info',
    paginationParams: params,
    styles,
  });
};

import styles from '../Menu.module.css';
import { classNames, generateClassNames } from '@/utils-client';
import { MenuClassNames, MenuItemClassNames } from './types';

export const getMenuClassNames: MenuClassNames = (params) => {
  const { className, size } = params;

  return classNames(
    generateClassNames(styles, {
      menu: true,
      [`${size}`]: Boolean(size),
    }),
    className ?? ''
  );
};

export const getMenuItemClassNames: MenuItemClassNames = (params) => {
  const { className, type } = params;

  return classNames(
    generateClassNames(styles, {
      menuItem: true,
      [`${type}`]: Boolean(type),
    }),
    className ?? ''
  );
};

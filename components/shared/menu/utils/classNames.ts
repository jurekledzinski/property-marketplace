import styles from '../Menu.module.css';
import { classNames, generateClassNames } from '@/helpers';
import { MenuClassNames } from './types';

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

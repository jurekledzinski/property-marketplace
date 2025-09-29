import styles from '../../Menu.module.css';
import { classNames } from '@/helpers';
import { MenuItemProps } from './types';

export const MenuItem = ({ children, className }: MenuItemProps) => {
  return <li className={classNames(styles.menuItem, className)}>{children}</li>;
};

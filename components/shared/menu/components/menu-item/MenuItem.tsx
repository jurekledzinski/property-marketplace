import styles from '../../Menu.module.css';
import { classNames } from '@/helpers';
import { MenuItemProps } from './types';

export const MenuItem = ({ children, className, ...props }: MenuItemProps) => {
  return (
    <li className={classNames(styles.menuItem, className)} {...props}>
      {children}
    </li>
  );
};

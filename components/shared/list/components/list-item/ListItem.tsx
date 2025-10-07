import styles from '../../List.module.css';
import { classNames } from '@/utils-client';
import { ListItemProps } from './types';

export const ListItem = ({ className, children, ...props }: ListItemProps) => {
  return (
    <li {...props} className={classNames(styles.listItem, className)}>
      {children}
    </li>
  );
};

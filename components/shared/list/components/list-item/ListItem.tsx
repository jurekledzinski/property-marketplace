import styles from '../../List.module.css';
import { classNames } from '@/helpers';
import { ListItemProps } from './types';

export const ListItem = ({ className, children, ...props }: ListItemProps) => {
  return (
    <li {...props} className={classNames(styles.listItem, className)}>
      {children}
    </li>
  );
};

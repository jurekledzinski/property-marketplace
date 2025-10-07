import styles from './List.module.css';
import { classNames } from '@/utils-client';
import { ListProps } from './types';

export const List = ({ className, children, ...props }: ListProps) => {
  return (
    <ul {...props} className={classNames(styles.list, className)}>
      {children}
    </ul>
  );
};

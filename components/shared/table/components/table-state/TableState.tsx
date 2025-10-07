import styles from './TableState.module.css';
import { classNames } from '@/utils-client';
import { TableStateProps } from './types';

export const TableState = ({
  className,
  children,
  ...props
}: TableStateProps) => {
  return (
    <div {...props} className={classNames(styles.wrapper, className ?? '')}>
      {children}
    </div>
  );
};

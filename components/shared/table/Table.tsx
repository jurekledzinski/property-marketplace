import styles from './Table.module.css';
import { classNames } from '@/helpers';
import { TableProps } from './types';

export const Table = ({ className, children }: TableProps) => {
  return (
    <table className={classNames(styles.table, className)}>{children}</table>
  );
};

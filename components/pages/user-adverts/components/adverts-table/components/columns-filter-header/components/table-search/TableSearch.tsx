import styles from './TableSearch.module.css';
import { TableSearchProps } from './types';

export const TableSearch = ({
  onChange,
  value,
  ...props
}: TableSearchProps) => {
  return (
    <input
      {...props}
      type="text"
      onChange={onChange}
      value={value}
      className={styles.input}
    />
  );
};

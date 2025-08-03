import styles from './Field.module.css';
import { FiledProps } from './types';

export const Field = ({ children }: FiledProps) => {
  return <div className={styles.field}>{children}</div>;
};

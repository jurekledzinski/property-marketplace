import { LabelProps } from './types';
import styles from './Label.module.css';

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label className={styles.label} {...props}>
      {children}
    </label>
  );
};

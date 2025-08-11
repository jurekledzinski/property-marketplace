import styles from './FiltersChipsPanel.module.css';
import { FiltersChipsPanelProps } from './types';

export const FiltersChipsPanel = ({ children }: FiltersChipsPanelProps) => {
  return <div className={styles.chipBar}>{children}</div>;
};

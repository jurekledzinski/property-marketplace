'use client';
import styles from './FilterPanel.module.css';
import { FilterPanelProps } from './types';
import { Button } from '@/components';

export const FilterPanel = ({ children }: FilterPanelProps) => {
  return (
    <div className={styles.panel}>
      <div className={styles.group}>
        <Button
          label="Clear all"
          color="secondary"
          variant="outlined"
          fullWidth
        />
        <Button label="Apply" color="success" fullWidth />
      </div>
      <div className={styles.filters}>{children}</div>
    </div>
  );
};

'use client';
import styles from './FilterPanel.module.css';
import { FilterPanelProps } from './types';
import { Button } from '@/components';

export const FilterPanel = ({
  children,
  onResetAllFilters,
}: FilterPanelProps) => {
  return (
    <div className={styles.panel}>
      <div className={styles.group}>
        <Button
          label="Clear all"
          color="secondary"
          variant="outlined"
          fullWidth
          onClick={onResetAllFilters}
        />
        <Button
          color="success"
          fullWidth
          form="filterForm"
          label="Apply"
          type="submit"
        />
      </div>
      <div className={styles.filters}>{children}</div>
    </div>
  );
};

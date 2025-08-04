'use client';
import styles from './FilterPanel.module.css';
import { FilterPanelProps } from './types';
import { Button } from '@/components';

export const FilterPanel = ({ children }: FilterPanelProps) => {
  return (
    <div className={styles.panel}>
      <div className={styles.group}>
        <Button label="Clear all" color="secondary" variant="outlined" />
        <Button label="Apply" color="success" />
      </div>
      <div className={styles.filters}>{children}</div>
    </div>
  );
};

/* <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input</p>
        <p style={{ padding: 8, border: '1px solid black' }}>input a</p> */

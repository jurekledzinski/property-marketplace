'use client';
import styles from './FilterPanel.module.css';
import { FilterPanelProps } from './types';

export const FilterPanel = ({ children }: FilterPanelProps) => {
  return (
    <div className={styles.panel}>
      <div className={styles.group}>
        <button>Clear all</button>
        <button>Apply</button>
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

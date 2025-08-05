import styles from './HeaderPanel.module.css';
import { memo } from 'react';

export const HeaderPanel = memo(() => {
  return (
    <header className={styles.header}>
      <input type="text" placeholder="Search" />
      <input type="text" placeholder="Sort" />
    </header>
  );
});

HeaderPanel.displayName = 'HeaderPanel';

import styles from './AppBar.module.css';
import { AppBarProps } from './types';
import { classNames } from '@/utils-client';

export const AppBar = ({ children, className }: AppBarProps) => {
  return (
    <header className={classNames(styles.header, className!)}>
      {children}
    </header>
  );
};

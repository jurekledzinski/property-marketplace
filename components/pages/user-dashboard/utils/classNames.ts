import styles from '../UserDashboard.module.css';
import { ClassNamesUserDashboard } from './types';
import { generateClassNames } from '@/helpers';

export const getClassNamesUserDashboard: ClassNamesUserDashboard = (params) => {
  const { open } = params;

  return {
    dashboard: styles.dashboard,
    container: generateClassNames(styles, {
      container: true,
      open: Boolean(open),
    }),
    grid: styles.grid,
  };
};

import styles from '../Alert.module.css';
import { generateClassNames } from '@/helpers';
import { GetClassNamesAlert } from './types';

export const getClassNamesAlert: GetClassNamesAlert = (params) => {
  const { color, fullWidth, radius, size, variant } = params;
  return {
    alert: generateClassNames(styles, {
      alert: true,
      fullWidth: Boolean(fullWidth),
      [`${color}`]: Boolean(color),
      [`${radius}`]: Boolean(radius),
      [`${size}`]: Boolean(size),
      [`${variant}`]: Boolean(variant),
    }),
    icon: generateClassNames(styles, {
      icon: true,
      [`${color}`]: Boolean(color),
      [`${size}`]: Boolean(size),
    }),
    message: styles.message,
  };
};

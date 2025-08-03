import styles from '../Alert.module.css';
import { classNames, generateClassNames } from '@/helpers';
import { GetClassNamesAlert } from './types';

export const getClassNamesAlert: GetClassNamesAlert = (params) => {
  const { color, fullWidth, radius, size, variant } = params;
  return {
    alert: classNames(
      styles.alert,
      generateClassNames(styles, {
        [`${color}`]: Boolean(color),
        ['fullWidth']: Boolean(fullWidth),
        [`${radius}`]: Boolean(radius),
        [`${size}`]: Boolean(size),
        [`${variant}`]: Boolean(variant),
      })
    ),
    icon: classNames(
      styles.icon,
      generateClassNames(styles, {
        [`${color}`]: Boolean(color),
        [`${size}`]: Boolean(size),
      })
    ),
    message: styles.message,
  };
};

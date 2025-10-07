import styles from '../Alert.module.css';
import stylesSpace from '@/styles/space.module.css';
import { generateClassNames, spacingClasses } from '@/utils-client';
import { GetClassNamesAlert } from './types';

export const getClassNamesAlert: GetClassNamesAlert = (params) => {
  const {
    color,
    fullWidth,
    radius,
    size,
    variant = 'contained',
    ...rest
  } = params;

  const spacing = spacingClasses(rest);

  const mergedClasses = { ...styles, ...stylesSpace };

  return {
    alert: generateClassNames(mergedClasses, {
      alert: true,
      fullWidth: Boolean(fullWidth),
      [`${color}`]: Boolean(color),
      [`${radius}`]: Boolean(radius),
      [`${variant}`]: Boolean(variant),
      ...spacing,
    }),
    icon: generateClassNames(styles, {
      icon: true,
      [`${color}`]: Boolean(color),
      [`${size}`]: Boolean(size),
    }),
    iconClose: styles.iconClose,
    message: generateClassNames(styles, {
      message: true,
      [`${size}`]: Boolean(size),
    }),
  };
};

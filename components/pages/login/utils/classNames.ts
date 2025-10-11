import styles from '../Login.module.css';
import stylesCommon from '../Common.module.css';
import { classNames } from '@/utils-client';

export const getClassNamesBackground = (isLoaded: boolean) => {
  return isLoaded
    ? classNames(styles.leftBackground, stylesCommon.left)
    : classNames(styles.leftBackground, stylesCommon.left, 'skeleton');
};

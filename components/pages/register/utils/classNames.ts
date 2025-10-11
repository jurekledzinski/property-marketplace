import styles from '../Register.module.css';
import stylesCommon from '../../login/Common.module.css';
import { classNames } from '@/utils-client';

export const getClassNamesBackground = (isLoaded: boolean) => {
  return isLoaded
    ? classNames(styles.leftBackground, stylesCommon.left)
    : classNames(styles.leftBackground, stylesCommon.left, 'skeleton');
};

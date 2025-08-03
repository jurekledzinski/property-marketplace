import styles from '../Form.module.css';
import { classNames } from '@/helpers';
import { Orientation } from '@/types';

export const getClassForm = (orientation?: Orientation) => ({
  form: classNames(styles.form, orientation ? styles[orientation] : ''),
  formGroup: classNames(styles['form-group']),
});

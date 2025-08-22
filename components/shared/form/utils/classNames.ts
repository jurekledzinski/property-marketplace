import styles from '../Form.module.css';
import stylesSpace from '@styles/space.module.css';
import { classNames, generateClassNames } from '@/helpers';
import { ClassNamesForm, ClassNamesFormGroup } from './types';

export const getClassNamesForm: ClassNamesForm = (params) => {
  const { className, gap = 'g-xs', orientation } = params;

  const mergedStyles = { ...styles, ...stylesSpace };

  return classNames(
    generateClassNames(mergedStyles, {
      form: true,
      [`${gap}`]: Boolean(gap),
      [`${orientation}`]: Boolean(orientation),
    }),
    className ?? ''
  );
};

export const getClassNamesFormGroup: ClassNamesFormGroup = (params) => {
  const { className, gap = 'g-xs', orientation } = params;

  const mergedStyles = { ...styles, ...stylesSpace };

  return classNames(
    generateClassNames(mergedStyles, {
      ['form-group']: true,
      [`${gap}`]: Boolean(gap),
      [`${orientation}`]: Boolean(orientation),
    }),
    className ?? ''
  );
};

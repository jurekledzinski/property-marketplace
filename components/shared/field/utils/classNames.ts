import styles from '../Field.module.css';
import stylesSpace from '@styles/space.module.css';
import { classNames, generateClassNames } from '@/helpers';
import { ClassNamesField } from './types';

export const getClassNamesField: ClassNamesField = ({ className, gap }) => {
  const mergeStyles = { ...styles, ...stylesSpace };

  return classNames(
    generateClassNames(mergeStyles, {
      field: true,
      [`${gap}`]: Boolean(gap),
    }),
    className ?? ''
  );
};

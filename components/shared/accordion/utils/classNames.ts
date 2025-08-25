import styles from '../Accordion.module.css';
import stylesSpace from '@/styles/space.module.css';
import { ClassesAccordionContent, ClassesAccordionHeader } from './types';
import { generateClassNames } from '@/helpers';

export const getClassNamesAccordionHeader: ClassesAccordionHeader = (
  params
) => {
  const { color, p, showCheckbox = false, variant } = params;

  return {
    header: generateClassNames(styles, {
      header: true,
      [`${color}`]: Boolean(color),
      [`${p}`]: Boolean(p),
      [`${variant}`]: Boolean(variant),
    }),
    ...(!showCheckbox ? { checkbox: styles.hidden } : {}),
  };
};

export const getClassNamesContent: ClassesAccordionContent = (params) => {
  const { p, pb, pt, pl, pr, size } = params;

  const mergedStyles = { ...styles, ...stylesSpace };

  return {
    content: generateClassNames(styles, {
      content: true,
      [`${size}`]: Boolean(size),
    }),
    inner: generateClassNames(mergedStyles, {
      [`${p}`]: Boolean(p),
      [`${pb}`]: Boolean(pb),
      [`${pt}`]: Boolean(pt),
      [`${pl}`]: Boolean(pl),
      [`${pr}`]: Boolean(pr),
    }),
  };
};

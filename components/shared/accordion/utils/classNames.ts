import styles from '../Accordion.module.css';
import stylesSpace from '@/styles/space.module.css';
import { ClassesAccordionContent, ClassesAccordionHeader } from './types';
import { classNames, generateClassNames, spacingClasses } from '@/utils-client';
import { SpacingToken } from '@/types';

const commonSpacingClassNames = (rest: SpacingToken) => {
  const spacing = spacingClasses(rest);
  const mergedStyles = { ...styles, ...stylesSpace };
  return { spacing, mergedStyles };
};

export const getClassNamesAccordionHeader: ClassesAccordionHeader = (
  params
) => {
  const { color, variant, size, ...rest } = params;

  const { mergedStyles, spacing } = commonSpacingClassNames(rest);

  return generateClassNames(mergedStyles, {
    header: true,
    [`${color}`]: Boolean(color),
    [`${size}`]: Boolean(size),
    [`${variant}`]: Boolean(variant),
    ...spacing,
  });
};

export const getClassNamesContent: ClassesAccordionContent = (params) => {
  const { className, size, ...rest } = params;

  const { mergedStyles, spacing } = commonSpacingClassNames(rest);

  return {
    content: classNames(
      generateClassNames(styles, {
        content: true,
        [`${size}`]: Boolean(size),
      }),
      className || ''
    ),
    inner: generateClassNames(mergedStyles, {
      ...spacing,
    }),
  };
};

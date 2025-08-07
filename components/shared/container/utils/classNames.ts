import styles from '../Container.module.css';
import stylesSpace from '@/styles/space.module.css';
import { ClassesContainer } from './types';
import { classNames, generateClassNames } from '@/helpers';

export const getClassesContainer: ClassesContainer = (params) => {
  const {
    className,
    m,
    mb,
    ml,
    mr,
    mt,
    maxWidth = 'mw-md',
    p,
    pb,
    pl,
    pr,
    pt,
  } = params;

  const mergedClasses = { ...styles, ...stylesSpace };

  return classNames(
    generateClassNames(mergedClasses, {
      container: true,
      [`${m}`]: Boolean(m),
      [`${mb}`]: Boolean(mb),
      [`${ml}`]: Boolean(ml),
      [`${mr}`]: Boolean(mr),
      [`${mt}`]: Boolean(mt),
      [`${maxWidth}`]: Boolean(maxWidth),
      [`${p}`]: Boolean(p),
      [`${pb}`]: Boolean(pb),
      [`${pl}`]: Boolean(pl),
      [`${pr}`]: Boolean(pr),
      [`${pt}`]: Boolean(pt),
    }),
    className ?? ''
  );
};

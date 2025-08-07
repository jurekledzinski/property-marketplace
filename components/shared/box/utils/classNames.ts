import stylesSpace from '@/styles/space.module.css';
import { ClassesBox } from './types';
import { classNames, generateClassNames } from '@/helpers';

export const getClassesBox: ClassesBox = (params) => {
  const { className, m, mb, mt, ml, mr, p, pb, pl, pr, pt } = params;

  return classNames(
    generateClassNames(stylesSpace, {
      [`${m}`]: Boolean(m),
      [`${mb}`]: Boolean(mb),
      [`${ml}`]: Boolean(ml),
      [`${mr}`]: Boolean(mr),
      [`${mt}`]: Boolean(mt),
      [`${p}`]: Boolean(p),
      [`${pb}`]: Boolean(pb),
      [`${pl}`]: Boolean(pl),
      [`${pr}`]: Boolean(pr),
      [`${pt}`]: Boolean(pt),
    }),
    className ?? ''
  );
};

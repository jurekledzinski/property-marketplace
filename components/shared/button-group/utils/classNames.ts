import styles from '../ButtonGroup.module.css';
import stylesSpace from '@/styles/space.module.css';
import { classNames, generateClassNames } from '@/helpers';
import { GetClassButtonGroup } from './types';

export const getClassButtonGroup: GetClassButtonGroup = (params) => {
  const {
    aligment,
    justify,
    fullWidth,
    orientation,
    spacing,
    m,
    mb,
    ml,
    mr,
    mt,
    p,
    pb,
    pl,
    pr,
    pt,
  } = params;

  const mergeStyles = { ...styles, ...stylesSpace };

  return classNames(
    styles['button-group'],
    generateClassNames(mergeStyles, {
      [`${aligment}`]: Boolean(aligment),
      [`full-width`]: Boolean(fullWidth),
      [`${justify}`]: Boolean(justify),
      [`${orientation}`]: Boolean(orientation),
      [`${spacing}`]: Boolean(spacing),
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
    })
  );
};

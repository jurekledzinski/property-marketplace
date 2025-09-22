import { classNames, generateClassNames } from '@/helpers';
import styles from '../Drawer.module.css';
import { DrawerProps } from '../types';

type Params = Omit<DrawerProps, 'children'>;

export const getClassNamesDrawer = (params: Params) => {
  const { className, direction = 'right', open, variant } = params;

  return {
    drawer: classNames(
      generateClassNames(styles, {
        drawer: true,
        ['open']: Boolean(open),
        [direction]: Boolean(direction),
        ['horizontal']: direction === 'bottom' || direction === 'top',
        ['vertical']: direction === 'left' || direction === 'right',
        [`${variant}`]: Boolean(variant),
      }),
      className ?? ''
    ),
    inner: styles.inner,
  };
};

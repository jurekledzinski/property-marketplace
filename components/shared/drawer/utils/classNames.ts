import styles from '../Drawer.module.css';
import { DrawerProps } from '../types';
import { generateClassNames } from '@/helpers';

type Params = Omit<DrawerProps, 'children'>;

export const getClassNamesDrawer = (params: Params) => {
  const { direction = 'right', open, variant } = params;

  return {
    drawer: generateClassNames(styles, {
      ['open']: Boolean(open),
      [direction]: Boolean(direction),
      ['horizontal']: direction === 'bottom' || direction === 'top',
      ['vertical']: direction === 'left' || direction === 'right',
      [`${variant}`]: Boolean(variant),
    }),
    inner: generateClassNames(styles, {
      inner: true,
    }),
  };
};

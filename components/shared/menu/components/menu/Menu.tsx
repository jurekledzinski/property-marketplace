import { MenuProps } from './types';
import { getMenuClassNames } from '../../utils';

export const Menu = ({ children, className, size }: MenuProps) => {
  const classes = getMenuClassNames({ className, size });

  return <ul className={classes}>{children}</ul>;
};

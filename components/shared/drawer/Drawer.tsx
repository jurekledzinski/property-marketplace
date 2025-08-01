import { DrawerProps } from './types';
import { getClassNamesDrawer } from './utils';

export const Drawer = ({ children, ...props }: DrawerProps) => {
  const classes = getClassNamesDrawer(props);

  return (
    <div className={classes.drawer}>
      <div className={classes.inner}>{children}</div>
    </div>
  );
};

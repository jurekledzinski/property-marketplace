import { DrawerProps } from './types';
import { getClassNamesDrawer, drawerCSSVariables } from './utils';

export const Drawer = ({
  children,
  gap,
  top,
  width,
  zIndex,
  ...props
}: DrawerProps) => {
  const classes = getClassNamesDrawer(props);
  const inline = drawerCSSVariables({ gap, top, width, zIndex });

  return (
    <div className={classes.drawer} style={inline}>
      <div className={classes.inner}>{children}</div>
    </div>
  );
};

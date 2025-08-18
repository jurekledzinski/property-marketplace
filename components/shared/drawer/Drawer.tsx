import { DrawerProps } from './types';
import { getClassNamesDrawer, getDrawerInlineStyles } from './utils';

export const Drawer = ({
  children,
  gap,
  top,
  width,
  ...props
}: DrawerProps) => {
  const classes = getClassNamesDrawer(props);
  const inline = getDrawerInlineStyles({ gap, top, width });

  return (
    <div className={classes.drawer} style={inline}>
      <div className={classes.inner}>{children}</div>
    </div>
  );
};

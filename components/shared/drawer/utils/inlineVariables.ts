export const drawerCSSVariables = ({
  gap = 0,
  width = 250,
  top = 0,
  zIndex = 40,
}: {
  gap?: number;
  width?: number;
  top?: number;
  zIndex?: number;
}) =>
  ({
    ...(gap ? { '--drawer-gap': `${gap}px` } : {}),
    ...(width ? { '--drawer-width': `${width}px` } : {}),
    ...(top ? { '--drawer-top': `${top}px` } : { '--drawer-top': `${top}px` }),
    ...(zIndex ? { '--z-drawer': zIndex } : {}),
  } as React.CSSProperties);

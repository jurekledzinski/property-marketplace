export const getDrawerInlineStyles = ({
  gap = 8,
  width = 250,
  top = 0,
}: {
  gap?: number;
  width?: number;
  top?: number;
}) =>
  ({
    ...(gap ? { '--drawer-gap': `${gap}px` } : {}),
    ...(width ? { '--drawer-width': `${width}px` } : {}),
    ...(top ? { '--drawer-top': `${top}px` } : { '--drawer-top': `${top}px` }),
  } as React.CSSProperties);

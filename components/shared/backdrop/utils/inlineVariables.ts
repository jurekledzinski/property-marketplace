export const backdropCSSVariables = ({ zIndex }: { zIndex?: number }) =>
  ({
    ...(zIndex ? { '--z-backdrop': zIndex } : {}),
  } as React.CSSProperties);

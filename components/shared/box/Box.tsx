import { BoxProps } from './types';
import { filterProps, spacingInlineStyles, spacingValues } from '@/helpers';
import { getClassesBox } from './utils';

export const Box = ({ children, ...props }: BoxProps) => {
  const classes = getClassesBox(props);
  const spacingProps = filterProps(props, spacingValues, true);
  const inline = spacingInlineStyles(spacingProps);

  return (
    <div {...props} className={classes} style={inline}>
      {children}
    </div>
  );
};

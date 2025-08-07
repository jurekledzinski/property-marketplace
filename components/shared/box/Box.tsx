import { BoxProps } from './types';
import { getClassesBox, getInlineBoxStyles } from './utils';

export const Box = ({ children, ...props }: BoxProps) => {
  const classes = getClassesBox(props);
  const inline = getInlineBoxStyles(props);

  return (
    <div {...props} className={classes} style={inline}>
      {children}
    </div>
  );
};

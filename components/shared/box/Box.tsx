import { BoxProps } from './types';
import { getClassesBox } from './utils';

export const Box = ({
  className,
  children,
  margin,
  padding,
  ...props
}: BoxProps) => {
  const classes = getClassesBox({ className, margin, padding });

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

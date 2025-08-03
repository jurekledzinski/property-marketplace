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
  console.log('Box', classes);
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

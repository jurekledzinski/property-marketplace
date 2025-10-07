import { FormProps } from './types';
import { getClassNamesForm } from './utils';

export const Form = ({
  className,
  children,
  gap,
  orientation,
  ...props
}: FormProps) => {
  const classes = getClassNamesForm({ className, gap, orientation });

  return (
    <form className={classes} {...props}>
      {children}
    </form>
  );
};

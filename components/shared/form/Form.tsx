import { classNames } from '@/helpers';
import { FormProps } from './types';
import { getClassForm } from './utils';

export const Form = ({ className, children, ...props }: FormProps) => {
  const classes = getClassForm(props.orientation);

  return (
    <form className={classNames(classes.form, className)} {...props}>
      {children}
    </form>
  );
};

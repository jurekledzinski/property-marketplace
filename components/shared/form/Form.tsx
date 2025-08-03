import { FormProps } from './types';
import { getClassForm } from './utils';

export const Form = ({ children, ...props }: FormProps) => {
  const classes = getClassForm(props.orientation);

  return (
    <form className={classes.form} {...props}>
      {children}
    </form>
  );
};

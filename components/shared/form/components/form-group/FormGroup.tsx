import { FormGroupProps } from './types';
import { getClassForm } from '../../utils';

export const FormGroup = ({ children, orientation }: FormGroupProps) => {
  const classes = getClassForm(orientation);

  return <div className={classes.formGroup}>{children}</div>;
};

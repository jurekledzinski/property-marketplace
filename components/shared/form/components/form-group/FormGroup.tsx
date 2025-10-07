import { FormGroupProps } from './types';
import { getClassNamesFormGroup } from '../../utils';

export const FormGroup = ({
  className,
  children,
  gap,
  orientation,
}: FormGroupProps) => {
  const classes = getClassNamesFormGroup({ className, gap, orientation });

  return <div className={classes}>{children}</div>;
};

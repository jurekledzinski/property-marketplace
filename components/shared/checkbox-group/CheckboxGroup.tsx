import { CheckboxGroupProps } from './types';
import { getClassCheckboxGroup } from './utils';

export const CheckboxGroup = ({
  children,
  fullWidth,
  marginBottom,
  marginTop,
  orientation = 'column',
  spacing = 'normal',
}: CheckboxGroupProps) => {
  const classes = getClassCheckboxGroup(orientation, spacing, fullWidth);

  return (
    <div className={classes} style={{ marginTop, marginBottom }}>
      {children}
    </div>
  );
};

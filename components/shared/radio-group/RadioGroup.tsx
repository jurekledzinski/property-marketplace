import { getClassRadioGroup } from './utils';
import { RadioGroupProps } from './types';

export const RadioGroup = ({
  children,
  fullWidth,
  marginBottom,
  marginTop,
  spacing,
  orientation,
}: RadioGroupProps) => {
  const classes = getClassRadioGroup(orientation, spacing, fullWidth);
  return (
    <div className={classes} style={{ marginTop, marginBottom }}>
      {children}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';

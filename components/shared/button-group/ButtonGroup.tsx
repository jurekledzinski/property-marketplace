import { ButtonGroupProps } from './types';
import { getClassButtonGroup } from './utils';

export const ButtonGroup = ({
  children,
  marginBottom,
  marginTop,
  ...props
}: ButtonGroupProps) => {
  const classes = getClassButtonGroup({ ...props });

  return (
    <div
      aria-label="Button group"
      className={classes}
      role="group"
      style={{ marginTop, marginBottom }}
    >
      {children}
    </div>
  );
};

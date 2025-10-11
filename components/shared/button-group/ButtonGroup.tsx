import { ButtonGroupProps } from './types';
import { getClassButtonGroup } from './utils';

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  const classes = getClassButtonGroup(props);

  return (
    <div aria-label="Button group" className={classes} role="group">
      {children}
    </div>
  );
};

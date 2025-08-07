import { ButtonGroupProps } from './types';
import { getClassButtonGroup, getInlineBtnGroupStyles } from './utils';

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  const classes = getClassButtonGroup(props);
  const inline = getInlineBtnGroupStyles(props);

  return (
    <div
      aria-label="Button group"
      className={classes}
      role="group"
      style={inline}
    >
      {children}
    </div>
  );
};

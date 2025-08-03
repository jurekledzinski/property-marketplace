import { messageClassNames } from './utils/classNames';
import { MessageProps } from './types';

export const Message = ({ variant = 'error', children }: MessageProps) => {
  const classes = messageClassNames(variant);
  const role =
    variant === 'warning' || variant === 'error' ? 'alert' : 'status';

  return (
    <p className={classes.message} role={role}>
      {children}
    </p>
  );
};

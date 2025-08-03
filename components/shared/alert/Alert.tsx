import { AlertProps } from './types';
import { getClassNamesAlert } from './utils';
import { Icon } from '@/components';

export const Alert = ({ ...props }: AlertProps) => {
  const { icon, message } = props;
  const classes = getClassNamesAlert({ ...props });

  return (
    <div className={classes.alert}>
      <span className={classes.icon}>
        <Icon icon={icon} />
      </span>
      <p className={classes.message}>{message}</p>
    </div>
  );
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getClassIcon } from './utils';
import { IconProps } from './types';
import '../../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export const Icon = ({ className, color, ...props }: IconProps) => {
  const classes = getClassIcon(className, color);

  return <FontAwesomeIcon className={classes} {...props} />;
};

import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { Icon } from '@/types';

export type NoResultsProps = {
  icon: Icon;
  text: string;
  className?: string;
  iconSize?: FontAwesomeIconProps['size'];
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

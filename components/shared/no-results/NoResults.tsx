import styles from './NoResults.module.css';
import { classNames } from '@/utils-client';
import { Heading } from '../heading';
import { Icon } from '../icon';
import { NoResultsProps } from './types';

export const NoResults = ({
  className,
  icon,
  iconSize = '2x',
  level = 4,
  text,
}: NoResultsProps) => {
  return (
    <div className={classNames(styles.container, className ?? '')}>
      <div className={styles.wrapper}>
        <Icon icon={icon} size={iconSize} />
        <Heading level={level}>{text}</Heading>
      </div>
    </div>
  );
};

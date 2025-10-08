import styles from './NoResults.module.css';
import { classNames } from '@/utils-client';
import { Heading } from '../heading';
import { Icon } from '../icon';
import { NoResultsProps } from './types';

export const NoResults = ({ className, icon, text }: NoResultsProps) => {
  return (
    <div className={classNames(styles.container, className ?? '')}>
      <div className={styles.wrapper}>
        <Icon icon={icon} size="2x" />
        <Heading level={4}>{text}</Heading>
      </div>
    </div>
  );
};

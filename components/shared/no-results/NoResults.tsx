import styles from './NoResults.module.css';
import { Heading } from '../heading';
import { Icon } from '../icon';
import { NoResultsProps } from './types';

export const NoResults = ({ icon, text }: NoResultsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Icon icon={icon} size="2x" />
        <Heading level={4}>{text}</Heading>
      </div>
    </div>
  );
};

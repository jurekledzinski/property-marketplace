import { PropertyDetailsProps } from './types';
import styles from './PropertyDetails.module.css';
import { Box, Heading } from '@/components';

const data = {
  country: 'France',
  city: 'Paris',
};

export const PropertyDetails = ({}: PropertyDetailsProps) => {
  return (
    <Box className={styles.details}>
      <Heading level={4}>Property details</Heading>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Location</span>
          <span>New york, NY</span>
        </li>
        <li className={styles.item}>
          <span>Location</span>
          <span>New york, NY</span>
        </li>
        <li className={styles.item}>
          <span>Location</span>
          <span>New york, NY</span>
        </li>
        <li className={styles.item}>
          <span>Location</span>
          <span>New york, NY</span>
        </li>
        <li className={styles.item}>
          <span>Location</span>
          <span>New york, NY</span>
        </li>
      </ul>
    </Box>
  );
};

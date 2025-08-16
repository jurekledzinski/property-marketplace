import { PropertyDetailsProps } from './types';
import styles from './PropertyDetails.module.css';
import { Box, Heading } from '@/components';
import { useFormatDetails } from './hooks';

export const PropertyDetails = ({ details }: PropertyDetailsProps) => {
  const formatedDetails = useFormatDetails({ details });

  return (
    <Box className={styles.details}>
      <Heading level={4}>Property details</Heading>
      <ul className={styles.list}>
        {Object.entries(formatedDetails).map((detail) => (
          <li key={detail[0]} className={styles.item}>
            <span>{detail[0]}</span>
            <span>{detail[1]}</span>
          </li>
        ))}
      </ul>

      <p>{details.description}</p>

      <Box>
        <Heading level={4} mb="mb-sm">
          Amenitis
        </Heading>
      </Box>
    </Box>
  );
};

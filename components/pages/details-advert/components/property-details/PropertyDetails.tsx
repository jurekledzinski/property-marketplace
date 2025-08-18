import styles from './PropertyDetails.module.css';
import { amenitiesIcons } from './utils';
import { Box, Heading, Icon, List, ListItem } from '@/components';
import { PropertyDetailsProps } from './types';
import { useFormatDetails } from './hooks';

export const PropertyDetails = ({ details }: PropertyDetailsProps) => {
  const formatedDetails = useFormatDetails({ details });

  return (
    <Box className={styles.details}>
      <Heading level={4} mb="mb-md">
        Property details
      </Heading>

      <List>
        {Object.entries(formatedDetails).map((detail) => (
          <ListItem className={styles.detailItem} key={detail[0]}>
            <span>{detail[0]}</span>
            <span>{detail[1]}</span>
          </ListItem>
        ))}
      </List>

      <Heading level={4} mb="mb-md" mt="mt-md">
        Description
      </Heading>

      <p>{details.description}</p>

      <Heading level={4} mb="mb-md" mt="mt-md">
        Amenitis
      </Heading>

      <List className={styles.amenitiesList}>
        {details.amenities.map((amenity) => (
          <ListItem className={styles.amenityItem} key={amenity}>
            <Icon
              icon={amenitiesIcons[amenity as keyof typeof amenitiesIcons]}
            />
            {amenity}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

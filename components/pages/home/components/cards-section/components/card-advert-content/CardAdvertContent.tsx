import styles from './CardAdvertContent.module.css';
import { CardAdvertContentProps } from './types';
import {
  faBath,
  faBed,
  faLocationDot,
  faRulerCombined,
} from '@fortawesome/free-solid-svg-icons';

import {
  Box,
  Button,
  ButtonGroup,
  CardContent,
  Heading,
  Icon,
} from '@/components';

export const CardAdvertContent = ({
  advertCard: {
    area,
    bathrooms,
    city,
    country,
    id,
    postalCode,
    price,
    rooms,
    street,
    title,
    status,
    state,
  },
  queryParams,
}: CardAdvertContentProps) => {
  return (
    <CardContent className={styles.content}>
      <Heading className={styles.title} level={3}>
        {title}
      </Heading>

      <p className={styles.location}>
        <Icon color="negative" icon={faLocationDot} /> {street},{postalCode},{' '}
        {country}, {state}, {city}
      </p>

      <Box className={styles.amenities}>
        <Icon icon={faBed} />
        {rooms > 1 ? `${rooms} rooms` : `${rooms} room`}
        <Icon icon={faBath} />
        {bathrooms > 1 ? `${bathrooms} baths` : `${bathrooms} bath`}
        <Icon icon={faRulerCombined} />
        {area} m²
      </Box>

      <Heading className={styles.price} level={4}>
        {status.toLowerCase() === 'sale' ? `${price}` : `${price}/month`}
      </Heading>

      <ButtonGroup orientation="row" justify="justify-end" fullWidth p="p-md">
        <Button
          href={`adverts/${encodeURIComponent(title)}/${id}?${queryParams}`}
          label="Read more ..."
          variant="contained"
          color="primary"
        />
      </ButtonGroup>
    </CardContent>
  );
};

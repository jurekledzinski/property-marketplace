import styles from './CardAdvert.module.css';
import { CardAdvertProps } from './types';
import { formatNumber } from '@/helpers';
import {
  faBath,
  faBed,
  faLocationDot,
  faRulerCombined,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Heading,
  Icon,
  Image,
  ImageContainer,
  optionsFormat,
} from '@/components';

export const CardAdvert = ({ dataAdvert }: CardAdvertProps) => {
  const {
    area,
    bathrooms,
    city,
    country,
    postalCode,
    price,
    rooms,
    src,
    street,
    title,
    typeAdvert,
  } = dataAdvert;

  const format = formatNumber(price.toString(), 'nl-NL', optionsFormat);

  return (
    <Card className={styles.card}>
      <CardHeader className={styles.header}>
        <ImageContainer className={styles.container} loader="skeleton">
          {({ onLoad, onError, isError, isLoading }) => (
            <>
              {isError && !isLoading ? (
                <Alert
                  color="negative"
                  icon={faTriangleExclamation}
                  message="Failed to load image"
                  fullWidth
                  size="size-xs"
                />
              ) : (
                <Image
                  className={styles.image}
                  src={src}
                  onLoad={onLoad}
                  onError={onError}
                  alt="Advert image"
                  width={850}
                  height={480}
                />
              )}
            </>
          )}
        </ImageContainer>
      </CardHeader>
      <CardContent className={styles.content}>
        <Heading className={styles.title} level={3}>
          {title}
        </Heading>

        <p className={styles.location}>
          <Icon icon={faLocationDot} /> {street} {postalCode} {city} {country}
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
          {typeAdvert.toLowerCase() === 'sale'
            ? `${format.format}`
            : `${format.format}/month`}
        </Heading>

        <ButtonGroup orientation="row" justify="justify-end" fullWidth p="p-md">
          <Button label="Read more ..." variant="contained" color="primary" />
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

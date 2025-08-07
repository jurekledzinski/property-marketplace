import styles from './CardAdvert.module.css';
import { CardAdvertProps } from './types';
import {
  faBath,
  faBed,
  faLocationDot,
  faRulerCombined,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Heading,
  Icon,
  Image,
  ImageContainer,
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
        <Heading className={styles.title} level={4}>
          {title}
        </Heading>
        <p className={styles.location}>
          <Icon icon={faLocationDot} /> {street} {postalCode} {city} {country}
        </p>
        <p className={styles.price}>
          {typeAdvert.toLowerCase() === 'sale'
            ? `${price}€`
            : `${price}€/month`}
        </p>
        <ButtonGroup orientation="row" justify="justify-end" fullWidth p="p-md">
          <Button label="Read more ..." variant="outlined" color="success" />
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

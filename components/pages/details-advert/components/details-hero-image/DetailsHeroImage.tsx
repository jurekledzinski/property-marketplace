'use client';
import styles from './DetailsHeroImage.module.css';
import { Alert, Box, Heading, Image, ImageContainer } from '@/components';
import { DetailsHeroImageProps } from './types';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export const DetailsHeroImage = ({
  images,
  index = 0,
  title,
  price,
  status,
}: DetailsHeroImageProps) => {
  return (
    <article className={styles.detailsHero}>
      <ImageContainer loader="skeleton">
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
                className={styles.detailsImage}
                src={images[index]}
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

      <Box className={styles.headings}>
        <Heading className={styles.price} level={3}>
          {status === 'rent' ? `${price}/month` : price}
        </Heading>
        <Heading className={styles.detailsHeading} level={2}>
          {title}
        </Heading>
      </Box>
    </article>
  );
};

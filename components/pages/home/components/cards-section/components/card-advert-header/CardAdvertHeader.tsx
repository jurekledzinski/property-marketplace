import styles from './CardAdvertHeader.module.css';
import { Alert, CardHeader, Image, ImageContainer } from '@/components';
import { CardAdvertHeaderProps } from './types';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export const CardAdvertHeader = ({ src }: CardAdvertHeaderProps) => {
  return (
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
                priority={true}
              />
            )}
          </>
        )}
      </ImageContainer>
    </CardHeader>
  );
};

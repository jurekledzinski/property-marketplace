import styles from './CarouselThumbnails.module.css';
import { Alert, Image, ImageContainer } from '@/components';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { GroupThumbnailsProps } from './types';

export const CarouselThumbnails = ({
  carouselControl,
  images,
  onClickThumbnail,
}: GroupThumbnailsProps) => {
  return (
    <div className={styles.container}>
      <div
        ref={carouselControl.ref}
        className={styles.list}
        style={{ transform: `translateX(${carouselControl.transformX}px)` }}
      >
        {images.map((image, index) => (
          <ImageContainer
            className={styles.item}
            key={image.url}
            loader="skeleton"
            onClick={() => onClickThumbnail(index)}
          >
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
                    src={image.url}
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
        ))}
      </div>
    </div>
  );
};

'use client';
import '@splidejs/react-splide/css';
import styles from './CarouselThumbnails.module.css';
import { Alert, Image, ImageContainer } from '@/components';
import { carouselOptions } from './constants';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { GroupThumbnailsProps } from './types';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export const CarouselThumbnails = ({
  images,
  onClickThumbnail,
}: GroupThumbnailsProps) => {
  return (
    <div className={styles.container}>
      <Splide
        aria-label="Advert images"
        className={styles.splide}
        options={carouselOptions}
      >
        {images.map((image, index) => (
          <SplideSlide
            key={image.fileId}
            onClick={() => onClickThumbnail(index)}
          >
            <ImageContainer
              className={styles.item}
              key={image.url}
              loader="skeleton"
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
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

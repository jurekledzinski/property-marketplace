import { useCarouselThumbnails } from './hooks';

export type GroupThumbnailsProps = {
  images: string[];
  onClickThumbnail: (index: number) => void;
  carouselControl: ReturnType<typeof useCarouselThumbnails>;
};

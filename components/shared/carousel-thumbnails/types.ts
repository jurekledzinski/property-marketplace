import { useCarouselThumbnails } from './hooks';

export type GroupThumbnailsProps = {
  images: { url: string; fileId: string }[];
  onClickThumbnail: (index: number) => void;
  carouselControl: ReturnType<typeof useCarouselThumbnails>;
};

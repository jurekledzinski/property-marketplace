export type GroupThumbnailsProps = {
  images: { url: string; fileId: string }[];
  onClickThumbnail: (index: number) => void;
};

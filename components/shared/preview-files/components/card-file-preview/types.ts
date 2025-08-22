export type CardFilePreviewProps = {
  file: File | string;
  index: number;
  onRemove: (index: number) => void;
  gridPlacement?: 'column' | 'grid' | 'row';
};

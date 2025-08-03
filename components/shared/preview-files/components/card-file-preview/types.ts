export type CardFilePreviewProps = {
  file: File;
  index: number;
  onRemove: (index: number) => void;
  gridPlacement?: 'column' | 'grid' | 'row';
};

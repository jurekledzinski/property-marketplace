export type CardFilePreviewProps = {
  file: File | string;
  index: number;
  onRemove: (index: number, file: string | File) => void;
  gridPlacement?: 'column' | 'grid' | 'row';
};

export type CardFilePreviewProps = {
  file: File | { url: string; fileId: string };
  index: number;
  onRemove: (
    index: number,
    file: { url: string; fileId: string } | File
  ) => void;
  gridPlacement?: 'column' | 'grid' | 'row';
};

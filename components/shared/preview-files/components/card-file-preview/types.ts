export type CardFilePreviewProps = {
  file: File | { fileId: string; name: string; url: string };
  index: number;
  onRemove: (
    index: number,
    file: { fileId: string; name: string; url: string } | File
  ) => void;
  gridPlacement?: 'column' | 'grid' | 'row';
};

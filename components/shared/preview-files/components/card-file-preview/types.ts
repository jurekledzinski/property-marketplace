export type CardFilePreviewProps = {
  file:
    | File
    | { fileId: string; name: string; url: string; isOriginal?: boolean };
  index: number;
  onRemove: (
    index: number,
    file:
      | { fileId: string; name: string; url: string; isOriginal?: boolean }
      | File
  ) => void;
  gridPlacement?: 'column' | 'grid' | 'row';
};

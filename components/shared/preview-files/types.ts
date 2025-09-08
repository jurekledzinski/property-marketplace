export type PreviewFileProps = {
  images: (
    | File
    | { fileId: string; name: string; url: string; isOriginal?: boolean }
  )[];
  onRemove: (
    index: number,
    file:
      | { fileId: string; name: string; url: string; isOriginal?: boolean }
      | File
  ) => void;
  children?: React.ReactNode;
  gridPlacement?: 'column' | 'grid' | 'row';
};

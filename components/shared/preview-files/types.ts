export type PreviewFileProps = {
  children?: React.ReactNode;
  images: (File | { url: string; fileId: string })[];
  gridPlacement?: 'column' | 'grid' | 'row';
  onRemove: (
    index: number,
    file: { url: string; fileId: string } | File
  ) => void;
};

export type PreviewFileProps = {
  children?: React.ReactNode;
  images: (File | { fileId: string; name: string; url: string })[];
  gridPlacement?: 'column' | 'grid' | 'row';
  onRemove: (
    index: number,
    file: { fileId: string; name: string; url: string } | File
  ) => void;
};

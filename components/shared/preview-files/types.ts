export type PreviewFileProps = {
  children?: React.ReactNode;
  images: (File | string)[];
  gridPlacement?: 'column' | 'grid' | 'row';
  onRemove: (index: number, file: string | File) => void;
};

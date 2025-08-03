export type PreviewFileProps = {
  children?: React.ReactNode;
  images: File[];
  gridPlacement?: 'column' | 'grid' | 'row';
  onRemove: (index: number) => void;
};

'use client';
import { CardFilePreview } from './components';
import { PreviewFileProps } from './types';
import { getClassNamesPreviewFiles } from './utils';

export const PreviewFiles = ({
  gridPlacement = 'grid',
  images,
  onRemove,
  children,
}: PreviewFileProps) => {
  const classes = getClassNamesPreviewFiles(gridPlacement);

  return (
    <div className={classes}>
      {images.map((file, index) => (
        <CardFilePreview
          key={file && file instanceof File ? file.name : file.url}
          file={file}
          gridPlacement={gridPlacement}
          index={index}
          onRemove={onRemove}
        />
      ))}
      {!images.length && children ? children : null}
    </div>
  );
};

import { Alert, IconButton, Image, ImageContainer } from '@/components';
import { CardFilePreviewProps } from './types';
import { getClassNamesCardFilePreview } from '../../utils';
import { useObjectUrl } from './hooks';
import {
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export const CardFilePreview = ({
  file,
  index,
  onRemove,
  gridPlacement,
}: CardFilePreviewProps) => {
  const classes = getClassNamesCardFilePreview(gridPlacement);
  const objectUrl = useObjectUrl(
    file && file instanceof File ? file : file.url
  );

  return (
    <div className={classes.card}>
      <ImageContainer loader="skeleton">
        {({ onLoad, onError, isError, isLoading }) => (
          <>
            {isError && !isLoading ? (
              <Alert
                color="negative"
                icon={faTriangleExclamation}
                message="Failed to load image"
                fullWidth
                size="size-xs"
              />
            ) : (
              <Image
                src={file && file instanceof File ? objectUrl ?? '' : file.url}
                onLoad={() => setTimeout(() => onLoad && onLoad(), 1000)}
                onError={onError}
                alt="image"
                width={500}
                height={300}
              />
            )}
          </>
        )}
      </ImageContainer>
      {file && file instanceof File && (
        <p className={classes.title}>{file.name}</p>
      )}
      <IconButton
        icon={[faXmark]}
        style={{ position: 'absolute', top: 0, right: 0 }}
        onClick={() => onRemove(index, file)}
        size="size-xxs"
        type="button"
      />
    </div>
  );
};

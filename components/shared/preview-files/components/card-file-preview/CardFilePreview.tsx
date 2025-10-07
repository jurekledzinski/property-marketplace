import { Alert, IconButton, Image, ImageContainer } from '@/components';
import { CardFilePreviewProps } from './types';
import { getClassNamesCardFilePreview } from '../../utils';
import { useClearTimeout } from '@/hooks';
import { useObjectUrl } from './hooks';
import {
  faTrash,
  faTriangleExclamation,
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

  const { handleCleanTimeout, timeId } = useClearTimeout();

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
                variant="light"
              />
            ) : (
              <Image
                src={file && file instanceof File ? objectUrl ?? '' : file.url}
                onLoad={() => {
                  handleCleanTimeout();
                  timeId.current = setTimeout(() => onLoad && onLoad(), 1000);
                }}
                onError={onError}
                alt="image"
                width={500}
                height={300}
              />
            )}
          </>
        )}
      </ImageContainer>

      <p className={classes.title}>{file.name}</p>

      <IconButton
        className={classes.button}
        icon={[faTrash]}
        onClick={() => onRemove(index, file)}
        size="size-xxs"
        type="button"
        variant="minimal"
        color="negative"
      />
    </div>
  );
};

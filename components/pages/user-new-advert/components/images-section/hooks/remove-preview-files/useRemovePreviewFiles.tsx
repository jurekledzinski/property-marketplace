import { UseRemovePreviewFilesProps } from './types';

const filterImages = (value: string, item: string) => value !== item;

export const useRemovePreviewFiles = ({
  setValue,
  watch,
}: UseRemovePreviewFilesProps) => {
  const onRemove = (index: number, file: string | File) => {
    const deleteImages = watch('deleteImagesIds')!;
    const images = watch('images')!;
    const files = watch('files') ?? [];

    if (typeof file === 'string') {
      setValue('deleteImagesIds', [...deleteImages, file]);

      const filtered = images.filter((i) => filterImages(i, file));

      setValue('images', filtered);
    } else {
      const filtered = files.filter((i) => filterImages(i.name, file.name));

      setValue('files', filtered, {
        shouldValidate: true,
        shouldDirty: false,
      });
    }
  };

  return onRemove;
};

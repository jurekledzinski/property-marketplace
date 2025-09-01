import { UseRemovePreviewFilesProps } from './types';

const filterImages = (value: string, item: string) => value !== item;

export const useRemovePreviewFiles = ({
  setValue,
  watch,
}: UseRemovePreviewFilesProps) => {
  const onRemove = (
    index: number,
    file: { url: string; fileId: string } | File
  ) => {
    const deleteImages = watch('deleteImagesIds')!;
    const images = watch('images')!;
    const files = watch('files') ?? [];

    if (file && file instanceof File) {
      const filtered = files.filter((i) => filterImages(i.name, file.name));

      setValue('files', filtered, {
        shouldValidate: true,
        shouldDirty: false,
      });
    } else {
      setValue('deleteImagesIds', [...deleteImages, file.fileId]);

      const filtered = images.filter((i) => filterImages(i.url, file.url));

      setValue('images', filtered);
    }
  };

  return onRemove;
};

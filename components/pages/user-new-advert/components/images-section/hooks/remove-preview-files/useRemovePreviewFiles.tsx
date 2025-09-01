import { UseRemovePreviewFilesProps } from './types';

const filterImages = (value: string, item: string) => value !== item;

export const useRemovePreviewFiles = ({
  removeUploadedFiles,
  setValue,
  watch,
}: UseRemovePreviewFilesProps) => {
  const onRemove = (
    index: number,
    file: { fileId: string; name: string; url: string } | File
  ) => {
    const deleteImages = watch('deleteImagesIds')!;
    const images = watch('images')!;
    const files = watch('files') ?? [];

    // Remove dopiero po usunięciu z imagekit ale w funkcji remove files imagekit
    //

    if (file && file instanceof File) {
      // Tego nie potrzeba już chyba ponieważ ja wyświetlam z images tylko
      //   po upload do imagekit a nie z files
      // A gdy dodaje zdjecia to po upload sukces usuwam z files i gdy rejected także
      //   const filtered = files.filter((i) => filterImages(i.name, file.name));
      //   setValue('files', filtered, {
      //     shouldValidate: true,
      //     shouldDirty: false,
      //   });
    } else {
      const deletedIds = [
        ...deleteImages,
        { fileId: file.fileId, name: file.name },
      ];
      removeUploadedFiles(deletedIds);
      //   setValue('deleteImagesIds', deletedIds);

      //   const filtered = images.filter((i) => filterImages(i.url, file.url));

      //   setValue('images', filtered);
    }
  };

  return onRemove;
};

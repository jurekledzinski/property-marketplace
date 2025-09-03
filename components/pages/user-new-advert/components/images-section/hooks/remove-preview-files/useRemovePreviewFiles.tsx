import { UseRemovePreviewFilesProps } from './types';

export const useRemovePreviewFiles = ({
  deleteUploadedFiles,
  deleteImagesIds,
}: UseRemovePreviewFilesProps) => {
  const onRemove = (
    index: number,
    file: { fileId: string; name: string; url?: string } | File
  ) => {
    if (!('fileId' in file) || !deleteImagesIds) return;

    const isExist = deleteImagesIds.some((item) => item.fileId === file.fileId);

    if (isExist) return deleteUploadedFiles(deleteImagesIds);

    delete file.url;

    deleteUploadedFiles([...deleteImagesIds, file]);
  };

  return onRemove;
};

import { Advert } from '@/models';

export type UseRemovePreviewFilesProps = {
  deleteUploadedFiles: (deletedIds: { fileId: string; name: string }[]) => void;
  deleteImagesIds: Advert['deleteImagesIds'];
};

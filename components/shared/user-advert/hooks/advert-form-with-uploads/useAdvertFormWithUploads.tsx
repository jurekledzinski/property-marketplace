import { showPromisToast } from '@/helpers';
import { useAdvertForm } from '../control-advert-form';
import { UseAdvertFormWithUploadsProps } from './types';
import { useClearTimeout, useControlUploadFiles } from '@/hooks';
import { useDraftsImages } from '../draft-images';

export const useAdvertFormWithUploads = ({
  action,
  advert,
  isPending,
  mode,
  success,
  onFailed,
  onSuccess,
}: UseAdvertFormWithUploadsProps) => {
  const { draft, updateDraft, deleteDraft } = useDraftsImages({
    advertId: advert?.id,
    mode,
  });

  const form = useAdvertForm({
    advert,
    draft,
    isPending,
    isSuccess: success,
    mode,
    onSubmitForm: action,
    onSuccess,
    onFailed,
  });

  const { timeId } = useClearTimeout();

  const { deleteUploadedFiles, isUploadPending, uploadFiles } =
    useControlUploadFiles({
      limit: 3,
      onAddImages: (addedImages) => {
        const images = form.formControl.getValues('images');
        const deletedImages = form.deletedImages || [];

        const markImages = addedImages.map((img) => ({
          ...img,
          isOriginal: false,
        }));
        const mergedImages = images.concat(markImages);
        form.formControl.setValue('images', mergedImages, {
          shouldDirty: true,
        });

        updateDraft(mergedImages, deletedImages);
      },
      onDeleteImages: (delImage) => {
        const images = form.formControl.getValues('images');
        const deletedImages = form.deletedImages || [];

        const restImages = images.filter(
          (img) => img.fileId !== delImage.fileId
        );
        const mergeDeletedImages = [...deletedImages, delImage];

        form.formControl.setValue('images', restImages, { shouldDirty: true });
        form.onSetDeleteImages(mergeDeletedImages);

        updateDraft(restImages, mergeDeletedImages);

        const promise = new Promise((resolve) => {
          timeId.current = setTimeout(
            resolve,
            Math.round(Math.random() * 3000)
          );
        }) as Promise<Response>;

        showPromisToast({
          promise,
          name: delImage.name,
          task: 'deleting',
          messageError: 'Could not delete',
          messageSuccess: 'Image deleted',
        });
      },
      onUpdateLocalFiles: (restFiles) => {
        form.formControl.setValue('files', restFiles);
      },
    });

  return {
    deleteDraft,
    deleteUploadedFiles,
    isUploadPending,
    form,
    uploadFiles,
  };
};

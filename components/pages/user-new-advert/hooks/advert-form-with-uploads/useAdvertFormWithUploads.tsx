import { showPromisToast } from '@/helpers';
import { useAdvertForm } from '../control-advert-form';
import { UseAdvertFormWithUploadsProps } from './types';
import { useControlUploadFiles } from '@/hooks';
import { useDraftsImages } from '../draft-images';

export const useAdvertFormWithUploads = ({
  action,
  advert,
  isPending,
  mode,
  success,
  userId,
  onSuccess,
}: UseAdvertFormWithUploadsProps) => {
  const { draft, updateDraft } = useDraftsImages({
    advertId: advert?.id,
    mode,
  });

  console.log('draft', draft);

  const form = useAdvertForm({
    advert: {
      ...(advert! ?? {}),
      ...(draft.images
        ? {
            deleteImages: draft.deleteImages,
            images: draft.images,
          }
        : {}),
    },
    isPending,
    isSuccess: success,
    mode,
    userId,
    onSubmitForm: action,
    onSuccess,
  });

  const { deleteUploadedFiles, uploadFiles } = useControlUploadFiles({
    limit: 3,
    onAddImages: (addedImages) => {
      const images = form.formControl.getValues('images');
      const deletedImages = form.formControl.getValues('deleteImages') || [];
      const markImages = addedImages.map((img) => ({
        ...img,
        isOriginal: false,
      }));
      const mergedImages = images.concat(markImages);
      form.formControl.setValue('images', mergedImages, {
        shouldDirty: true,
      });

      console.log('ADDIMAGE', draft.advertId);

      updateDraft(mergedImages, deletedImages);
    },
    onDeleteImages: (delImage) => {
      const images = form.formControl.getValues('images');
      const deletedImages = form.formControl.getValues('deleteImages') || [];
      const restImages = images.filter((img) => img.fileId !== delImage.fileId);
      const mergeDeletedImages = [...deletedImages, delImage];

      form.formControl.setValue('images', restImages, {
        shouldDirty: true,
      });
      form.formControl.resetField('deleteImages', {
        defaultValue: mergeDeletedImages,
        keepDirty: false,
      });

      updateDraft(restImages, mergeDeletedImages);

      showPromisToast({
        promise: new Promise((resolve) =>
          setTimeout(resolve, Math.round(Math.random() * 3000))
        ) as Promise<Response>,
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

  return { deleteUploadedFiles, form, uploadFiles };
};

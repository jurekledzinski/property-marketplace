'use client';
import { AdvertForm } from './components';
import { Heading, UserNewAdvertProps } from '@/components';
import { initialState } from '@/constants';
import { newAdvert } from '@/actions';
import { useActionState } from 'react';
import { useAdvertForm } from './hooks';
import { useControlUploadFiles } from '@/hooks';
import { showErrorToast } from '@/helpers';

export const UserNewAdvert = ({ userId }: UserNewAdvertProps) => {
  const [state, action, isPending] = useActionState(newAdvert, initialState);

  const form = useAdvertForm({
    userId,
    isPending,
    isSuccess: state.success,
    onSubmitForm: action,
  });

  const formData = form.formControl.getValues();
  console.log('formData', formData);

  const { deleteUploadedFiles, uploadFiles } = useControlUploadFiles({
    limit: 3,
    onAddImages: (arrUrls) => {
      const images = form.formControl.getValues('images');
      form.formControl.setValue('images', images.concat(arrUrls), {
        shouldDirty: true,
      });
    },
    onDeleteImages: (ids) => {
      const images = form.formControl.getValues('images');
      const filter = images.filter((i) => !ids.includes(i.fileId));
      form.formControl.setValue('images', filter);
    },
    onUpdateLocalFiles: (restFiles) => {
      form.formControl.setValue('files', restFiles);
    },
    onUpdateDeletedIds: (arrIds) => {
      form.formControl.setValue('deleteImagesIds', arrIds);
    },
  });

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Add New Advert
      </Heading>
      <AdvertForm
        controls={form.formControl}
        onSubmit={form.onSubmit}
        reset={form.reset}
        isPending={isPending}
        uploadFiles={uploadFiles}
        deleteUploadedFiles={deleteUploadedFiles}
        validationInfo={({ name, type }) => {
          console.log('TOES', name, type);
          if (type === 'amount') {
            showErrorToast(`Maximum 10 images allowed`);
          }
          if (type === 'size') {
            showErrorToast(`${name} exceeds the 500KB size limit`);
          }
          if (type === 'type') {
            showErrorToast(`${name} is not allowed. Use JPG or PNG`);
          }
        }}
      />
    </>
  );
};

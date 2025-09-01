'use client';
import { AdvertForm } from './components';
import { Heading, UserNewAdvertProps } from '@/components';
import { initialState } from '@/constants';
import { newAdvert } from '@/actions';
import { useActionState } from 'react';
import { useAdvertForm } from './hooks';
import { useControlUploadFiles } from '@/hooks';

export const UserNewAdvert = ({ userId }: UserNewAdvertProps) => {
  const [state, action, isPending] = useActionState(newAdvert, initialState);

  const form = useAdvertForm({
    userId,
    isPending,
    isSuccess: state.success,
    onSubmitForm: action,
  });

  const { uploadFiles } = useControlUploadFiles({
    limit: 3,
    onAddUrl: (arrUrls) => {
      const images = form.formControl.getValues('images');
      const merged = images.concat(arrUrls);
      form.formControl.setValue('images', merged);
    },
    onUpdateLocalFiles: (restFiles) => {
      form.formControl.setValue('files', restFiles);
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
      />
    </>
  );
};

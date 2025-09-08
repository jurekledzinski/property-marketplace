'use client';
import { editAdvert } from '@/actions';
import { initialState } from '@/constants';
import { showSuccessToast } from '@/helpers';
import { useActionState } from 'react';
import { UserEditAdvertProps } from './types';

import {
  Heading,
  AdvertForm,
  useAdvertFormWithUploads,
  validationFilesInfo,
} from '@/components';
import { useRouter, usePathname } from 'next/navigation';

export const UserEditAdvert = ({ advert, userId }: UserEditAdvertProps) => {
  const router = useRouter();
  const [state, action, isPending] = useActionState(editAdvert, initialState);

  const { deleteUploadedFiles, form, uploadFiles } = useAdvertFormWithUploads({
    action,
    advert,
    isPending,
    mode: 'edit',
    success: state.success,
    userId,
    onSuccess: () => {
      showSuccessToast(state.message);
      router.push('/user/adverts');
    },
  });

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Edit Advert
      </Heading>
      <AdvertForm
        controls={form.formControl}
        onSubmit={form.onSubmit}
        reset={form.reset}
        deleteUploadedFiles={deleteUploadedFiles}
        uploadFiles={uploadFiles}
        validationInfo={validationFilesInfo}
        isPending={false}
      />
    </>
  );
};

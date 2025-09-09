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
  Modal,
} from '@/components';
import { useRouter, usePathname } from 'next/navigation';
import { useExitGuard } from '@/hooks';

export const UserEditAdvert = ({ advert, userId }: UserEditAdvertProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [state, action, isPending] = useActionState(editAdvert, initialState);

  const { deleteDraft, deleteUploadedFiles, form, uploadFiles } =
    useAdvertFormWithUploads({
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

  const { dirtyFields, isDirty } = form.formControl.formState;

  const { isOpen, onClose, onConfirm } = useExitGuard({
    confirmUrl: '/user/adverts',
    currentUrl: pathname,
    isDirty,
    onConfirmLeave: async (url) => {
      const { getValues } = form.formControl;
      const images = getValues('images');
      const deleteImages = getValues('deleteImages');
      const result = await deleteDraft(images, deleteImages);
      if (result.success) router.push(url);
    },
    onBlockLeave: (url) => router.push(url),
    selectors: ['menu-link'],
  });

  console.log('dirtyFields', dirtyFields);
  console.log('isDirty', isDirty);

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
      <Modal
        confirmText="Leave"
        title="Leave page warning"
        isOpen={isOpen}
        onClose={onClose}
        onCancel={onClose}
        variant="warning"
        onConfirm={onConfirm}
      >
        Warning: Data you have entered will be lost,
        <br />
        if you leave this page without saving.
      </Modal>
    </>
  );
};

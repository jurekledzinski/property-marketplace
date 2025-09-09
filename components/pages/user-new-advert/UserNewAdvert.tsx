'use client';
import { AdvertForm } from './components';
import { initialState } from '@/constants';
import { newAdvert } from '@/actions';
import { showSuccessToast } from '@/helpers';
import { useActionState } from 'react';
import { useAdvertFormWithUploads } from './hooks';
import { useExitGuard } from '@/hooks';
import { useRouter } from 'next/navigation';

import {
  Heading,
  Modal,
  UserNewAdvertProps,
  validationFilesInfo,
} from '@/components';

export const UserNewAdvert = ({ userId }: UserNewAdvertProps) => {
  const router = useRouter();
  const [state, action, isPending] = useActionState(newAdvert, initialState);

  const { deleteDraft, deleteUploadedFiles, form, uploadFiles } =
    useAdvertFormWithUploads({
      action,
      isPending,
      mode: 'new',
      success: state.success,
      onSuccess: () => showSuccessToast(state.message),
      userId,
    });

  const { watch } = form.formControl;
  const { dirtyFields, isDirty } = form.formControl.formState;

  const { isOpen, onClose, onConfirm } = useExitGuard({
    confirmUrl: '/user/dashboard',
    currentUrl: '/user/adverts/new',
    isDirty,
    onConfirmLeave: async (url) => {
      const { getValues } = form.formControl;
      const images = getValues('images');
      const deleteImages = getValues('deleteImages');
      const result = await deleteDraft(images, deleteImages);
      console.log('result confirm', result);
      if (result.success) router.push(url);
    },
    onBlockLeave: (url) => router.push(url),
    selectors: ['menu-link'],
  });

  console.log('dirtyFields', dirtyFields);
  console.log('isDirty', isDirty);
  console.log('watch', watch());

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
        validationInfo={validationFilesInfo}
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

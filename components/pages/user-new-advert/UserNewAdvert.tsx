'use client';
import { AdvertForm } from './components';
import { initialState, modalMessages } from '@/constants';
import { newAdvert } from '@/actions';
import { showErrorToast, showSuccessToast } from '@/helpers';
import { useActionState } from 'react';
import { useAdvertFormWithUploads } from './hooks';
import { useExitGuard } from '@/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import {
  Heading,
  Modal,
  UserNewAdvertProps,
  validationFilesInfo,
} from '@/components';

export const UserNewAdvert = ({ userId }: UserNewAdvertProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [state, action, isPending] = useActionState(newAdvert, initialState);
  const { description, title } = modalMessages.warningLeaveForm();

  const { deleteDraft, deleteUploadedFiles, form, uploadFiles } =
    useAdvertFormWithUploads({
      action,
      isPending,
      mode: 'new',
      success: state.success,
      onFailed: () => !state.success && showErrorToast(state.message),
      onSuccess: () => {
        if (state.success) showSuccessToast(state.message);
        queryClient.invalidateQueries({ queryKey: ['drafts'] });
      },
      userId,
    });

  const { isOpen, onClose, onConfirm } = useExitGuard({
    confirmUrl: '/user/dashboard',
    currentUrl: '/user/adverts/new',
    isDirty: form.formControl.formState.isDirty,
    onConfirmLeave: async (url) => {
      const { getValues } = form.formControl;
      const images = getValues('images');
      const deletedImages = form.deletedImages || [];
      const result = await deleteDraft(images, deletedImages);
      if (result.success) router.push(url);
    },
    onBlockLeave: (url) => router.push(url),
    selectors: ['menu-link'],
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
        {title}
        <br />
        {description}
      </Modal>
    </>
  );
};

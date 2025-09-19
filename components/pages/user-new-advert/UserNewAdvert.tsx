'use client';
import { AdvertForm } from './components';
import { Heading, Modal, validationFilesInfo } from '@/components';
import { initialState, modalMessages } from '@/constants';
import { newAdvert } from '@/actions';
import { showErrorToast, showSuccessToast } from '@/helpers';
import { useActionState } from 'react';
import { useAdvertFormWithUploads } from './hooks';
import { useExitGuard } from '@/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const UserNewAdvert = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [state, action, isPending] = useActionState(newAdvert, initialState);
  const { description, title } = modalMessages.warningLeaveForm();

  const {
    deleteDraft,
    deleteUploadedFiles,
    isUploadPending,
    form,
    uploadFiles,
  } = useAdvertFormWithUploads({
    action,
    isPending,
    mode: 'new',
    success: state.success,
    onFailed: () => !state.success && showErrorToast(state.message),
    onSuccess: () => {
      if (state.success) showSuccessToast(state.message);
      queryClient.invalidateQueries({ queryKey: ['drafts'] });
    },
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
        deleteUploadedFiles={deleteUploadedFiles}
        isPending={isPending}
        isUploadPending={isUploadPending}
        onSubmit={form.onSubmit}
        reset={form.reset}
        uploadFiles={uploadFiles}
        validationInfo={validationFilesInfo}
      />
      <Modal
        confirmText="Leave"
        isOpen={isOpen}
        onCancel={onClose}
        onClose={onClose}
        onConfirm={onConfirm}
        title="Leave page warning"
        variant="warning"
      >
        {title}
        <br />
        {description}
      </Modal>
    </>
  );
};

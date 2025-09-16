'use client';
import { editAdvert } from '@/actions';
import { initialState, modalMessages } from '@/constants';
import { showErrorToast, showSuccessToast } from '@/helpers';
import { useActionState } from 'react';
import { useExitGuard } from '@/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { UserEditAdvertProps } from './types';

import {
  Heading,
  AdvertForm,
  useAdvertFormWithUploads,
  validationFilesInfo,
  Modal,
} from '@/components';

export const UserEditAdvert = ({ advert }: UserEditAdvertProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [state, action, isPending] = useActionState(editAdvert, initialState);
  const { description, title } = modalMessages.warningLeaveForm();

  const { deleteDraft, deleteUploadedFiles, form, uploadFiles } =
    useAdvertFormWithUploads({
      action,
      advert,
      isPending,
      mode: 'edit',
      success: state.success,
      onFailed: () => !state.success && showErrorToast(state.message),
      onSuccess: () => {
        if (state.success) showSuccessToast(state.message);
        router.push('/user/adverts');
      },
    });

  const { isOpen, onClose, onConfirm } = useExitGuard({
    confirmUrl: '/user/adverts',
    currentUrl: pathname,
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
        Edit Advert
      </Heading>
      <AdvertForm
        controls={form.formControl}
        onSubmit={form.onSubmit}
        reset={form.reset}
        deleteUploadedFiles={deleteUploadedFiles}
        uploadFiles={uploadFiles}
        validationInfo={validationFilesInfo}
        isPending={isPending}
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

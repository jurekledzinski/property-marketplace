'use client';
import { AdvertForm } from './components';
import { initialState } from '@/constants';
import { newAdvert } from '@/actions';
import { showSuccessToast } from '@/helpers';
import { useActionState } from 'react';
import { useAdvertFormWithUploads } from './hooks';
import { usePreventBackNavigation, usePreventLinkNavigation } from '@/hooks';
import { useRouter } from 'next/navigation';

import {
  Heading,
  Modal,
  useControlModal,
  UserNewAdvertProps,
  validationFilesInfo,
} from '@/components';

export const UserNewAdvert = ({ userId }: UserNewAdvertProps) => {
  const router = useRouter();

  const [state, action, isPending] = useActionState(newAdvert, initialState);
  const { onClose, onOpen, isOpen } = useControlModal();

  const { deleteUploadedFiles, form, uploadFiles } = useAdvertFormWithUploads({
    action,
    isPending,
    mode: 'new',
    success: state.success,
    onSuccess: () => showSuccessToast(state.message),
    userId,
  });

  //   const { getValues } = form.formControl;
  const { dirtyFields, isDirty } = form.formControl.formState;

  console.log('dirtyFields', dirtyFields);
  console.log('isDirty', isDirty);
  //   console.log('values form', getValues());

  usePreventBackNavigation({ isDirty, onOpen });
  usePreventLinkNavigation({ idLink: 'menu-link', isDirty, onOpen });

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
        onConfirm={() => {
          router.push('/user/dashboard');
        }}
      >
        Warning: Data you have entered will be lost,
        <br />
        if you leave this page without saving.
      </Modal>
    </>
  );
};

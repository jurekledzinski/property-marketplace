'use client';
import { editAdvert } from '@/actions';
import { initialState, modalMessages } from '@/constants';
import { showErrorToast, showSuccessToast } from '@/helpers';
import { useActionState } from 'react';
import { useExitGuard, useFetchCities, useFetchStates } from '@/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { UserEditAdvertProps } from './types';

import {
  Heading,
  AdvertForm,
  useAdvertFormWithUploads,
  validationFilesInfo,
  Modal,
} from '@/components';

export const UserEditAdvert = ({ advert, countries }: UserEditAdvertProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [state, action, isPending] = useActionState(editAdvert, initialState);
  const { description, title } = modalMessages.warningLeaveForm();

  const advertEdit = useAdvertFormWithUploads({
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

  const { isLeavePending, isOpen, onClose, onConfirm } = useExitGuard({
    confirmUrl: '/user/adverts',
    currentUrl: pathname,
    isDirty: advertEdit.form.formControl.formState.isDirty,
    onConfirmLeave: async (url) => {
      const images = advertEdit.form.formControl.getValues('images');
      const deletedImages = advertEdit.form.deletedImages || [];
      const result = await advertEdit.deleteDraft(images, deletedImages);
      if (result.success) router.push(url);
      return result.success;
    },
    onBlockLeave: (url) => router.push(url),
    selectors: ['logo-link', 'menu-link'],
  });

  const controlFetchCities = useFetchCities();
  const controlFetchStates = useFetchStates();

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Edit Advert
      </Heading>
      <AdvertForm
        cities={controlFetchCities.dataList}
        countries={countries}
        controls={advertEdit.form.formControl}
        deleteUploadedFiles={advertEdit.deleteUploadedFiles}
        getCities={controlFetchCities.fetchData}
        getStates={controlFetchStates.fetchData}
        isLoadingCities={controlFetchCities.isFetching}
        isLoadingStates={controlFetchStates.isFetching}
        isPending={isPending}
        isSuccessCities={controlFetchCities.isSuccess}
        isSuccessStates={controlFetchStates.isSuccess}
        isUploadPending={advertEdit.isUploadPending}
        onSubmit={advertEdit.form.onSubmit}
        states={controlFetchStates.dataList}
        uploadFiles={advertEdit.uploadFiles}
        validationInfo={validationFilesInfo}
        onScrollEndCities={controlFetchCities.onScrollEnd}
        onScrollEndStates={controlFetchStates.onScrollEnd}
      />
      <Modal
        confirmText="Leave"
        isOpen={isOpen}
        isPending={isLeavePending}
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

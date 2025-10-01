'use client';
import { AdvertForm } from './components';
import { Heading, Modal, validationFilesInfo } from '@/components';
import { initialState, modalMessages } from '@/constants';
import { showErrorToast } from '@/helpers';
import { useActionState } from 'react';
import { useAdvertFormWithUploads } from './hooks';
import { useExitGuard, useFetchCities, useFetchStates } from '@/hooks';
import { UserAdvertProps } from './types';

export const UserAdvert = ({
  advertAction,
  advert,
  confirmUrl,
  currentUrl,
  countries,
  mode,
  onBlockLeave,
  onConfirmLeave,
  onSuccess,
  titleHeading,
}: UserAdvertProps) => {
  const [state, action, isPending] = useActionState(advertAction, initialState);
  const { description, title } = modalMessages.warningLeaveForm();

  const advertControl = useAdvertFormWithUploads({
    action,
    advert,
    isPending,
    mode,
    success: state.success,
    onFailed: () => !state.success && showErrorToast(state.message),
    onSuccess: () => onSuccess(state),
  });

  const { isLeavePending, isOpen, onClose, onConfirm } = useExitGuard({
    confirmUrl,
    currentUrl,
    isDirty: advertControl.form.formControl.formState.isDirty,
    onConfirmLeave: async (url) => {
      const images = advertControl.form.formControl.getValues('images');
      const deletedImages = advertControl.form.deletedImages || [];
      const result = await advertControl.deleteDraft(images, deletedImages);
      if (result.success) onConfirmLeave(url);
      return result.success;
    },
    onBlockLeave: (url) => onBlockLeave(url),
    selectors: ['logo-link', 'menu-link'],
  });

  const controlFetchCities = useFetchCities();
  const controlFetchStates = useFetchStates();

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        {titleHeading}
      </Heading>

      <AdvertForm
        cities={controlFetchCities.dataList}
        countries={countries}
        controls={advertControl.form.formControl}
        deleteUploadedFiles={advertControl.deleteUploadedFiles}
        getCities={controlFetchCities.fetchData}
        getStates={controlFetchStates.fetchData}
        isLoadingCities={controlFetchCities.isFetching}
        isLoadingStates={controlFetchStates.isFetching}
        isPending={isPending}
        isSuccessCities={controlFetchCities.isSuccess}
        isSuccessStates={controlFetchStates.isSuccess}
        isUploadPending={advertControl.isUploadPending}
        onSubmit={advertControl.form.onSubmit}
        states={controlFetchStates.dataList}
        uploadFiles={advertControl.uploadFiles}
        validationInfo={validationFilesInfo}
        onScrollEndCities={controlFetchCities.onScrollEnd}
        onScrollEndStates={controlFetchStates.onScrollEnd}
      />

      <Modal
        confirmText="Leave"
        open={isOpen}
        isPending={isLeavePending}
        onCancel={onClose}
        onClose={onClose}
        onConfirm={onConfirm}
        title="Leave page warning"
        color="warning"
        portal={true}
      >
        {title}
        <br />
        {description}
      </Modal>
    </>
  );
};

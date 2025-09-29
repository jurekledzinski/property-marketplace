'use client';
import { AdvertForm } from './components';
import {
  Heading,
  Modal,
  UserNewAdvertProps,
  validationFilesInfo,
} from '@/components';
import { initialState, modalMessages } from '@/constants';
import { newAdvert } from '@/actions';
import { showErrorToast, showSuccessToast } from '@/helpers';
import { useActionState } from 'react';
import { useAdvertFormWithUploads } from './hooks';
import { useExitGuard, useFetchCities, useFetchStates } from '@/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const UserNewAdvert = ({ countries }: UserNewAdvertProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [state, action, isPending] = useActionState(newAdvert, initialState);
  const { description, title } = modalMessages.warningLeaveForm();

  const advert = useAdvertFormWithUploads({
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

  const { isLeavePending, isOpen, onClose, onConfirm } = useExitGuard({
    confirmUrl: '/user/dashboard',
    currentUrl: '/user/adverts/new',
    isDirty: advert.form.formControl.formState.isDirty,
    onConfirmLeave: async (url) => {
      const images = advert.form.formControl.getValues('images');
      const deletedImages = advert.form.deletedImages || [];
      const result = await advert.deleteDraft(images, deletedImages);
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
        Add New Advert
      </Heading>
      <AdvertForm
        cities={controlFetchCities.dataList}
        countries={countries}
        controls={advert.form.formControl}
        deleteUploadedFiles={advert.deleteUploadedFiles}
        getCities={controlFetchCities.fetchData}
        getStates={controlFetchStates.fetchData}
        isLoadingCities={controlFetchCities.isFetching}
        isLoadingStates={controlFetchStates.isFetching}
        isPending={isPending}
        isSuccessCities={controlFetchCities.isSuccess}
        isSuccessStates={controlFetchStates.isSuccess}
        isUploadPending={advert.isUploadPending}
        onSubmit={advert.form.onSubmit}
        states={controlFetchStates.dataList}
        uploadFiles={advert.uploadFiles}
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

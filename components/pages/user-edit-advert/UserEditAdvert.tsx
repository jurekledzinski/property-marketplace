'use client';
import { AdvertForm, useAdvertForm } from '@/components';
import { Heading } from '@/components';
import { UserEditAdvertProps } from './types';

export const UserEditAdvert = ({ advert, userId }: UserEditAdvertProps) => {
  const { formControl, onSubmit, reset } = useAdvertForm({
    advert,
    userId,
    isPending: false,
    isSuccess: false,
    onSubmitForm: () => {},
  });
  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Edit Advert
      </Heading>
      <AdvertForm controls={formControl} onSubmit={onSubmit} reset={reset} />
    </>
  );
};

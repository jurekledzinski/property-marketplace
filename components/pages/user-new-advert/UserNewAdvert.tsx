'use client';
import { AdvertForm } from './components';
import { Heading, UserNewAdvertProps } from '@/components';
import { initialState } from '@/constants';
import { newAdvert } from '@/actions';
import { useActionState } from 'react';
import { useAdvertForm } from './hooks';

export const UserNewAdvert = ({ userId }: UserNewAdvertProps) => {
  const [state, action, isPending] = useActionState(newAdvert, initialState);

  const form = useAdvertForm({
    userId,
    isPending,
    isSuccess: state.success,
    onSubmitForm: action,
  });

  console.log('state', state);

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Add New Advert
      </Heading>
      <AdvertForm
        controls={form.formControl}
        onSubmit={form.onSubmit}
        reset={form.reset}
      />
    </>
  );
};

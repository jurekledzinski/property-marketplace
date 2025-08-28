'use client';
import { AdvertForm, useAdvertForm } from '@/components';
import { Heading } from '@/components';
import { UserEditAdvertProps } from './types';

export const UserEditAdvert = ({ advert, userId }: UserEditAdvertProps) => {
  const form = useAdvertForm({ advert, userId });

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Edit Advert
      </Heading>
      <AdvertForm controls={form.formControl} onSubmit={form.onSubmit} />
    </>
  );
};

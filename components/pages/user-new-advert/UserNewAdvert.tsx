'use client';
import { AdvertForm } from './components';
import { Heading } from '@/components';
import { useAdvertForm } from './hooks';

export const UserNewAdvert = () => {
  const form = useAdvertForm({});

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Add New Advert
      </Heading>
      <AdvertForm controls={form.formControl} onSubmit={form.onSubmit} />
    </>
  );
};

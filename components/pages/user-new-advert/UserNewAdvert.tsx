'use client';
import { AdvertForm } from './components';
import { Box } from '@/components';
import { useAdvertForm } from './hooks';

export const UserNewAdvert = () => {
  const form = useAdvertForm({});

  return (
    <Box>
      <AdvertForm controls={form.formControl} onSubmit={form.onSubmit} />
    </Box>
  );
};

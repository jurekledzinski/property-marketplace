'use client';
import { newAdvert } from '@/actions';
import { showSuccessToast } from '@/helpers';
import { useQueryClient } from '@tanstack/react-query';
import { UserAdvert, UserNewAdvertProps } from '@/components';
import { useRouter } from 'next/navigation';

export const UserNewAdvert = ({ countries }: UserNewAdvertProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return (
    <UserAdvert
      advertAction={newAdvert}
      confirmUrl="/user/dashboard"
      currentUrl="/user/adverts/new"
      countries={countries}
      mode="new"
      onBlockLeave={(url) => router.push(url)}
      onConfirmLeave={(url) => router.push(url)}
      onSuccess={(state) => {
        if (state.success) showSuccessToast(state.message);
        queryClient.invalidateQueries({ queryKey: ['drafts'] });
      }}
      titleHeading="Add New Advert"
    />
  );
};

'use client';
import { editAdvert } from '@/actions';
import { showSuccessToast } from '@/utils-client';
import { usePathname, useRouter } from 'next/navigation';
import { UserAdvert } from '@/components';
import { UserEditAdvertProps } from './types';

export const UserEditAdvert = ({ advert, countries }: UserEditAdvertProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <UserAdvert
      advert={advert}
      advertAction={editAdvert}
      confirmUrl="/user/adverts"
      currentUrl={pathname}
      countries={countries}
      mode="edit"
      onBlockLeave={(url) => router.push(url)}
      onConfirmLeave={(url) => router.push(url)}
      onSuccess={(state) => {
        if (state.success) showSuccessToast(state.message);
        router.push('/user/adverts');
      }}
      titleHeading="Edit Advert"
    />
  );
};

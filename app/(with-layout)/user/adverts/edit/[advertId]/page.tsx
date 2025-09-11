import { auth } from '@/auth';
import { UserEditAdvert } from '@/components';
import { EditAdvertPageProps } from './types';
import { getUserAdvertPage } from '@/lib';
import { headers } from 'next/headers';
import { formatNumberToStringObject } from '@/helpers';

const EditAdvertPage = async ({ params }: EditAdvertPageProps) => {
  const session = await auth();
  const headersData = await headers();
  const { advertId } = await params;

  const userAdvert = await getUserAdvertPage(headersData, advertId);
  const formattedUserAdvert = formatNumberToStringObject(userAdvert);

  return (
    <UserEditAdvert
      advert={formattedUserAdvert}
      userId={session?.user.id ?? ''}
    />
  );
};

export default EditAdvertPage;

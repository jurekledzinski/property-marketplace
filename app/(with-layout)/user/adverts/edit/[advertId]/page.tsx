import { auth } from '@/auth';
import { UserEditAdvert } from '@/components';
import { EditAdvertPageProps } from './types';
import { getUserAdvert } from '@/lib';
import { headers } from 'next/headers';
import { formatNumberToStringObject } from '@/helpers';

// Tu trzeba params i pobierać będzie advert na podstawie advertId
const EditAdvertPage = async ({ params }: EditAdvertPageProps) => {
  const session = await auth();
  const headersData = await headers();
  const { advertId } = await params;

  const userAdvert = await getUserAdvert(headersData, advertId);

  const formattedUserAdvert = formatNumberToStringObject(userAdvert);

  console.log('EditAdvertPage', formattedUserAdvert);

  return (
    <UserEditAdvert
      advert={formattedUserAdvert}
      userId={session?.user.id ?? ''}
    />
  );
};

export default EditAdvertPage;

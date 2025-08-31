import { getUserAdverts } from '@/lib';
import { headers } from 'next/headers';
import { UserAdverts } from '@/components';

const UserAdvertsPage = async () => {
  const headersData = await headers();
  const userAdverts = await getUserAdverts(headersData);

  return <UserAdverts adverts={userAdverts ? userAdverts : []} />;
};

export default UserAdvertsPage;

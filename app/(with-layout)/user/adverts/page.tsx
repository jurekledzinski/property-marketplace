import { getUserAdvertsPage } from '@/services';
import { headers } from 'next/headers';
import { UserAdverts } from '@/components';

const UserAdvertsPage = async () => {
  const headersData = await headers();
  const userAdverts = await getUserAdvertsPage(headersData);

  return <UserAdverts adverts={userAdverts ? userAdverts : []} />;
};

export default UserAdvertsPage;

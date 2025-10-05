import { getUserProfilePage } from '@/services';
import { headers } from 'next/headers';
import { UserProfile } from '@/components';

const UserProfilePage = async () => {
  const headersData = await headers();
  const user = await getUserProfilePage(headersData);

  return <UserProfile user={user} />;
};

export default UserProfilePage;

import { getMessagesPage } from '@/services';
import { headers } from 'next/headers';
import { UserMessages } from '@/components';

const UserMessagesPage = async () => {
  const headersData = await headers();
  const userMessages = await getMessagesPage(headersData);

  return <UserMessages messages={userMessages || []} />;
};

export default UserMessagesPage;

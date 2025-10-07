import { auth } from '@/auth';
import { getUserProfilePage } from '@/services';
import { Header as HeaderElement } from '@/components';
import { headers } from 'next/headers';

const Header = async () => {
  const session = await auth();
  const headersData = await headers();
  const user = await getUserProfilePage(headersData);

  const authSession = session
    ? {
        ...session.user,
        name: user ? user.name : session.user.name!,
      }
    : null;

  return <HeaderElement session={authSession} />;
};

export default Header;

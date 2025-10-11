import { auth } from '@/auth';
import { getUserProfilePage } from '@/services';
import { Header as HeaderElement } from '@/components';
import { HeaderProps } from './types';
import { headers } from 'next/headers';

const Header = async ({ searchParams }: HeaderProps) => {
  const data = await searchParams;
  const queries = new URLSearchParams(Object.fromEntries(Object.entries(data)));
  const session = await auth();
  const headersData = await headers();
  const user = await getUserProfilePage(headersData);

  const authSession = session
    ? {
        ...session.user,
        name: user ? user.name : session.user.name!,
      }
    : null;

  return (
    <HeaderElement queryParams={queries.toString()} session={authSession} />
  );
};

export default Header;

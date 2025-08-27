import { auth } from '@/auth';
import { Header as HeaderElement } from '@/components';

const Header = async () => {
  const session = await auth();

  return <HeaderElement session={session?.user} />;
};

export default Header;

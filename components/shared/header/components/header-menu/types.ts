import { SessionUser } from '@/lib/auth/types';

export type HeaderMenuProps = {
  session?: SessionUser;
  onLogout: () => void;
};

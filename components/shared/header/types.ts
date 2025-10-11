import { SessionUser } from '@/lib/auth/types';

export type HeaderProps = {
  queryParams?: string;
  session?: SessionUser;
};

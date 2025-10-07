import { User } from '@/models';

export type UserProfileProps = {
  user: (Omit<User, 'password'> & { id: string }) | null;
};

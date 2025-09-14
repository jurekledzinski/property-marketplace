import { Advert } from '@/models';

export interface UserAdvertsTable
  extends Pick<Advert, 'userId' | 'title' | 'type'> {
  id: string;
  stage?: string;
  actions?: string;
  createdAt?: string;
}

import { Advert } from '@/models';

export interface UserAdvertsTable
  extends Pick<Advert, 'userId' | 'title' | 'type' | 'createdAt'> {
  id: string;
  stage?: string;
  actions?: string;
}

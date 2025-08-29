import { Advert } from '@/models';

export type DetailsAdvertProps = {
  advertDetails: Omit<Advert, 'files'>;
};

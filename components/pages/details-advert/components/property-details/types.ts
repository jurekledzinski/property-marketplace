import { Advert } from '@/models';

export type PropertyDetailsProps = {
  details: Omit<Advert, 'files'>;
};

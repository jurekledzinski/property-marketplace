import { Advert } from '@/models';

export type UseFormatDetailsProps = {
  details: Omit<Advert, 'files'>;
};

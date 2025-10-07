import { Adverts } from '@/services';

type AdvertCardContent = Omit<Adverts, 'src' | 'price'>;

export type CardAdvertContentProps = {
  advertCard: AdvertCardContent & { price: string };
};

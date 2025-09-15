import { Adverts } from '@/lib';

type AdvertCardContent = Omit<Adverts, 'src' | 'price'>;

export type CardAdvertContentProps = {
  advertCard: AdvertCardContent & { price: string };
};

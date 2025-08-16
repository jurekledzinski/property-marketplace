import { AdvertCards } from '@/components';

type AdvertCardContent = Omit<AdvertCards, 'src' | 'price'>;

export type CardAdvertContentProps = {
  advertCards: AdvertCardContent & { price: string };
};

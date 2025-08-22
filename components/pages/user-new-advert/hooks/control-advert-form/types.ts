import { Advert } from '@/models';

type OmitKeys = 'price' | 'year' | 'area' | 'rooms' | 'bathrooms' | 'images';

export type InputsAvert = Omit<Advert, OmitKeys> & {
  price: string;
  year: string;
  area: string;
  rooms: string;
  bathrooms: string;
  images: File[];
};

export type UseAdvertFormProps = {
  advert?: InputsAvert;
};

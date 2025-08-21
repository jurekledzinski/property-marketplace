import { Advert } from '@/models';

type OmitKeys = 'price' | 'year' | 'area' | 'rooms' | 'bathrooms';

export interface InputsAvert extends Omit<Advert, OmitKeys> {
  price: string;
  year: string;
  area: string;
  rooms: string;
  bathrooms: string;
}

export type UseAdvertFormProps = {
  advert?: InputsAvert;
};

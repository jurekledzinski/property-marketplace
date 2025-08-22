import { LocationFields } from '@/components/pages/home';
import { Advert } from '@/models';

type OmitKeys =
  | 'price'
  | 'year'
  | 'area'
  | 'rooms'
  | 'bathrooms'
  | 'images'
  | 'country'
  | 'city';

export type InputsAvert = LocationFields &
  Omit<Advert, OmitKeys> & {
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

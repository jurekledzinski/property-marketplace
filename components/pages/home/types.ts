import { Advert } from '@/models';
import { InputsAdvertsFilter } from './hooks';

type OmitUnion =
  | 'advertiser'
  | 'amenities'
  | 'condition'
  | 'description'
  | 'email'
  | 'images'
  | 'phone'
  | 'style'
  | 'type'
  | 'year';

export interface AdvertCards extends Omit<Advert, OmitUnion> {
  src: string;
}

export type HomeProps = {
  advertCards: AdvertCards[];
  searchValue?: string;
  sortValue?: string;
  filters: InputsAdvertsFilter;
};

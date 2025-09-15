import { Advert } from '@/models';

export type PickInUserAdvert = 'userId' | 'title' | 'type';

export interface UserAdvertsTable extends Pick<Advert, PickInUserAdvert> {
  id: string;
  stage?: string;
  actions?: string;
  createdAt?: string;
}

export type OmitInAdverts =
  | 'advertiser'
  | 'amenities'
  | 'condition'
  | 'description'
  | 'email'
  | 'files'
  | 'images'
  | 'phone'
  | 'style'
  | 'type'
  | 'year';

export interface Adverts extends Omit<Advert, OmitInAdverts> {
  id: string;
  image: Advert['images'][0];
}

export interface AdvertDetails extends Omit<Advert, 'files'> {
  id: string;
}

import { Advert } from '@/models';

type PickUnion = 'images' | 'title' | 'status';

type DataDetailsImage = Pick<Advert, PickUnion>;

export interface DetailsHeroImageProps extends DataDetailsImage {
  index: number;
  price: string;
}

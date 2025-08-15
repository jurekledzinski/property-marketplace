import { DataDetailsAdvert } from '../../types';

type PickUnion = 'images' | 'title' | 'type' | 'price';

type DataDetailsImage = Pick<DataDetailsAdvert, PickUnion>;

export interface DetailsHeroImageProps extends DataDetailsImage {
  index: number;
}

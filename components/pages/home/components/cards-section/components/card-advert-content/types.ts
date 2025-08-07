import { CardAdvertProps } from '../card-advert/types';

type DataContent = Omit<CardAdvertProps['dataAdvert'], 'src' | 'price'>;

export type CardAdvertContentProps = {
  dataContent: DataContent & { price: string };
};

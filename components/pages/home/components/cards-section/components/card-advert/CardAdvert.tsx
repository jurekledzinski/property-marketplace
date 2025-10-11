import styles from './CardAdvert.module.css';
import { Card, optionsFormat } from '@/components';
import { CardAdvertContent } from '../card-advert-content';
import { CardAdvertHeader } from '../card-advert-header';
import { CardAdvertProps } from './types';
import { formatNumber } from '@/utils-client';

export const CardAdvert = ({ advertCard, queryParams }: CardAdvertProps) => {
  const { price, image } = advertCard;
  const { format } = formatNumber(price.toString(), 'nl-NL', optionsFormat);

  return (
    <Card className={styles.card}>
      <CardAdvertHeader src={image.url} />
      <CardAdvertContent
        advertCard={{ ...advertCard, price: format }}
        queryParams={queryParams}
      />
    </Card>
  );
};

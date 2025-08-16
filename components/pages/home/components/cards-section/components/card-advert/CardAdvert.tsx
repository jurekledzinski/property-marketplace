import styles from './CardAdvert.module.css';
import { Card, optionsFormat } from '@/components';
import { CardAdvertContent } from '../card-advert-content';
import { CardAdvertHeader } from '../card-advert-header';
import { CardAdvertProps } from './types';
import { formatNumber } from '@/helpers';

export const CardAdvert = ({ advertCards }: CardAdvertProps) => {
  const { price, src } = advertCards;
  const { format } = formatNumber(price.toString(), 'nl-NL', optionsFormat);

  return (
    <Card className={styles.card}>
      <CardAdvertHeader src={src} />
      <CardAdvertContent advertCards={{ ...advertCards, price: format }} />
    </Card>
  );
};

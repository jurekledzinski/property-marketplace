import styles from './CardAdvert.module.css';
import { Card, optionsFormat } from '@/components';
import { CardAdvertContent } from '../card-advert-content';
import { CardAdvertHeader } from '../card-advert-header';
import { CardAdvertProps } from './types';
import { formatNumber } from '@/helpers';

export const CardAdvert = ({ dataAdvert }: CardAdvertProps) => {
  const { price, src } = dataAdvert;
  const { format } = formatNumber(price.toString(), 'nl-NL', optionsFormat);

  return (
    <Card className={styles.card}>
      <CardAdvertHeader src={src} />
      <CardAdvertContent dataContent={{ ...dataAdvert, price: format }} />
    </Card>
  );
};

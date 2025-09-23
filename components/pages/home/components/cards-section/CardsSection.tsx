import { faAd } from '@fortawesome/free-solid-svg-icons/faAd';
import styles from './CardsSection.module.css';
import { CardAdvert } from './components';
import { CardsSectionProps } from './types';
import { memo } from 'react';
import { NoResults } from '@/components';

export const CardsSection = memo(({ advertCards }: CardsSectionProps) => {
  return (
    <section className={styles.section}>
      {advertCards.map((advert, index) => (
        <CardAdvert key={index} advertCard={advert} />
      ))}

      {!advertCards.length ? (
        <NoResults icon={faAd} text="No adverts found" />
      ) : null}
    </section>
  );
});

CardsSection.displayName = 'CardsSection';

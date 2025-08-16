import styles from './CardsSection.module.css';
import { CardAdvert } from './components';
import { CardsSectionProps } from './types';
import { memo } from 'react';

export const CardsSection = memo(({ advertCards }: CardsSectionProps) => {
  return (
    <section className={styles.section}>
      {advertCards.map((advert, index) => (
        <CardAdvert key={index} advertCards={advert} />
      ))}
    </section>
  );
});

CardsSection.displayName = 'CardsSection';

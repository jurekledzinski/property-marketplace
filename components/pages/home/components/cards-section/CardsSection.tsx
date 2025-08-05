import Image from 'next/image';
import styles from './CardsSection.module.css';
import { memo } from 'react';

export const CardsSection = memo(() => {
  return (
    <section className={styles.section}>
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <div key={index} className={styles.box}>
            <Image
              src="https://cdn.pixabay.com/photo/2017/06/21/19/04/farm-2428245_1280.jpg"
              alt="Beach"
              className={styles.image}
              width={858}
              height={400}
            />
          </div>
        );
      })}
    </section>
  );
});

CardsSection.displayName = 'CardsSection';

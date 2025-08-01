import styles from './HeroSection.module.css';
import { Heading } from '@/components/shared';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Heading className={styles.heading} level={2}>
        Explore Homes and Apartments
        <br /> for Rent or Sale
        <br /> Near You
      </Heading>
    </section>
  );
};

import styles from './HeroSection.module.css';
import { Heading } from '@/components';
import { useBackgroundImageLoaded } from '@/hooks';
const src = '/images/house-hero-image.jpg';

export const HeroSection = () => {
  const isLoaded = useBackgroundImageLoaded(src);

  return (
    <section className={isLoaded ? styles.hero : `${styles.hero} skeleton`}>
      <Heading className={styles.heading} level={2}>
        Explore Homes and Apartments
        <br /> for Rent or Sale
        <br /> Near You
      </Heading>
    </section>
  );
};

'use client';
import styles from './Home.module.css';
import { Box, Container } from '@/components';
import { AdvertsLayout, HeroSection } from './components';

export const HomePage = () => {
  return (
    <>
      <Box className={styles.layerHero}>
        <Container margin="m-center">
          <HeroSection />
        </Container>
      </Box>
      <Box className={styles.layerMain}>
        <Container
          as="main"
          className={styles.containerLayout}
          margin="m-center"
        >
          <AdvertsLayout />
        </Container>
      </Box>
    </>
  );
};

'use client';
import styles from './Home.module.css';
import { Box, Container } from '@/components';
import { HomeProps } from './types';
import { AdvertsLayout, HeroSection } from './components';

export const HomePage = ({ searchValue, sortValue }: HomeProps) => {
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
          <AdvertsLayout searchValue={searchValue} sortValue={sortValue} />
        </Container>
      </Box>
    </>
  );
};

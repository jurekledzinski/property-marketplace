'use client';
import styles from './Home.module.css';
import { Box, Container } from '@/components';
import { HomeProps } from './types';
import { AdvertsLayout, HeroSection } from './components';

export const Home = ({
  advertCards,
  filters,
  page,
  pageSize,
  searchValue,
  sortValue,
  totalItems,
}: HomeProps) => {
  return (
    <>
      <Box className={styles.layerHero}>
        <Container m="m-center">
          <HeroSection />
        </Container>
      </Box>
      <Box className={styles.layerMain}>
        <Container as="main" className={styles.containerLayout} m="m-center">
          <AdvertsLayout
            advertCards={advertCards}
            filters={filters}
            page={page}
            pageSize={pageSize}
            searchValue={searchValue}
            sortValue={sortValue}
            totalItems={totalItems}
          />
        </Container>
      </Box>
    </>
  );
};

'use client';
import styles from './Home.module.css';
import { AdvertsLayout, HeroSection } from './components';
import { Box, Container } from '@/components';
import { HomeProps } from './types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryHomeClient = new QueryClient();

export const Home = ({
  advertCards,
  countries,
  filters,
  page,
  pageSize,
  queryParams,
  searchValue,
  sortValue,
  totalItems,
}: HomeProps) => {
  return (
    <>
      <QueryClientProvider client={queryHomeClient}>
        <Box className={styles.layerHero}>
          <Container m="m-center">
            <HeroSection />
          </Container>
        </Box>
        <Box className={styles.layerMain}>
          <Container as="main" className={styles.containerLayout} m="m-center">
            <AdvertsLayout
              advertCards={advertCards}
              countries={countries}
              filters={filters}
              page={page}
              pageSize={pageSize}
              queryParams={queryParams}
              searchValue={searchValue}
              sortValue={sortValue}
              totalItems={totalItems}
            />
          </Container>
        </Box>
      </QueryClientProvider>
    </>
  );
};

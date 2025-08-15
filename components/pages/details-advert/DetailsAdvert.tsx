'use client';
import styles from './DetailsAdvert.module.css';
import { DetailsAdvertProps } from './types';
import { formatNumber } from '@/helpers';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
  Box,
  CarouselThumbnails,
  Container,
  optionsFormat,
  useCarouselThumbnails,
} from '@/components';

import {
  DetailsHeroImage,
  PropertyDetails,
  PropertySidebar,
} from './components';

export const DetailsAdvert = ({ dataDetailsAdvert }: DetailsAdvertProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const slide = searchParams.get('slide');
  const format = formatNumber(dataDetailsAdvert.price, 'nl-NL', optionsFormat);
  const carousel = useCarouselThumbnails();

  return (
    <Container
      className={styles.container}
      as="section"
      maxWidth="mw-md"
      m="m-center"
      pt="pt-sm"
      pb="pb-sm"
    >
      <DetailsHeroImage
        images={dataDetailsAdvert.images}
        index={Number(slide ?? 0)}
        title={dataDetailsAdvert.title}
        type={dataDetailsAdvert.type}
        price={format.format}
      />

      <CarouselThumbnails
        carouselControl={carousel}
        images={dataDetailsAdvert.images}
        onClickThumbnail={(index) => {
          const query = new URLSearchParams(window.location.search);
          query.set('slide', index.toString());
          router.push(`${pathname}?${query.toString()}`, { scroll: false });
        }}
      />

      <Box className={styles.layout}>
        <PropertyDetails />
        <PropertySidebar />
      </Box>
    </Container>
  );
};

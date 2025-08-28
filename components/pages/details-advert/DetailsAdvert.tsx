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
  useContactForm,
} from '@/components';

import {
  DetailsHeroImage,
  PropertyDetails,
  PropertySidebar,
} from './components';

export const DetailsAdvert = ({ advertDetails }: DetailsAdvertProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const slide = searchParams.get('slide');
  const format = formatNumber(`${advertDetails.price}`, 'nl-NL', optionsFormat);
  const carousel = useCarouselThumbnails();
  const formControls = useContactForm({ userId: '123' });

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
        images={advertDetails.images}
        index={Number(slide ?? 0)}
        price={format.format}
        title={advertDetails.title}
        status={advertDetails.status}
      />

      <CarouselThumbnails
        carouselControl={carousel}
        images={advertDetails.images}
        onClickThumbnail={(index) => {
          const query = new URLSearchParams(window.location.search);
          query.set('slide', index.toString());
          router.push(`${pathname}?${query.toString()}`, { scroll: false });
        }}
      />

      <Box className={styles.layout}>
        <PropertyDetails details={advertDetails} />
        <PropertySidebar
          controls={formControls}
          advertiser={advertDetails.advertiser}
          email={advertDetails.email}
          phone={advertDetails.phone}
        />
      </Box>
    </Container>
  );
};

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

export const DetailsAdvert = ({ advert }: DetailsAdvertProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const slide = searchParams.get('slide');
  const format = formatNumber(`${advert?.price || ''}`, 'nl-NL', optionsFormat);
  const carousel = useCarouselThumbnails();
  const formControls = useContactForm({ userId: '123' });

  if (!advert) return <div>No advert found.</div>;

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
        images={advert.images}
        index={Number(slide ?? 0)}
        price={format.format}
        title={advert.title}
        status={advert.status}
      />

      <CarouselThumbnails
        carouselControl={carousel}
        images={advert.images}
        onClickThumbnail={(index) => {
          const query = new URLSearchParams(window.location.search);
          query.set('slide', index.toString());
          router.push(`${pathname}?${query.toString()}`, { scroll: false });
        }}
      />

      <Box className={styles.layout}>
        <PropertyDetails details={advert} />
        <PropertySidebar
          controls={formControls}
          advertiser={advert.advertiser}
          email={advert.email}
          phone={advert.phone}
        />
      </Box>
    </Container>
  );
};

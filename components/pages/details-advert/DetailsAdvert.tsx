'use client';
import styles from './DetailsAdvert.module.css';
import { DetailsAdvertProps } from './types';
import { formatNumber, showErrorToast, showSuccessToast } from '@/helpers';
import { initialState } from '@/constants';
import { newMessage } from '@/actions';
import { useActionState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

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
  const searchParams = useSearchParams();
  const slide = searchParams.get('slide');

  const format = formatNumber(`${advert?.price || 0}`, 'nl-NL', optionsFormat);
  const carousel = useCarouselThumbnails();

  const [state, action, isPending] = useActionState(newMessage, initialState);

  const { formControl, onSubmit } = useContactForm({
    isPending,
    isSuccess: state.success,
    onFailed: () => !state.success && showErrorToast(state.message),
    onSubmitForm: action,
    onSuccess: () => state.success && showSuccessToast(state.message),
    userId: advert?.userId || '',
  });

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
        price={format.value === '0' ? 'Price not specified' : format.format}
        title={advert.title}
        status={advert.status}
      />

      <CarouselThumbnails
        carouselControl={carousel}
        images={advert.images}
        onClickThumbnail={(index) => {
          const pathname = window.location.pathname;
          const query = new URLSearchParams(window.location.search);
          query.set('slide', index.toString());
          router.push(`${pathname}?${query.toString()}`, { scroll: false });
        }}
      />

      <Box className={styles.layout}>
        <PropertyDetails details={advert} />
        <PropertySidebar
          advertiser={advert.advertiser}
          controls={formControl}
          email={advert.email}
          isPending={!state.message ? isPending : false}
          phone={advert.phone}
          onSubmit={onSubmit}
        />
      </Box>
    </Container>
  );
};

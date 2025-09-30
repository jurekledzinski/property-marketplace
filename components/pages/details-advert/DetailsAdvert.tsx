'use client';
import styles from './DetailsAdvert.module.css';
import { DetailsAdvertProps } from './types';
import { formatNumber, showErrorToast, showSuccessToast } from '@/helpers';
import { newMessage } from '@/actions';
import { useActionStateReset } from '@/hooks';
import { useSearchParams } from 'next/navigation';

import {
  Box,
  CarouselThumbnails,
  Container,
  DetailsHeroImage,
  optionsFormat,
  PropertyDetails,
  PropertySidebar,
  useContactForm,
} from '@/components';

export const DetailsAdvert = ({ advert }: DetailsAdvertProps) => {
  const searchParams = useSearchParams();
  const slide = searchParams.get('slide');

  const format = formatNumber(`${advert?.price || 0}`, 'nl-NL', optionsFormat);

  const action = useActionStateReset({
    fnAction: newMessage,
    onResetAction: () => {
      if (action.state.success) showSuccessToast(action.state.message);
      else showErrorToast(action.state.message);
    },
  });

  const { formControl, onSubmit } = useContactForm({
    isPending: action.isPending,
    isSuccess: action.state.success,
    onFailed: () => action.resetStateAction(),
    onSubmitForm: action.formAction,
    onSuccess: () => action.resetStateAction(),
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
        images={advert.images}
        onClickThumbnail={(index) => {
          const pathname = window.location.pathname;
          const query = new URLSearchParams(window.location.search);
          query.set('slide', index.toString());
          const router = window.history.replaceState;
          router(null, '', `${pathname}?${query.toString()}`);
        }}
      />
      <Box className={styles.layout}>
        <PropertyDetails details={advert} />
        <PropertySidebar
          advertiser={advert.advertiser}
          controls={formControl}
          email={advert.email}
          isPending={!action.state.message ? action.isPending : false}
          phone={advert.phone}
          onSubmit={onSubmit}
        />
      </Box>
    </Container>
  );
};

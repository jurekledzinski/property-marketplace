import { formatNumber } from '@/helpers';
import { optionsFormat } from '@/components';
import { UseFormatDetailsProps } from './types';
import { useMemo } from 'react';

export const useFormatDetails = ({ details }: UseFormatDetailsProps) => {
  const data = useMemo(() => {
    const priceValue = details.price.toString();
    const price = formatNumber(priceValue, 'nl-NL', optionsFormat).format;

    return {
      Location: `${details.country}, ${details.state}, ${details.city}`,
      Type: details.type,
      Area: `${details.area.toString()}m²`,
      Bedrooms: details.rooms.toString(),
      Bathrooms: details.bathrooms.toString(),
      Status: details.status,
      Price: details.status === 'rent' ? `${price}/month` : price,
    };
  }, [details]);

  return data;
};

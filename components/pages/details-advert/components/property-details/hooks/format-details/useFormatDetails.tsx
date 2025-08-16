import { capitalizeFirstLetter, formatNumber } from '@/helpers';
import { optionsFormat } from '@/components';
import { UseFormatDetailsProps } from './types';
import { useMemo } from 'react';

export const useFormatDetails = ({ details }: UseFormatDetailsProps) => {
  const data = useMemo(() => {
    const priceValue = details.price.toString();
    const price = formatNumber(priceValue, 'nl-NL', optionsFormat).format;

    return {
      Location: `${details.country}, ${details.state}, ${details.city}`,
      Type: capitalizeFirstLetter(details.type),
      Area: `${details.area.toString()}m²`,
      Bedrooms: capitalizeFirstLetter(details.rooms.toString()),
      Bathrooms: capitalizeFirstLetter(details.bathrooms.toString()),
      Status: capitalizeFirstLetter(details.status),
      Price: details.status === 'rent' ? `${price}/month` : price,
    };
  }, [details]);

  return data;
};

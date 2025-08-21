// import { InputsAdvertsFilter } from '@/components';
import { UseFormReturn } from 'react-hook-form';

type AmenitiesPart = { amenities: string[] };

export type AmenitiesSectionProps = {
  controls: UseFormReturn<AmenitiesPart, unknown, AmenitiesPart>;
};

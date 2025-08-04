import { UseFormReturn } from 'react-hook-form';

type AmenitiesInputs = {
  amenities: string[];
};

export type AmenitiesSectionProps = {
  controls: UseFormReturn<AmenitiesInputs, unknown, AmenitiesInputs>;
};

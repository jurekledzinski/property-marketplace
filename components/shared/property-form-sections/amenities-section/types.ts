import { Path, UseFormReturn } from 'react-hook-form';
import { PropertyAmenitiesFields } from '@/components';

export type AmenitiesSectionProps<T extends PropertyAmenitiesFields> = {
  controls: UseFormReturn<T>;
  nameAmenities: Path<T>;
};

import { useSetQuries } from '@/hooks';
import { PartialAdvertsFilters } from '../../types';

export type InputsAdvertsFilter = {
  country: string;
  city: string;
  type: string;
  condition: string;
  status: string;
  year: string;
  priceFrom: string;
  priceTo: string;
  area: string;
  rooms: string;
  amenities: string[];
  style: string;
};

export interface UseFilterFormProps extends ReturnType<typeof useSetQuries> {
  filters: PartialAdvertsFilters;
}

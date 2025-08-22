import { useSetQuries } from '@/hooks';

export type LocationFields = {
  country: string;
  city: string;
};

export type PropertyTypeFields = {
  type: string;
  status: string;
  condition: string;
};

export type PropertyMetricFields = {
  year: string;
  area: string;
  rooms: string;
};

export type PropertyAmenitiesFields = {
  amenities: string[];
};

export type PropertyStylesFields = {
  style: string;
};

export type InputsAdvertsFilter = LocationFields &
  PropertyTypeFields &
  PropertyMetricFields &
  PropertyAmenitiesFields &
  PropertyStylesFields & {
    priceFrom: string;
    priceTo: string;
  };

export interface UseFilterFormProps extends ReturnType<typeof useSetQuries> {
  filters: InputsAdvertsFilter;
}

import { useSetQuries } from '@/hooks';

export type InputsAdvertsFilter = {
  country: string;
  city: string;
  property: string;
  condition: string;
  advertisement: string;
  year: string;
  priceFrom: string;
  priceTo: string;
  area: string;
  rooms: string;
  amenities: string[];
  style: string;
};

export type UseFilterFormProps = ReturnType<typeof useSetQuries>;

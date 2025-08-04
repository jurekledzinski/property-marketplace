import { UseFormReturn } from 'react-hook-form';

type DetailsInputs = {
  area: string;
  priceFrom: string;
  priceTo: string;
  rooms: string;
  year: string;
};

export type PropertyDetailsSectionProps = {
  controls: UseFormReturn<DetailsInputs, unknown, DetailsInputs>;
};

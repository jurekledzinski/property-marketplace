import { FilterFormProps } from './types';
import {
  AmenitiesSection,
  ArchitectureSection,
  Form,
  LocationSection,
  PriceSection,
  PropertyDetailsSection,
  PropertyTypeSection,
} from '@/components';

export const FilterForm = ({ controls, onSubmit, reset }: FilterFormProps) => {
  console.log('FilterForm ------------');
  return (
    <Form id="filterForm" onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <LocationSection key={reset.location} controls={controls} />
      <PropertyTypeSection key={reset.type} controls={controls} />
      <PropertyDetailsSection key={reset.details} controls={controls} />
      <PriceSection key={reset.price} controls={controls} />
      <AmenitiesSection key={reset.amenities} controls={controls} />
      <ArchitectureSection key={reset.architecture} controls={controls} />
    </Form>
  );
};

import { FilterFormProps } from './types';
import { memo } from 'react';
import {
  AmenitiesSection,
  ArchitectureSection,
  Form,
  LocationSection,
  PriceSection,
  PropertyDetailsSection,
  PropertyTypeSection,
} from '@/components';

export const FilterForm = memo(({ controls, onSubmit }: FilterFormProps) => {
  return (
    <Form id="filterForm" onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <LocationSection controls={controls} />
      <PropertyTypeSection controls={controls} />
      <PropertyDetailsSection controls={controls} />
      <PriceSection controls={controls} />
      <AmenitiesSection controls={controls} />
      <ArchitectureSection controls={controls} />
    </Form>
  );
});

FilterForm.displayName = 'FilterForm';

import { FilterFormProps } from './types';
import {
  AmenitiesSection,
  ArchitectureSection,
  Form,
  LocationSection,
  PropertyDetailsSection,
  PropertyTypeSection,
} from '@/components';

export const FilterForm = ({ controls, onSubmit }: FilterFormProps) => {
  return (
    <Form onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <LocationSection controls={controls} />
      <PropertyTypeSection controls={controls} />
      <PropertyDetailsSection controls={controls} />
      <AmenitiesSection controls={controls} />
      <ArchitectureSection controls={controls} />
    </Form>
  );
};

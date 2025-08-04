import {
  AmenitiesSection,
  Form,
  LocationSection,
  PropertyDetailsSection,
  PropertyTypeSection,
} from '@/components';
import { FilterFormProps } from './types';

export const FilterForm = ({ controls, onSubmit }: FilterFormProps) => {
  return (
    <Form onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <LocationSection controls={controls} />
      <PropertyTypeSection controls={controls} />
      <PropertyDetailsSection controls={controls} />
      <AmenitiesSection controls={controls} />
    </Form>
  );
};

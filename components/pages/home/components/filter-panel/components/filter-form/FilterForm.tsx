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
  return (
    <Form id="filterForm" onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <LocationSection
        key={reset.location}
        controls={controls}
        errors={controls.formState.errors}
        nameCity="city"
        nameCountry="country"
      />
      <PropertyTypeSection
        key={reset.type}
        controls={controls}
        errors={controls.formState.errors}
        nameCondition="condition"
        nameStatus="status"
        nameType="type"
      />
      <PropertyDetailsSection
        key={reset.details}
        controls={controls}
        errors={controls.formState.errors}
        nameArea="area"
        nameRooms="rooms"
        nameYear="year"
      />
      <PriceSection key={reset.price} controls={controls} />
      <AmenitiesSection
        key={reset.amenities}
        controls={controls}
        nameAmenities="amenities"
      />
      <ArchitectureSection
        key={reset.architecture}
        controls={controls}
        errors={controls.formState.errors}
        nameStyle="style"
      />
    </Form>
  );
};

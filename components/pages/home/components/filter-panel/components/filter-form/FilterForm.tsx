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

export const FilterForm = ({
  cities,
  controls,
  countries,
  getCities,
  getStates,
  isLoadingCities,
  isLoadingStates,
  isSuccessCities,
  isSuccessStates,
  onSubmit,
  reset,
  onScrollEndCities,
  onScrollEndStates,
  states,
}: FilterFormProps) => {
  return (
    <Form id="filterForm" onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <LocationSection
        key={reset.location}
        cities={cities}
        controls={controls}
        countries={countries}
        getCities={getCities}
        getStates={getStates}
        errors={controls.formState.errors}
        isLoadingCities={isLoadingCities}
        isLoadingStates={isLoadingStates}
        isSuccessCities={isSuccessCities}
        isSuccessStates={isSuccessStates}
        nameCity="city"
        nameCountry="country"
        nameState="state"
        onScrollEndCities={onScrollEndCities}
        onScrollEndStates={onScrollEndStates}
        states={states}
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

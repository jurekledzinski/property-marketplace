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
  onScrollEndCities,
  onScrollEndStates,
  states,
}: FilterFormProps) => {
  return (
    <Form id="filterForm" onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <LocationSection
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
        controls={controls}
        errors={controls.formState.errors}
        nameCondition="condition"
        nameStatus="status"
        nameType="type"
      />
      <PropertyDetailsSection
        controls={controls}
        errors={controls.formState.errors}
        nameArea="area"
        nameRooms="rooms"
        nameYear="year"
      />
      <PriceSection controls={controls} errors={controls.formState.errors} />
      <AmenitiesSection controls={controls} nameAmenities="amenities" />
      <ArchitectureSection
        controls={controls}
        errors={controls.formState.errors}
        nameStyle="style"
      />
    </Form>
  );
};

import { AdvertFormProps } from './types';
import { DescriptionSection } from '../description-section';
import { ImagesSection } from '../images-section';
import { PersonalSection } from '../personal-section';
import { PriceSection } from '../price-section/PriceSection';
import {
  AmenitiesSection,
  ArchitectureSection,
  BathroomsSection,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  LocationSection,
  PropertyDetailsSection,
  PropertyTypeSection,
} from '@/components';

export const AdvertForm = ({
  cities,
  controls,
  countries,
  getCities,
  getStates,
  isLoadingCities,
  isLoadingStates,
  isSuccessCities,
  isSuccessStates,
  states,
  isPending,
  isUploadPending,
  onSubmit,
  uploadFiles,
  deleteUploadedFiles,
  validationInfo,
  onScrollEndCities,
  onScrollEndStates,
}: AdvertFormProps) => {
  return (
    <Form
      data-group="true"
      orientation="row"
      onSubmit={controls.handleSubmit(onSubmit)}
      noValidate
    >
      <FormGroup>
        <PersonalSection controls={controls} />
        <LocationSection
          cities={cities}
          controls={controls}
          countries={countries}
          errors={controls.formState.errors}
          getCities={getCities}
          getStates={getStates}
          isLoadingCities={isLoadingCities}
          isLoadingStates={isLoadingStates}
          isSuccessCities={isSuccessCities}
          isSuccessStates={isSuccessStates}
          nameCity="city"
          nameCountry="country"
          nameState="state"
          labels={true}
          rulesCity={{
            required: { message: 'City is required', value: true },
          }}
          rulesCountry={{
            required: { message: 'Country is required', value: true },
          }}
          rulesState={{
            required: { message: 'State is required', value: true },
          }}
          onScrollEndCities={onScrollEndCities}
          onScrollEndStates={onScrollEndStates}
          states={states}
        />
        <DescriptionSection controls={controls} />
        <ImagesSection
          controls={controls}
          deleteUploadedFiles={deleteUploadedFiles}
          uploadFiles={uploadFiles}
          validationInfo={validationInfo}
        />
      </FormGroup>
      <FormGroup>
        <PropertyTypeSection
          controls={controls}
          errors={controls.formState.errors}
          nameCondition="condition"
          nameStatus="status"
          nameType="type"
          labels={true}
          rulesCondition={{
            required: { message: 'Condition is required', value: true },
          }}
          rulesStatus={{
            required: { message: 'Status is required', value: true },
          }}
          rulesType={{
            required: { message: 'Type is required', value: true },
          }}
        />
        <PriceSection controls={controls} />
        <PropertyDetailsSection
          controls={controls}
          errors={controls.formState.errors}
          nameArea="area"
          nameRooms="rooms"
          nameYear="year"
          labels={true}
          rulesArea={{ required: { message: 'Size is required', value: true } }}
          rulesRooms={{
            required: { message: 'Rooms is required', value: true },
          }}
          rulesYear={{ required: { message: 'Year is required', value: true } }}
        />
        <BathroomsSection controls={controls} />
        <ArchitectureSection
          controls={controls}
          errors={controls.formState.errors}
          nameStyle="style"
          rulesArchitecture={{
            required: { message: 'Style is required', value: true },
          }}
        />
        <AmenitiesSection controls={controls} nameAmenities="amenities" />
        <ButtonGroup mt="mt-md" fullWidth>
          <Button
            disabled={isUploadPending}
            fullWidth
            isLoading={isPending}
            label="Sign In"
            size="size-lg"
            type="submit"
          />
        </ButtonGroup>
      </FormGroup>
    </Form>
  );
};

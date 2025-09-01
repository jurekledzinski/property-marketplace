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
  controls,
  isPending,
  onSubmit,
  reset,
  uploadFiles,
}: AdvertFormProps) => {
  return (
    <Form
      data-group="true"
      orientation="row"
      onSubmit={controls.handleSubmit(onSubmit)}
      noValidate
    >
      <FormGroup>
        <PersonalSection controls={controls} key={reset.personal} />
        <LocationSection
          controls={controls}
          errors={controls.formState.errors}
          nameCity="city"
          nameCountry="country"
          labels={true}
          rulesCity={{
            required: { message: 'City is required', value: true },
          }}
          rulesCountry={{
            required: { message: 'Country is required', value: true },
          }}
        />
        <DescriptionSection controls={controls} key={reset.description} />
        <ImagesSection controls={controls} uploadFiles={uploadFiles} />
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
        <BathroomsSection controls={controls} key={reset.bathrooms} />
        <ArchitectureSection
          controls={controls}
          errors={controls.formState.errors}
          nameStyle="style"
          rulesArchitecture={{
            required: { message: 'Style is required', value: true },
          }}
        />
        <AmenitiesSection
          controls={controls}
          nameAmenities="amenities"
          key={reset.amenities}
        />
        <ButtonGroup mt="mt-md" fullWidth>
          <Button
            type="submit"
            label="Sign In"
            fullWidth
            size="size-lg"
            isLoading={isPending}
          />
        </ButtonGroup>
      </FormGroup>
    </Form>
  );
};

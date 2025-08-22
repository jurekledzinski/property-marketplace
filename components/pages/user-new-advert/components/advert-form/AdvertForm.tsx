import { AdvertFormProps } from './types';
import { DescriptionSection } from '../description-section';
import { ImagesSection } from '../images-section';
import { PersonalSection } from '../personal-section';
import { PriceSection } from '../price-section/PriceSection';
import { useControlValidateFiles } from '../images-section/hooks';
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
  useValidateFiles,
} from '@/components';

export const AdvertForm = ({ controls, onSubmit }: AdvertFormProps) => {
  const checkFiles = useValidateFiles({
    allowTypes: ['image/jpeg', 'image/png'],
    maxSize: [3, 'MB'],
    maxAmount: 10,
  });
  const validate = useControlValidateFiles({ checkFiles });

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
        <DescriptionSection controls={controls} />
        <ImagesSection validate={validate} controls={controls} />
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
          <Button type="submit" label="Sign In" fullWidth size="size-lg" />
        </ButtonGroup>
      </FormGroup>
    </Form>
  );
};

'use client';
import { AmenitiesSectionProps } from './types';

import {
  Checkbox,
  CheckboxGroup,
  Field,
  Label,
  PropertyAmenitiesFields,
} from '@/components';

const amenities = [
  'Air Conditioning',
  'Balcony',
  'Basement',
  'Elevator',
  'Garage',
  'Garden',
  'Fireplace',
  'Furnished',
  'Heating',
  'Internet',
  'Parking',
  'Smart Home Features',
  'Security System',
  'Storage Room',
  'Swimming Pool',
  'Wheelchair Accessible',
];

export const AmenitiesSection = <T extends PropertyAmenitiesFields>({
  controls,
  nameAmenities,
}: AmenitiesSectionProps<T>) => {
  const { register } = controls;

  return (
    <>
      <Field>
        <Label>Amenities</Label>
        <CheckboxGroup orientation="column" spacing="tight">
          {amenities.map((amenity) => {
            return (
              <Checkbox
                key={amenity}
                {...register(nameAmenities)}
                id={amenity.toLowerCase()}
                value={amenity.toLowerCase()}
                size="size-xs"
              >
                {amenity}
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </Field>
    </>
  );
};

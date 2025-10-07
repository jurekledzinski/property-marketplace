'use client';
import styles from './AmenitiesSection.module.css';
import { AmenitiesSectionProps } from './types';
import { memo } from 'react';
import { useWatch } from 'react-hook-form';

import {
  Checkbox,
  CheckboxGroup,
  Field,
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

const AmenitiesPart = <T extends PropertyAmenitiesFields>({
  controls,
  nameAmenities,
}: AmenitiesSectionProps<T>) => {
  const { control, register } = controls;
  const selectedAmenities = useWatch({ control, name: nameAmenities });

  return (
    <>
      <Field>
        <legend className={styles.legend}>Amenities</legend>
        <CheckboxGroup orientation="column" spacing="tight">
          {amenities.map((amenity) => {
            return (
              <Checkbox
                key={amenity}
                {...register(nameAmenities)}
                id={amenity.toLowerCase()}
                value={amenity.toLowerCase()}
                size="size-xs"
                checked={selectedAmenities?.includes(amenity.toLowerCase())}
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

export const AmenitiesSection = memo(AmenitiesPart) as typeof AmenitiesPart;

AmenitiesPart.displayName = 'AmenitiesSection';

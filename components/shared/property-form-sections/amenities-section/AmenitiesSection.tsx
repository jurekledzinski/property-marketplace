'use client';
import { AmenitiesSectionProps } from './types';
import { Checkbox, CheckboxGroup, Field, Label } from '@/components';
import { memo } from 'react';

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

export const AmenitiesSection = memo(({ controls }: AmenitiesSectionProps) => {
  const { register } = controls;

  console.log('AmenitiesSection 5');

  return (
    <>
      <Field>
        <Label>Amenities</Label>
        <CheckboxGroup orientation="column" spacing="tight">
          {amenities.map((amenity) => {
            return (
              <Checkbox
                key={amenity}
                {...register('amenities')}
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
});

AmenitiesSection.displayName = 'AmenitiesSection';

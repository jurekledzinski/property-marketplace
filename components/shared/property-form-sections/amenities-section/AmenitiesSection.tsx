import { AmenitiesSectionProps } from './types';
import { Checkbox, CheckboxGroup, Field } from '@/components';

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

export const AmenitiesSection = ({ controls }: AmenitiesSectionProps) => {
  const { control } = controls;

  return (
    <>
      <Field>
        <CheckboxGroup orientation="column" spacing="tight">
          {amenities.map((amenity) => (
            <Checkbox
              key={amenity}
              {...control.register('amenities')}
              id={amenity.toLowerCase()}
              value={amenity.toLowerCase()}
              size="size-xs"
            >
              {amenity}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </Field>
    </>
  );
};

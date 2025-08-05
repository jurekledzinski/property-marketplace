'use client';
import { Field, TextInput } from '@/components';
import { PropertyDetailsSectionProps } from './types';

export const PropertyDetailsSection = ({
  controls,
}: PropertyDetailsSectionProps) => {
  const { register } = controls;

  return (
    <>
      <Field>
        <TextInput
          {...register('year')}
          type="number"
          min={1800}
          max={new Date().getFullYear()}
          placeholder="Year of construciton"
        />
      </Field>
      <Field>
        <TextInput
          {...register('area')}
          placeholder="Area"
          type="number"
          endIcon={['m²']}
          min={1}
        />
      </Field>
      <Field>
        <TextInput
          {...register('rooms')}
          placeholder="Number of rooms"
          type="number"
          min={1}
          step={1}
        />
      </Field>
    </>
  );
};

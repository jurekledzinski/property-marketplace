'use client';
import {
  Field,
  Label,
  Message,
  PropertyMetricFields,
  TextInput,
} from '@/components';
import { memo } from 'react';
import { PropertyDetailsSectionProps } from './types';

const DetailsPart = <T extends PropertyMetricFields>({
  controls,
  errors,
  labels = false,
  nameArea,
  nameRooms,
  nameYear,
  rulesArea,
  rulesRooms,
  rulesYear,
}: PropertyDetailsSectionProps<T>) => {
  const { register } = controls;

  return (
    <>
      <Field>
        {labels && <Label>Year</Label>}
        <TextInput
          {...register(nameYear, rulesYear)}
          type="number"
          min={1800}
          max={new Date().getFullYear()}
          placeholder="Year of construciton"
        />
        {errors.year ? (
          <Message variant="error">{errors.year.message}</Message>
        ) : null}
      </Field>
      <Field>
        {labels && <Label>Size</Label>}
        <TextInput
          {...register(nameArea, rulesArea)}
          placeholder="Area"
          type="number"
          endIcon={['m²']}
          min={1}
        />
        {errors.area ? (
          <Message variant="error">{errors.area.message}</Message>
        ) : null}
      </Field>
      <Field>
        {labels && <Label>Rooms</Label>}
        <TextInput
          {...register(nameRooms, rulesRooms)}
          placeholder="Number of rooms"
          type="number"
          min={1}
          step={1}
        />
        {errors.rooms ? (
          <Message variant="error">{errors.rooms.message}</Message>
        ) : null}
      </Field>
    </>
  );
};

export const PropertyDetailsSection = memo(DetailsPart) as typeof DetailsPart;

DetailsPart.displayName = 'PropertyDetailsSection';

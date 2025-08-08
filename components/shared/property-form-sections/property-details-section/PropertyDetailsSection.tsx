'use client';
import { Field, Message, TextInput } from '@/components';
import { PropertyDetailsSectionProps } from './types';
import { memo } from 'react';

export const PropertyDetailsSection = memo(
  ({
    controls,
    rulesArea,
    rulesRooms,
    rulesYear,
  }: PropertyDetailsSectionProps) => {
    const { formState, register } = controls;
    const { errors } = formState;

    return (
      <>
        <Field>
          <TextInput
            {...register('year', rulesYear)}
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
          <TextInput
            {...register('area', rulesArea)}
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
          <TextInput
            {...register('rooms', rulesRooms)}
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
  }
);

PropertyDetailsSection.displayName = 'PropertyDetailsSection';

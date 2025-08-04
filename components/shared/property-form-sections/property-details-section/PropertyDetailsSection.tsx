'use client';
import { Controller } from 'react-hook-form';
import { Field, Message, TextInput } from '@/components';
import { PropertyDetailsSectionProps } from './types';
import { useRef } from 'react';

export const PropertyDetailsSection = ({
  controls,
}: PropertyDetailsSectionProps) => {
  const { control, formState, setValue } = controls;
  const { errors } = formState;
  const type = useRef<'number' | 'text'>('number');

  return (
    <>
      <Field>
        <TextInput
          {...control.register('year')}
          type="number"
          min={1800}
          max={new Date().getFullYear()}
          placeholder="Year of construciton"
        />
        <Message variant="error">{errors.year?.message}</Message>
      </Field>

      <Field>
        <Controller
          name="priceFrom"
          control={control}
          render={({ field: { ...rest } }) => (
            <TextInput
              {...rest}
              placeholder="Price from"
              type={type.current}
              onFocus={(e) => {
                type.current = 'number';
                const value = e.target.value.replace(/[^\d]/g, '');
                setValue('priceFrom', value);
              }}
              onBlur={(e) => {
                type.current = 'text';
                // const value = e.target.value;
                // const format = formatNumber(value, 'nl-NL', optionsFormat);
                // setValue('priceFrom', format.format);
              }}
              min={0}
            />
          )}
        />
        <Message variant="error">{errors.priceFrom?.message}</Message>
      </Field>

      <Field>
        <Controller
          name="priceTo"
          control={control}
          render={({ field: { ...rest } }) => (
            <TextInput
              {...rest}
              placeholder="Price to"
              type={type.current}
              onFocus={(e) => {
                type.current = 'number';
                const value = e.target.value.replace(/[^\d]/g, '');
                setValue('priceTo', value);
              }}
              onBlur={(e) => {
                type.current = 'text';
                // const value = e.target.value;
                // const format = formatNumber(value, 'nl-NL', optionsFormat);
                // setValue('priceFrom', format.format);
              }}
              min={0}
            />
          )}
        />
        <Message variant="error">{errors.priceTo?.message}</Message>
      </Field>

      <Field>
        <TextInput
          {...control.register('area')}
          placeholder="Area"
          type="number"
          endIcon={['m²']}
          min={0}
        />
        <Message variant="error">{errors.area?.message}</Message>
      </Field>

      <Field>
        <TextInput
          {...control.register('rooms')}
          placeholder="Number of rooms"
          type="number"
          min={0}
          step={1}
        />
        <Message variant="error">{errors.rooms?.message}</Message>
      </Field>
    </>
  );
};

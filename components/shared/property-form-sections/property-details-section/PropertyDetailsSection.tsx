'use client';
import { Controller } from 'react-hook-form';
import { Field, TextInput } from '@/components';
import { PropertyDetailsSectionProps } from './types';
import { useRef } from 'react';

export const PropertyDetailsSection = ({
  controls,
}: PropertyDetailsSectionProps) => {
  const { control, setValue } = controls;
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
      </Field>

      <Field>
        <TextInput
          {...control.register('area')}
          placeholder="Area"
          type="number"
          endIcon={['m²']}
          min={0}
        />
      </Field>

      <Field>
        <TextInput
          {...control.register('rooms')}
          placeholder="Number of rooms"
          type="number"
          min={0}
          step={1}
        />
      </Field>
    </>
  );
};

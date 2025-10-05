'use client';
import { Controller } from 'react-hook-form';
import { formatNumber } from '@/utils-client';
import { PriceSectionProps } from './types';

import {
  Field,
  Label,
  Message,
  optionsFormat,
  TextInput,
  usePriceInputType,
} from '@/components';

export const PriceSection = ({ controls }: PriceSectionProps) => {
  const { control, formState } = controls;
  const { errors } = formState;
  const { typePriceFrom, onBlur, onFocus } = usePriceInputType();

  return (
    <>
      <Field>
        <Label htmlFor="price">Price</Label>
        <Controller
          name="price"
          rules={{
            required: { message: 'Price is required', value: true },
          }}
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              id="price"
              placeholder="Price"
              type={typePriceFrom}
              onFocus={onFocus.from}
              onBlur={onBlur.from}
              min={0}
              onChange={(e) => {
                const numeric = e.target.value.replace(/\D/g, '');
                field.onChange(numeric);
              }}
              value={
                typePriceFrom === 'number'
                  ? field.value
                  : formatNumber(field.value, 'nl-NL', optionsFormat).format
              }
            />
          )}
        />
        {errors.price ? (
          <Message variant="error">{errors.price?.message}</Message>
        ) : null}
      </Field>
    </>
  );
};

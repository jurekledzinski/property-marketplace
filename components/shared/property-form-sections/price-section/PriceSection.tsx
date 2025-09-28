'use client';
import { Controller } from 'react-hook-form';
import { Field, Message, TextInput, usePriceInputType } from '@/components';
import { formatNumber } from '@/helpers';
import { memo } from 'react';
import { optionsFormat, validate } from './utils';
import { PriceSectionProps } from './types';

const PricePart = ({ controls, errors }: PriceSectionProps) => {
  const { control } = controls;

  const { typePriceFrom, typePriceTo, onBlur, onFocus } = usePriceInputType();

  return (
    <>
      <Field>
        <Controller
          name="priceFrom"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              placeholder="Price from"
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
        {errors.priceFrom ? (
          <Message variant="error">{errors.priceFrom?.message}</Message>
        ) : null}
      </Field>

      <Field>
        <Controller
          name="priceTo"
          rules={{ validate }}
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              placeholder="Price to"
              type={typePriceTo}
              onFocus={onFocus.to}
              onBlur={onBlur.to}
              min={0}
              onChange={(e) => {
                const numeric = e.target.value.replace(/\D/g, '');
                field.onChange(numeric);
              }}
              value={
                typePriceTo === 'number'
                  ? field.value
                  : formatNumber(field.value, 'nl-NL', optionsFormat).format
              }
            />
          )}
        />
        {errors.priceTo ? (
          <Message variant="error">{errors.priceTo?.message}</Message>
        ) : null}
      </Field>
    </>
  );
};

export const PriceSection = memo(PricePart) as typeof PricePart;

PricePart.displayName = 'PriceSection';

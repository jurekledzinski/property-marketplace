'use client';
import { Controller, useFormState } from 'react-hook-form';
import { Field, Message, TextInput, usePriceInputFormat } from '@/components';
import { PriceSectionProps } from './types';
import { useRef } from 'react';
import { validate } from './utils';

export const PriceSection = ({ controls }: PriceSectionProps) => {
  const typePriceFrom = useRef<'number' | 'text'>('number');
  const typePriceTo = useRef<'number' | 'text'>('number');
  const { control, setValue } = controls;
  const { errors } = useFormState({ control });

  const { onBlur, onFocus } = usePriceInputFormat({
    onBlurFrom: () => (typePriceFrom.current = 'text'),
    onBlurTo: () => (typePriceTo.current = 'text'),
    onFocusFrom: () => (typePriceFrom.current = 'number'),
    onFocusTo: () => (typePriceTo.current = 'number'),
    onSetValue: ({ name, value }) => {
      setValue(name, value, { shouldValidate: true });
    },
  });

  return (
    <>
      <Field>
        <Controller
          name="priceFrom"
          control={control}
          render={({ field: { ...rest } }) => (
            <TextInput
              {...rest}
              placeholder="Price from"
              type={typePriceFrom.current}
              onFocus={(e) => onFocus('priceFrom', e)}
              onBlur={(e) => onBlur('priceFrom', e)}
              min={0}
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
          render={({ field: { ...rest } }) => (
            <TextInput
              {...rest}
              placeholder="Price to"
              type={typePriceTo.current}
              onFocus={(e) => onFocus('priceTo', e)}
              onBlur={(e) => onBlur('priceTo', e)}
              min={0}
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

'use client';
import { Controller, useWatch } from 'react-hook-form';
import { LocationSectionProps } from './types';
import { memo } from 'react';

import {
  Field,
  Label,
  LocationFields,
  Message,
  Select,
  SelectList,
  SelectOption,
  SelectPanel,
  SelectTrigger,
} from '@/components';

const countries = ['Poland', 'Slovakia', 'Croatia'];
const cities = ['Szczecin', 'Wroclaw', 'Krakow'];

export const LocationPart = <T extends LocationFields>({
  controls,
  rulesCountry,
  rulesCity,
  labels = false,
  nameCountry,
  nameCity,
  errors,
}: LocationSectionProps<T>) => {
  const { control } = controls;
  const country = useWatch({ control, name: nameCountry });

  return (
    <>
      <Field>
        {labels && <Label>Country</Label>}
        <Controller
          name={nameCountry}
          control={control}
          rules={rulesCountry}
          render={({ field: { onChange, ...rest } }) => (
            <Select onChange={(id) => onChange(id)} {...rest}>
              <SelectTrigger placeholder="Select country" />
              <SelectPanel>
                <SelectList>
                  {countries.map((country) => (
                    <SelectOption key={country} id={country.toLowerCase()}>
                      {country}
                    </SelectOption>
                  ))}
                </SelectList>
              </SelectPanel>
            </Select>
          )}
        />
        {errors.country ? (
          <Message variant="error">{errors.country.message}</Message>
        ) : null}
      </Field>
      <Field>
        {labels && <Label>City</Label>}
        <Controller
          name={nameCity}
          control={control}
          rules={rulesCity}
          render={({ field: { onChange, ...rest } }) => (
            <Select onChange={(id) => onChange(id)} {...rest}>
              <SelectTrigger
                placeholder="Select city"
                disabled={country === ''}
              />
              <SelectPanel>
                <SelectList>
                  {cities.map((city) => (
                    <SelectOption key={city} id={city.toLowerCase()}>
                      {city}
                    </SelectOption>
                  ))}
                </SelectList>
              </SelectPanel>
            </Select>
          )}
        />
        {errors.city ? (
          <Message variant="error">{errors.city.message}</Message>
        ) : null}
      </Field>
    </>
  );
};

export const LocationSection = memo(LocationPart) as typeof LocationPart;

LocationPart.displayName = 'LocationSection';

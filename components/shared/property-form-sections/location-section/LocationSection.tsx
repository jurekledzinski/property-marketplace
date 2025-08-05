'use client';
import { Controller, useWatch } from 'react-hook-form';
import { LocationSectionProps } from './types';
import {
  Field,
  Message,
  Select,
  SelectList,
  SelectOption,
  SelectPanel,
  SelectTrigger,
} from '@/components';

const countries = ['Poland', 'Slovakia', 'Croatia'];
const cities = ['Szczecin', 'Wroclaw', 'Krakow'];

export const LocationSection = ({
  controls,
  rulesCountry,
  rulesCity,
}: LocationSectionProps) => {
  const { control, formState } = controls;
  const { errors } = formState;
  const country = useWatch({ name: 'country', control });

  return (
    <>
      <Field>
        <Controller
          name={'country'}
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
        <Controller
          name={'city'}
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

'use client';
import styles from './LocationSection.module.css';
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
  SelectScrollList,
  SelectTrigger,
} from '@/components';

// const cities = ['Szczecin', 'Wroclaw', 'Krakow'];

export const LocationPart = <T extends LocationFields>({
  controls,
  countries,
  cities,
  states,
  getCities,
  getStates,
  isSuccessStates,
  rulesCountry,
  rulesCity,
  rulesState,
  labels = false,
  nameCountry,
  nameCity,
  nameState,
  errors,
  onScrollEndCities,
  onScrollEndStates,
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
            <Select
              onChange={(id, value) => {
                getStates(value!);
                onChange(id);
                // jeśli w state country select jest coś dodane to clear state value form
              }}
              {...rest}
            >
              <SelectTrigger placeholder="Select country" />
              <SelectPanel>
                <SelectList>
                  {countries.map((country, index) => (
                    <SelectOption
                      key={country.name}
                      id={country.name.toLowerCase()}
                      value={country.code}
                    >
                      <span className={styles.text}>{country.name}</span>
                      <span
                        className={styles.flag}
                        style={{ backgroundPosition: `-${index * 30}px 0` }}
                      ></span>
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
        {labels && <Label>State</Label>}
        <Controller
          name={nameState}
          control={control}
          rules={rulesState}
          render={({ field: { onChange, ...rest } }) => (
            <Select
              onChange={(id, value) => {
                getCities(value!);
                onChange(id);
              }}
              {...rest}
            >
              <SelectTrigger
                placeholder="Select state"
                disabled={country === '' && !isSuccessStates} //isFetched z useFetchStates
              />
              <SelectPanel>
                <SelectScrollList
                  isLoading={false}
                  onScrollEnd={onScrollEndStates}
                >
                  {states.map((state) => (
                    <SelectOption
                      key={state.name}
                      id={state.name.toLowerCase()}
                      value={state.code}
                    >
                      {state.name}
                    </SelectOption>
                  ))}
                </SelectScrollList>
              </SelectPanel>
            </Select>
          )}
        />
        {errors.state ? (
          <Message variant="error">{errors.state.message}</Message>
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
                <SelectScrollList
                  isLoading={false}
                  onScrollEnd={onScrollEndCities}
                >
                  {cities.map((city) => (
                    <SelectOption key={city} id={city.toLowerCase()}>
                      {city}
                    </SelectOption>
                  ))}
                </SelectScrollList>
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

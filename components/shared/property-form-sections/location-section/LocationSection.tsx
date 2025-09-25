'use client';
import styles from './LocationSection.module.css';
import { Controller, FieldPathValue, useWatch } from 'react-hook-form';
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

export const LocationPart = <T extends LocationFields>({
  controls,
  countries,
  cities,
  states,
  getCities,
  getStates,
  isLoadingCities,
  isLoadingStates,
  isSuccessCities,
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
  const { control, getValues, setValue } = controls;
  const country = useWatch({ control, name: nameCountry });
  const state = getValues(nameState);
  const city = getValues(nameCity);
  const clearState = '' as FieldPathValue<T, typeof nameState>;
  const clearCity = '' as FieldPathValue<T, typeof nameCity>;

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
              onChange={(id, data) => {
                if (data && data.code) getStates(data.code);
                onChange(id);

                if (state) setValue(nameState, clearState);
                if (city) setValue(nameCity, clearCity);
              }}
              {...rest}
            >
              <SelectTrigger
                disabled={!countries.length}
                placeholder="Select country"
              />
              <SelectPanel>
                <SelectList>
                  {countries.map((country, index) => (
                    <SelectOption
                      key={country.name}
                      id={country.name.toLowerCase()}
                      data={{ code: country.code }}
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
              onChange={(id, data) => {
                if (data && data.code && data.div1Code) {
                  getCities(data.code, data.div1Code);
                }
                onChange(id);

                if (city) setValue(nameCity, clearCity);
              }}
              {...rest}
            >
              <SelectTrigger
                placeholder="Select state"
                disabled={country === '' || !isSuccessStates}
              />
              <SelectPanel>
                <SelectScrollList
                  isLoading={isLoadingStates}
                  onScrollEnd={onScrollEndStates}
                >
                  {states.map((state) => (
                    <SelectOption
                      key={state.name}
                      id={state.name.toLowerCase()}
                      data={{
                        code: state.code,
                        div1Code: state.div1Code,
                      }}
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
                disabled={state === '' || !isSuccessCities}
              />
              <SelectPanel>
                <SelectScrollList
                  isLoading={isLoadingCities}
                  onScrollEnd={onScrollEndCities}
                >
                  {cities.map((city) => (
                    <SelectOption
                      key={city.name + city.div2Code}
                      id={city.name.toLowerCase()}
                    >
                      {city.name}
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

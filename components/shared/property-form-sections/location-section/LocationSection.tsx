'use client';
import styles from './LocationSection.module.css';
import { Box, LocationFields, SelectOption } from '@/components';
import { LocationSectionProps } from './types';
import { LocationSelect } from './components';
import { memo } from 'react';
import { useLocationFields } from './hooks';

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
  const { control, setValue } = controls;
  const { city, clearCity, clearState, disabledCity, disabledState, state } =
    useLocationFields({
      amountCities: cities.length,
      amountStates: states.length,
      control,
      isSuccessCities,
      isSuccessStates,
      nameCity,
      nameCountry,
      nameState,
    });

  return (
    <>
      <LocationSelect
        control={control}
        data={countries}
        disabled={!countries.length}
        errors={errors}
        isLabel={labels}
        nameField={nameCountry}
        label="Country"
        options={countries.map(({ name }) => ({
          key: name.toLowerCase(),
          value: name,
        }))}
        onSelect={(key, onChange, payload) => {
          if (payload && typeof payload === 'string') getStates(payload);
          if (state) setValue(nameState, clearState);
          if (city) setValue(nameCity, clearCity);
          onChange(key);
        }}
        placeHolder="Select country"
        rulesField={rulesCountry}
        renderOption={(item, index) => (
          <SelectOption
            key={item.name}
            value={{
              key: item.name.toLowerCase(),
              payload: item.code,
            }}
          >
            <Box className={styles.countryOption}>
              <span>{item.name}</span>
              <span
                className={styles.flag}
                style={{ backgroundPosition: `-${index * 30}px 0` }}
              ></span>
            </Box>
          </SelectOption>
        )}
      />

      <LocationSelect
        control={control}
        data={states}
        disabled={disabledState}
        errors={errors}
        isLabel={labels}
        isLoadingCities={isLoadingCities}
        isLoadingStates={isLoadingStates}
        nameField={nameState}
        label="State"
        options={states.map(({ name }) => ({
          key: name.toLowerCase(),
          value: name,
        }))}
        onSelect={(key, onChange, payload) => {
          const value = payload as { code: string; div1Code: string };
          if (value) getCities(value.code, value.div1Code);
          if (city) setValue(nameCity, clearCity);
          onChange(key);
        }}
        onScrollEnd={onScrollEndStates}
        placeHolder="Select state"
        rulesField={rulesState}
        renderOption={(item) => (
          <SelectOption
            key={item.name}
            value={{
              key: item.name.toLowerCase(),
              payload: {
                code: item.code,
                div1Code: item.div1Code,
              },
            }}
          >
            {item.name}
          </SelectOption>
        )}
      />

      <LocationSelect
        control={control}
        data={cities}
        disabled={disabledCity}
        errors={errors}
        isLabel={labels}
        isLoadingCities={isLoadingCities}
        isLoadingStates={isLoadingStates}
        nameField={nameCity}
        label="City"
        options={cities.map(({ name }) => ({
          key: name.toLowerCase(),
          value: name,
        }))}
        onSelect={(key, onChange) => onChange(key)}
        onScrollEnd={onScrollEndCities}
        placeHolder="Select city"
        rulesField={rulesCity}
        renderOption={(item) => (
          <SelectOption
            key={item.name + item.div2Code}
            value={{ key: item.name.toLowerCase() }}
          >
            {item.name}
          </SelectOption>
        )}
      />
    </>
  );
};

export const LocationSection = memo(LocationPart) as typeof LocationPart;

LocationPart.displayName = 'LocationSection';

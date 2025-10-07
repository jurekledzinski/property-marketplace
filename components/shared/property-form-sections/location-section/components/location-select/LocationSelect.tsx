import { Controller } from 'react-hook-form';
import { LocationSelectProps } from './types';
import {
  Field,
  Label,
  Loader,
  LocationFields,
  Message,
  Select,
  SelectPanel,
  SelectScrollList,
  SelectTrigger,
} from '@/components';

export const LocationSelect = <
  T extends LocationFields,
  V extends Record<string, unknown>
>({
  closeOnScroll,
  control,
  nameField,
  rulesField,
  options,
  placeHolder,
  disabled,
  errors,
  data,
  onSelect,
  isLoadingCities,
  isLoadingStates,
  renderOption,
  isLabel,
  label,
  onScrollEnd,
}: LocationSelectProps<T, V>) => {
  return (
    <Field>
      {isLabel && <Label>{label}</Label>}
      <Controller
        name={nameField}
        control={control}
        rules={rulesField}
        render={({ field: { onChange, ...rest } }) => (
          <Select
            closeOnScroll={closeOnScroll}
            onChange={(key, value) => onSelect(key, onChange, value)}
            options={options}
            {...rest}
          >
            <SelectTrigger disabled={disabled} placeholder={placeHolder}>
              {label === 'State' && disabled && isLoadingStates && (
                <Loader position="element" />
              )}
              {label === 'City' && disabled && isLoadingCities && (
                <Loader position="element" />
              )}
            </SelectTrigger>
            <SelectPanel>
              <SelectScrollList
                isLoading={
                  (label === 'State' && isLoadingStates) ||
                  (label === 'City' && isLoadingCities)
                }
                onScrollEnd={onScrollEnd}
              >
                {data.map((country, index) => renderOption(country, index))}
              </SelectScrollList>
            </SelectPanel>
          </Select>
        )}
      />
      {errors[nameField] ? (
        <Message variant="error">{errors[nameField].message}</Message>
      ) : null}
    </Field>
  );
};

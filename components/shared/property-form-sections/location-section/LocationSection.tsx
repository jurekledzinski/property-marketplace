import { Controller } from 'react-hook-form';
import { hasError } from '@/helpers';
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

export const LocationSection = ({ controls }: LocationSectionProps) => {
  const { control, formState } = controls;
  const { errors, dirtyFields } = formState;

  return (
    <>
      <Field>
        <Controller
          name={'country'}
          control={control}
          rules={{ required: { message: 'Country is requird', value: true } }}
          render={({ field: { onChange, ...rest } }) => (
            <Select
              isError={hasError('country', errors, dirtyFields.country)}
              onChange={(id) => onChange(id)}
              {...rest}
            >
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
        <Message variant="error">{errors.country?.message}</Message>
      </Field>
      <Field>
        <Controller
          name={'city'}
          control={control}
          rules={{ required: { message: 'City is requird', value: true } }}
          render={({ field: { onChange, ...rest } }) => (
            <Select
              isError={hasError('city', errors, dirtyFields.city)}
              onChange={(id) => onChange(id)}
              {...rest}
            >
              <SelectTrigger placeholder="Select city" />
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
        <Message variant="error">{errors.country?.message}</Message>
      </Field>
    </>
  );
};

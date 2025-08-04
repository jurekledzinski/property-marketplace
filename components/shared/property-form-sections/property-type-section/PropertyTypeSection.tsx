import { Controller } from 'react-hook-form';
import { PropertyTypeSectionProps } from './types';
import {
  Field,
  Select,
  SelectList,
  SelectOption,
  SelectPanel,
  SelectTrigger,
} from '@/components';

export const PropertyTypeSection = ({ controls }: PropertyTypeSectionProps) => {
  const { control } = controls;

  return (
    <>
      <Field>
        <Controller
          name={'property'}
          control={control}
          render={({ field: { onChange, ...rest } }) => (
            <Select onChange={(id) => onChange(id)} {...rest}>
              <SelectTrigger placeholder="Select type property" />
              <SelectPanel>
                <SelectList>
                  <SelectOption id="house">House</SelectOption>
                  <SelectOption id="apartment">Apartment</SelectOption>
                </SelectList>
              </SelectPanel>
            </Select>
          )}
        />
      </Field>
      <Field>
        <Controller
          name={'condition'}
          control={control}
          render={({ field: { onChange, ...rest } }) => (
            <Select onChange={(id) => onChange(id)} {...rest}>
              <SelectTrigger placeholder="Select technical condition" />
              <SelectPanel>
                <SelectList>
                  <SelectOption id="new">New</SelectOption>
                  <SelectOption id="old">Old</SelectOption>
                  <SelectOption id="renovated">Renovated</SelectOption>
                  <SelectOption id="needs renovation">
                    Needs Renovation
                  </SelectOption>
                  <SelectOption id="under construction">
                    Under Construction
                  </SelectOption>
                </SelectList>
              </SelectPanel>
            </Select>
          )}
        />
      </Field>
      <Field>
        <Controller
          name={'advertisement'}
          control={control}
          render={({ field: { onChange, ...rest } }) => (
            <Select onChange={(id) => onChange(id)} {...rest}>
              <SelectTrigger placeholder="Select type advertisement" />
              <SelectPanel>
                <SelectList>
                  <SelectOption id="sale">Sale</SelectOption>
                  <SelectOption id="rent">Rent</SelectOption>
                </SelectList>
              </SelectPanel>
            </Select>
          )}
        />
      </Field>
    </>
  );
};

'use client';
import { Controller } from 'react-hook-form';
import { PropertyTypeSectionProps } from './types';
import {
  Field,
  Message,
  Select,
  SelectList,
  SelectOption,
  SelectPanel,
  SelectTrigger,
} from '@/components';

const conditons = [
  'New',
  'Like New',
  'Renovated',
  'Good Condition',
  'Needs Renovation',
  'Under Construction',
  'Old',
  'Not Specified',
];

export const PropertyTypeSection = ({
  controls,
  rulesAdvertisment,
  rulesCondition,
  rulesProperty,
}: PropertyTypeSectionProps) => {
  const { control, formState } = controls;
  const { errors } = formState;

  return (
    <>
      <Field>
        <Controller
          name={'property'}
          rules={rulesProperty}
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
        {errors.property ? (
          <Message variant="error">{errors.property?.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Controller
          name={'condition'}
          rules={rulesCondition}
          control={control}
          render={({ field: { onChange, ...rest } }) => (
            <Select onChange={(id) => onChange(id)} {...rest}>
              <SelectTrigger placeholder="Select technical condition" />
              <SelectPanel>
                <SelectList>
                  {conditons.map((condition) => (
                    <SelectOption key={condition} id={condition.toLowerCase()}>
                      {condition}
                    </SelectOption>
                  ))}
                </SelectList>
              </SelectPanel>
            </Select>
          )}
        />
        {errors.condition ? (
          <Message variant="error">{errors.condition?.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Controller
          name={'advertisement'}
          rules={rulesAdvertisment}
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
        {errors.advertisement ? (
          <Message variant="error">{errors.advertisement?.message}</Message>
        ) : null}
      </Field>
    </>
  );
};

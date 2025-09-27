'use client';
import { Controller } from 'react-hook-form';
import { memo } from 'react';
import { PropertyTypeSectionProps } from './types';

import {
  Field,
  Label,
  Message,
  PropertyTypeFields,
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

const TypePart = <T extends PropertyTypeFields>({
  controls,
  errors,
  labels = false,
  nameCondition,
  nameStatus,
  nameType,
  rulesStatus,
  rulesCondition,
  rulesType,
}: PropertyTypeSectionProps<T>) => {
  const { control } = controls;

  return (
    <>
      <Field>
        {labels && <Label>Type</Label>}
        <Controller
          name={nameType}
          rules={rulesType}
          control={control}
          render={({ field: { onChange, ...rest } }) => (
            <Select
              closeOnScroll={true}
              onChange={(id) => onChange(id)}
              {...rest}
            >
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
        {errors.type ? (
          <Message variant="error">{errors.type.message}</Message>
        ) : null}
      </Field>
      <Field>
        {labels && <Label>Status</Label>}
        <Controller
          name={nameStatus}
          rules={rulesStatus}
          control={control}
          render={({ field: { onChange, ...rest } }) => (
            <Select
              closeOnScroll={true}
              onChange={(id) => onChange(id)}
              {...rest}
            >
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
        {errors.status ? (
          <Message variant="error">{errors.status.message}</Message>
        ) : null}
      </Field>
      <Field>
        {labels && <Label>Condition</Label>}
        <Controller
          name={nameCondition}
          rules={rulesCondition}
          control={control}
          render={({ field: { onChange, ...rest } }) => (
            <Select
              closeOnScroll={true}
              onChange={(id) => onChange(id)}
              {...rest}
            >
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
          <Message variant="error">{errors.condition.message}</Message>
        ) : null}
      </Field>
    </>
  );
};

export const PropertyTypeSection = memo(TypePart) as typeof TypePart;

TypePart.displayName = 'PropertyTypeSection';

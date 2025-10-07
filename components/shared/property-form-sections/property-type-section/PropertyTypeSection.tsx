'use client';
import { advertStatutes, advertTypes, propertyConditons } from './utils';
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
              closeOnScroll
              onChange={(id) => onChange(id)}
              options={advertTypes}
              {...rest}
            >
              <SelectTrigger placeholder="Select type property" />
              <SelectPanel>
                <SelectList>
                  {advertTypes.map((type) => (
                    <SelectOption key={type.key} value={{ key: type.key }}>
                      {type.value}
                    </SelectOption>
                  ))}
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
              closeOnScroll
              onChange={(id) => onChange(id)}
              options={advertStatutes}
              {...rest}
            >
              <SelectTrigger placeholder="Select type advertisement" />
              <SelectPanel>
                <SelectList>
                  {advertStatutes.map((status) => (
                    <SelectOption key={status.key} value={{ key: status.key }}>
                      {status.value}
                    </SelectOption>
                  ))}
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
              closeOnScroll
              onChange={(id) => onChange(id)}
              options={propertyConditons.map((condition) => ({
                key: condition.toLowerCase(),
                value: condition,
              }))}
              {...rest}
            >
              <SelectTrigger placeholder="Select technical condition" />
              <SelectPanel>
                <SelectList>
                  {propertyConditons.map((condition) => (
                    <SelectOption
                      key={condition}
                      value={{ key: condition.toLowerCase() }}
                    >
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

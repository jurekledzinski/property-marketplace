import { ArchitectureProps } from './types';
import { memo } from 'react';
import {
  Field,
  Label,
  Message,
  PropertyStylesFields,
  Radio,
  RadioGroup,
} from '@/components';

const architectureStyles = ['Modern', 'Traditional', 'Minimalist', 'Other'];

const StylePart = <T extends PropertyStylesFields>({
  controls,
  errors,
  nameStyle,
  rulesArchitecture,
}: ArchitectureProps<T>) => {
  const { register } = controls;

  return (
    <>
      <Field>
        <Label>Style</Label>
        <RadioGroup orientation="column" spacing="tight">
          {architectureStyles.map((style) => (
            <Radio
              key={style}
              {...register(nameStyle, rulesArchitecture)}
              id={style.toLowerCase()}
              value={style.toLowerCase()}
              color={'primary'}
              size={'size-xs'}
              variant={'filled'}
            >
              {style}
            </Radio>
          ))}
        </RadioGroup>
        {errors.style ? (
          <Message variant="error">{errors.style.message}</Message>
        ) : null}
      </Field>
    </>
  );
};

export const ArchitectureSection = memo(StylePart) as typeof StylePart;

StylePart.displayName = 'ArchitectureSection';

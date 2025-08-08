import { ArchitectureProps } from './types';
import { Field, Label, Message, Radio, RadioGroup } from '@/components';
import { memo } from 'react';

const architectureStyles = ['Modern', 'Traditional', 'Minimalist', 'Other'];

export const ArchitectureSection = memo(
  ({ controls, rulesArchitecture }: ArchitectureProps) => {
    const { formState, register } = controls;
    const { errors } = formState;

    return (
      <>
        <Field>
          <Label>Architectural style</Label>
          <RadioGroup orientation="column" spacing="tight">
            {architectureStyles.map((style) => (
              <Radio
                key={style}
                {...register('style', rulesArchitecture)}
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
  }
);

ArchitectureSection.displayName = 'ArchitectureSection';

import { ArchitectureProps } from './types';
import { Field, Label, Radio, RadioGroup } from '@/components';

const architectureStyles = ['Modern', 'Traditional', 'Minimalist', 'Other'];

export const ArchitectureSection = ({ controls }: ArchitectureProps) => {
  const { register } = controls;

  return (
    <>
      <Field>
        <Label>Architectural style</Label>
        <RadioGroup orientation="column" spacing="tight">
          {architectureStyles.map((style) => (
            <Radio
              key={style}
              {...register('style')}
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
      </Field>
    </>
  );
};

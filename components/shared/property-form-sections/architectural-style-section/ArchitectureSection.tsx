import { ArchitectureProps } from './types';
import { Field, Radio, RadioGroup } from '@/components';

const architectureStyles = ['Modern', 'Traditional', 'Minimalist', 'Other'];

export const ArchitectureSection = ({ controls }: ArchitectureProps) => {
  const { register } = controls;

  return (
    <>
      <Field>
        <RadioGroup orientation="column" spacing="normal">
          {architectureStyles.map((style) => (
            <Radio
              key={style}
              id={style.toLowerCase()}
              value={style.toLowerCase()}
              color={'primary'}
              size={'size-xs'}
              variant={'filled'}
              {...register('style')}
            >
              {style}
            </Radio>
          ))}
        </RadioGroup>
      </Field>
    </>
  );
};

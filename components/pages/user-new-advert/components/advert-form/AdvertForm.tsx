import { DescriptionSection } from '../description-section';
import { PersonalSection } from '../personal-section';
import { AdvertFormProps } from './types';
import { Form, FormGroup } from '@/components';

export const AdvertForm = ({ controls, onSubmit }: AdvertFormProps) => {
  return (
    <Form
      orientation="row"
      onSubmit={controls.handleSubmit(onSubmit)}
      noValidate
    >
      <FormGroup>
        <PersonalSection controls={controls} />
        <DescriptionSection controls={controls} />
      </FormGroup>
      <FormGroup>
        <div style={{ padding: '5rem', background: 'red' }}></div>
      </FormGroup>
    </Form>
  );
};

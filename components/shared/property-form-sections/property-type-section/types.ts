import { UseFormReturn } from 'react-hook-form';

type PropertyTypesInputs = {
  property: string;
  condition: string;
  advertisement: string;
};

export type PropertyTypeSectionProps = {
  controls: UseFormReturn<PropertyTypesInputs, unknown, PropertyTypesInputs>;
};

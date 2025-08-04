import { UseFormReturn } from 'react-hook-form';

type ArchitectureInputs = {
  style: string;
};

export type ArchitectureProps = {
  controls: UseFormReturn<ArchitectureInputs, unknown, ArchitectureInputs>;
};

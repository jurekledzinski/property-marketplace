import { GroupInputProps } from './types';

export const getInputProps: GroupInputProps = (params) => {
  const { as, type, isError, size, variant } = params;

  if (as === 'input') return { as, type, isError, size, variant };
  else return { as, cols: 4, rows: 6, isError, size, variant };
};

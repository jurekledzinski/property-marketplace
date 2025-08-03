import { SelectListProps } from './types';
import { useAriaAttributes } from '@/hooks';

export const SelectList = ({ children }: SelectListProps) => {
  const a11y = useAriaAttributes().selectListA11y();

  return <div {...a11y}>{children}</div>;
};

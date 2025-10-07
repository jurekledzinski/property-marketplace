import stylesSelectOption from '../Select.module.css';
import { generateClassNames } from '@/utils-client';
import { Size } from '@/types';

export const selectOptionClassNames = (
  id: string,
  value?: string,
  size?: Size
) => ({
  selectOption: generateClassNames(stylesSelectOption, {
    active: value === id,
    ['select-option']: true,
    [`${size}`]: Boolean(size),
  }),
});

import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Border =
  | 'border-xs'
  | 'border-sm'
  | 'border-md'
  | 'border-lg'
  | 'border-xl';

export type Radius =
  | 'radius-xs'
  | 'radius-sm'
  | 'radius-md'
  | 'radius-lg'
  | 'radius-xl';

export type Size = 'size-xs' | 'size-sm' | 'size-md' | 'size-lg';

export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'negative'
  | 'warning';

export type Variant = 'contained' | 'outlined' | 'text';
export type InputVariant = 'basic' | 'contained' | 'outlined' | 'underline';

export type Icons = IconProp[];
export type Icon = IconProp;

export type Orientation = 'row' | 'column';

export type Spacing = 'none' | 'tight' | 'normal' | 'loose' | 'extra-loose';

export type Margin = 4 | 8 | 12 | 16 | 20 | 24;

export type Justify =
  | 'justify-end'
  | 'justify-start'
  | 'justify-center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export type Aligment =
  | 'aligment-center'
  | 'aligment-end'
  | 'aligment-start'
  | 'stretch';

export type PaddingToken =
  | 'p-initial'
  | 'p-xxs'
  | 'p-xs'
  | 'p-sm'
  | 'p-md'
  | 'p-lg'
  | number;

export type MarginToken =
  | 'm-center'
  | 'm-initial'
  | 'm-xxs'
  | 'm-xs'
  | 'm-sm'
  | 'm-md'
  | 'm-lg'
  | number;

export type MaxWidthToken = 'max-sm' | 'max-md' | 'max-lg' | 'max-xl' | number;

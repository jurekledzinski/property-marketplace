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

export type PaddingTopToken =
  | 'pt-initial'
  | 'pt-xxs'
  | 'pt-xs'
  | 'pt-sm'
  | 'pt-md'
  | 'pt-lg'
  | number;

export type PaddingBottomToken =
  | 'pb-initial'
  | 'pb-xxs'
  | 'pb-xs'
  | 'pb-sm'
  | 'pb-md'
  | 'pb-lg'
  | number;

export type PaddingRightToken =
  | 'pr-initial'
  | 'pr-xxs'
  | 'pr-xs'
  | 'pr-sm'
  | 'pr-md'
  | 'pr-lg'
  | number;

export type PaddingLeftToken =
  | 'pl-initial'
  | 'pl-xxs'
  | 'pl-xs'
  | 'pl-sm'
  | 'pl-md'
  | 'pl-lg'
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

export type MarginTopToken =
  | 'mt-initial'
  | 'mt-xxs'
  | 'mt-xs'
  | 'mt-sm'
  | 'mt-md'
  | 'mt-lg'
  | number;

export type MarginBottomToken =
  | 'mb-initial'
  | 'mb-xxs'
  | 'mb-xs'
  | 'mb-sm'
  | 'mb-md'
  | 'mb-lg'
  | number;

export type MarginRightToken =
  | 'mr-initial'
  | 'mr-xxs'
  | 'mr-xs'
  | 'mr-sm'
  | 'mr-md'
  | 'mr-lg'
  | number;

export type MarginLeftToken =
  | 'ml-initial'
  | 'ml-xxs'
  | 'ml-xs'
  | 'ml-sm'
  | 'ml-md'
  | 'ml-lg'
  | number;

export type MaxWidthToken = 'mw-sm' | 'mw-md' | 'mw-lg' | 'mw-xl' | number;

export type SpacingToken = {
  mt?: MarginTopToken;
  mb?: MarginBottomToken;
  mr?: MarginRightToken;
  ml?: MarginLeftToken;
  m?: MarginToken;
  p?: PaddingToken;
  pt?: PaddingTopToken;
  pb?: PaddingBottomToken;
  pr?: PaddingRightToken;
  pl?: PaddingLeftToken;
};

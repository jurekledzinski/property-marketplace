import { CSSProperties } from 'react';
import { SpacingToken } from '@/types';

type Params = SpacingToken;

export type SpacingStyles = (params: Params) => CSSProperties;

export const spacingClasses = (params: Params) => {
  const { m, mb, mt, ml, mr, p, pb, pl, pr, pt, maxWidth } = params;

  return {
    ...(Boolean(m) ? { [`${m}`]: true } : {}),
    ...(Boolean(mb) ? { [`${mb}`]: true } : {}),
    ...(Boolean(ml) ? { [`${ml}`]: true } : {}),
    ...(Boolean(mr) ? { [`${mr}`]: true } : {}),
    ...(Boolean(mt) ? { [`${mt}`]: true } : {}),
    ...(Boolean(maxWidth) ? { [`${maxWidth}`]: true } : {}),
    ...(Boolean(p) ? { [`${p}`]: true } : {}),
    ...(Boolean(pb) ? { [`${pb}`]: true } : {}),
    ...(Boolean(pl) ? { [`${pl}`]: true } : {}),
    ...(Boolean(pr) ? { [`${pr}`]: true } : {}),
    ...(Boolean(pt) ? { [`${pt}`]: true } : {}),
  };
};

export const spacingInlineStyles: SpacingStyles = (params) => ({
  ...(typeof params.m === 'number' ? { margin: params.m } : {}),
  ...(typeof params.mb === 'number' ? { marginBottom: params.mb } : {}),
  ...(typeof params.ml === 'number' ? { marginLeft: params.ml } : {}),
  ...(typeof params.mr === 'number' ? { marginRight: params.mr } : {}),
  ...(typeof params.mt === 'number' ? { marginTop: params.mt } : {}),
  ...(typeof params.p === 'number' ? { padding: params.p } : {}),
  ...(typeof params.pb === 'number' ? { paddingBottom: params.pb } : {}),
  ...(typeof params.pl === 'number' ? { paddingLeft: params.pl } : {}),
  ...(typeof params.pr === 'number' ? { paddingRight: params.pr } : {}),
  ...(typeof params.pt === 'number' ? { paddingTop: params.pt } : {}),
  ...(typeof params.maxWidth === 'number' ? { maxWidth: params.maxWidth } : {}),
});

export const spacingValues: Array<keyof Params> = [
  'm',
  'mb',
  'mt',
  'ml',
  'mr',
  'p',
  'pb',
  'pl',
  'pr',
  'pt',
  'maxWidth',
];

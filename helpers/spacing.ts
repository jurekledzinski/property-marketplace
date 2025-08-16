import { CSSProperties } from 'react';
import {
  MarginBottomToken,
  MarginLeftToken,
  MarginRightToken,
  MarginToken,
  MarginTopToken,
  PaddingBottomToken,
  PaddingLeftToken,
  PaddingRightToken,
  PaddingToken,
  PaddingTopToken,
} from '../types';

type Params = {
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

export type SpacingStyles = (params: Params) => CSSProperties;

export const spacingClasses = (params: Params) => {
  const { m, mb, mt, ml, mr, p, pb, pl, pr, pt } = params;

  return {
    [`${m}`]: typeof m === 'string' ? Boolean(m) : false,
    [`${mb}`]: typeof m === 'string' ? Boolean(mb) : false,
    [`${ml}`]: typeof m === 'string' ? Boolean(ml) : false,
    [`${mr}`]: typeof m === 'string' ? Boolean(mr) : false,
    [`${mt}`]: typeof m === 'string' ? Boolean(mt) : false,
    [`${p}`]: typeof m === 'string' ? Boolean(p) : false,
    [`${pb}`]: typeof m === 'string' ? Boolean(pb) : false,
    [`${pl}`]: typeof m === 'string' ? Boolean(pl) : false,
    [`${pr}`]: typeof m === 'string' ? Boolean(pr) : false,
    [`${pt}`]: typeof m === 'string' ? Boolean(pt) : false,
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
];

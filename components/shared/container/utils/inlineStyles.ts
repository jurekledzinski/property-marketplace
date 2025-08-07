import { GetInlineContainerStyles } from './types';

export const getInlineContainerStyles: GetInlineContainerStyles = (params) => ({
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

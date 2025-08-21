import { UseChartBgFormatProps } from './types';
import { useMemo } from 'react';

export const useChartBgFormat = ({ bgColors, mode }: UseChartBgFormatProps) => {
  return useMemo(
    () =>
      mode === 'light'
        ? bgColors
        : bgColors.map((c) => c.replace('0.4', '0.8')),
    [bgColors, mode]
  );
};

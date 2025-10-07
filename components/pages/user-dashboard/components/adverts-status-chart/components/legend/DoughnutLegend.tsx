import styles from './DoughnutLegend.module.css';
import { Checkbox, CheckboxGroup } from '@/components';
import { DoughnutLegendProps } from './types';
import { getColorLegend } from '../../utils';

export const DoughnutLegend = ({
  stylesLegend,
  toggleLegend,
}: DoughnutLegendProps) => {
  return (
    <CheckboxGroup orientation="column" spacing="tight">
      {stylesLegend.map(({ hidden, index, text }, idx) => {
        return (
          <Checkbox
            key={text}
            checked={!hidden}
            classNameLabel={styles.label}
            color={getColorLegend(text)}
            id={text.toLowerCase()}
            onChange={() => toggleLegend(index || idx)}
            size="size-xs"
            value={text.toLowerCase()}
          >
            {text}
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
};

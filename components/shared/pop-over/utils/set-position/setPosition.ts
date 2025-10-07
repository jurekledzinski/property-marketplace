import { setBottom, setLeft, setRight, setTop } from '../set-direction';
import { SetPositionParams } from './types';

export const setPosition = ({
  currentPlacement,
  panelPosition,
  triggerPosition,
  autoWidth,
  panelWidth,
  panelHeight,
  panelStyle,
}: SetPositionParams) => {
  const alignment = currentPlacement?.split(' ')[1];
  const mainDirection = currentPlacement?.split(' ')[0];

  switch (mainDirection) {
    case 'top':
      return setTop({
        alignment,
        autoWidth,
        panelPosition,
        triggerPosition,
        panelWidth,
        panelHeight,
      });

    case 'bottom': {
      return setBottom({
        alignment,
        autoWidth,
        panelPosition,
        triggerPosition,
        panelWidth,
        panelHeight,
      });
    }

    case 'left': {
      return setLeft({
        alignment,
        autoWidth,
        panelPosition,
        triggerPosition,
        panelWidth,
        panelHeight,
        panelStyle,
      });
    }

    case 'right': {
      return setRight({
        alignment,
        autoWidth,
        panelPosition,
        triggerPosition,
        panelWidth,
        panelHeight,
        panelStyle,
      });
    }

    default:
      return setBottom({
        alignment,
        autoWidth,
        panelPosition,
        triggerPosition,
        panelWidth,
        panelHeight,
      });
  }
};

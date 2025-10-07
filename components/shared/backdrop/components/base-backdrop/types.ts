import { BackdropProps } from '../../types';
import { RefObject } from 'react';

type OmitKeys = 'portal' | 'zIndex';

export interface BaseBackdropProps extends Omit<BackdropProps, OmitKeys> {
  ref: RefObject<null>;
}

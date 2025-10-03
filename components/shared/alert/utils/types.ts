import { AlertProps } from '../types';

type Params = Omit<AlertProps, 'icon' | 'message'>;

export type GetClassNamesAlert = (props: Params) => {
  alert: string;
  icon: string;
  iconClose: string;
  message: string;
};

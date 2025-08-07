import { InputWrapperProps } from '../components';

type OmitUnion =
  | 'children'
  | 'statusVisible'
  | 'onClickEndIcon'
  | 'onClickStartIcon';

type PickUnion = 'isError' | 'size' | 'variant' | 'disabled';

export interface BaseParmas extends Omit<InputWrapperProps, OmitUnion> {
  className?: string;
}

export type GetClassNamesInputWrapper = (params: BaseParmas) => {
  inputWrapper: string;
  startIcon: string;
  endIcon: string;
  statusIcon: string;
};

export type GetClassNamesInput = (params: Pick<BaseParmas, PickUnion>) => {
  fieldset: string;
  input: string;
  legend: string;
  textarea: string;
};

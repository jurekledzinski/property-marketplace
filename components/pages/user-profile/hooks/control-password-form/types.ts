export type InputsPassword = {
  confirm: string;
  password: string;
};

export type UsePasswordFormProps = {
  isPending: boolean;
  isSuccess?: boolean;
  onSubmitForm: (payload: FormData) => void;
  onFailed?: () => void;
  onSuccess?: () => void;
};

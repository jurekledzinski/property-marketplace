export type InputsLogin = {
  email: string;
  password: string;
};

export type UseLoginFormProps = {
  isPending: boolean;
  onSubmitForm: (payload: FormData) => void;
  isSuccess?: boolean;
  onFailed?: () => void;
  onSuccess?: () => void;
};

export type InputsLogin = {
  email: string;
  password: string;
};

export type UseLoginFormProps = {
  onSubmitForm: (payload: FormData) => void;
  isPending: boolean;
  isSuccess?: boolean;
  onSuccess?: () => void;
};

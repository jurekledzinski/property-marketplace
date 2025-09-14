export type InputsRegister = {
  confirm: string;
  email: string;
  name: string;
  password: string;
};

export type UseRegisterFormProps = {
  isPending: boolean;
  onSubmitForm: (payload: FormData) => void;
  isSuccess?: boolean;
  onSuccess?: () => void;
};

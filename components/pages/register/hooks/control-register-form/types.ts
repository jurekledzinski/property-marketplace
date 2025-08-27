export type InputsRegister = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};

export type UseRegisterFormProps = {
  onSubmitForm: (payload: FormData) => void;
  isPending: boolean;
  isSuccess: boolean;
  onSuccess?: () => void;
};

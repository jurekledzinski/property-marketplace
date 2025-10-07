import { Message } from '@/models';

export type InputsContact = Omit<Message, 'createdAt' | 'userId'>;

export type useContactFormProps = {
  isPending: boolean;
  onSubmitForm: (payload: FormData) => void;
  userId: string;
  isSuccess?: boolean;
  onFailed?: () => void;
  onSuccess?: () => void;
};

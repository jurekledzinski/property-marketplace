import { Advert } from '@/models';

type OmitKeys =
  | 'price'
  | 'year'
  | 'area'
  | 'rooms'
  | 'bathrooms'
  | 'images'
  | 'deleteImages';

export type InputsAvert = Omit<Advert, OmitKeys> & {
  id?: string;
  price: string;
  year: string;
  area: string;
  rooms: string;
  bathrooms: string;
  images: { fileId: string; name: string; url: string; isOriginal?: boolean }[];
  deleteImages?: { fileId: string; name: string; isOriginal?: boolean }[];
};

export type UseAdvertFormProps = {
  isPending: boolean;
  isSuccess: boolean;
  mode: 'edit' | 'new';
  onSubmitForm: (payload: FormData) => void;
  userId: string;
  advert?: InputsAvert | null;
  onSuccess?: () => void;
};

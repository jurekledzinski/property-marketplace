import { Advert } from '@/models';

type OmitKeys = 'price' | 'year' | 'area' | 'rooms' | 'bathrooms' | 'images';

export type InputsAvert = Omit<Advert, OmitKeys> & {
  price: string;
  year: string;
  area: string;
  rooms: string;
  bathrooms: string;
  images: { fileId: string; name: string; url: string }[];
};

export type UseAdvertFormProps = {
  advert?: InputsAvert | null;
  userId: string;
  onSubmitForm: (payload: FormData) => void;
  isPending: boolean;
  isSuccess: boolean;
};

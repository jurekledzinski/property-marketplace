import { Advert } from '@/models';
import { DraftPayload } from '../draft-images';

type OmitKeys =
  | 'area'
  | 'bathrooms'
  | 'deleteImages'
  | 'images'
  | 'price'
  | 'rooms'
  | 'year';

type ExtendedImage = {
  fileId: string;
  name: string;
  url: string;
  isOriginal?: boolean;
};

export type InputsAvert = Omit<Advert, OmitKeys> & {
  id?: string;
  price: string;
  year: string;
  area: string;
  rooms: string;
  bathrooms: string;
  images: ExtendedImage[];
};

export type UseAdvertFormProps = {
  draft: DraftPayload;
  isPending: boolean;
  mode: 'edit' | 'new';
  onSubmitForm: (payload: FormData) => void;
  advert?: InputsAvert | null;
  isSuccess?: boolean;
  onFailed?: () => void;
  onSuccess?: () => void;
};

export type DeleteImages = DraftPayload['deleteImages'];

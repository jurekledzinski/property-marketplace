import { DraftFile } from '@/models';

export type DeleteImagesImagekitParams = {
  images: DraftFile['images'];
  checkIsOriginal: boolean;
  userId: string;
  advertId?: string | null;
};

export type DataNewAdvert = {
  [k: string]: FormDataEntryValue;
};

export type DataEditAdvert = DataNewAdvert;

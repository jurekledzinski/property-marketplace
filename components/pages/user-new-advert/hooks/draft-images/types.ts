import { DraftFile } from '@/models';

export type DraftPayload = {
  advertId: string;
  images: DraftFile['images'];
  deleteImages: DraftFile['deleteImages'];
};

export type useDraftsImagesProps = {
  advertId?: string;
  mode: 'edit' | 'new';
};

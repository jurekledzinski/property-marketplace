import { DraftFile } from '@/models';

export type DraftPayload = {
  advertId: string;
  deleteImages: DraftFile['deleteImages'];
  images: DraftFile['images'];
};

export type useDraftsImagesProps = {
  mode: 'edit' | 'new';
  advertId?: string;
};

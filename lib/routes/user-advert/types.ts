import { DraftFile } from '@/models';

export type GETDraftSearchParams = {
  id: string | null;
  mode: 'edit' | 'new';
};

export type GETDraftContext = {
  advertId: string | null;
  mode: 'edit' | 'new';
  userId: string;
  deleteImages?: DraftFile['deleteImages'];
  images?: DraftFile['images'];
  initialImages?: DraftFile['images'];
};

export type PATCHDraftSearchParams = {
  id: string | null;
};

export type PATCHDraftContext = {
  advertId: string | null;
  userId: string;
  deleteImages?: DraftFile['deleteImages'];
  images?: DraftFile['images'];
};

export type DELETEBodyDraft = Pick<DraftFile, 'deleteImages' | 'images'>;
export type PATCHBodyDraft = DELETEBodyDraft;

export type DELETEDraftSearchParams = PATCHDraftSearchParams;

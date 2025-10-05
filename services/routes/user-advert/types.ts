import { DraftFile } from '@/models';

export type GetUserAdvertSearchParams = {
  id: string | null;
};

export type GetDraftSearchParams = {
  id: string | null;
  mode: 'edit' | 'new';
};

export type GetDraftContext = {
  advertId: string | null;
  mode: 'edit' | 'new';
  userId: string;
  deleteImages?: DraftFile['deleteImages'];
  images?: DraftFile['images'];
  initialImages?: DraftFile['images'];
};

export type PatchDraftSearchParams = {
  id: string | null;
};

export type PatchDraftContext = {
  advertId: string | null;
  userId: string;
  deleteImages?: DraftFile['deleteImages'];
  images?: DraftFile['images'];
};

export type DeleteBodyDraft = Pick<DraftFile, 'deleteImages' | 'images'>;
export type PatchBodyDraft = DeleteBodyDraft;

export type DeleteDraftSearchParams = PatchDraftSearchParams;

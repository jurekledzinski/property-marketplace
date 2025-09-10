import { DeleteImages, InputsAvert } from '../control-advert-form';
import { DraftPayload } from '../draft-images';

export type UseAdvertInitialValuesProps = {
  advert?: InputsAvert | null;
  draft: DraftPayload;
  userId: string;
  onSetDeleteImages: (data: DeleteImages) => void;
};

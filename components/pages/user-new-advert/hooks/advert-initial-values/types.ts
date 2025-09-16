import { DeleteImages, InputsAvert } from '../control-advert-form';
import { DraftPayload } from '../draft-images';

export type UseAdvertInitialValuesProps = {
  advert?: InputsAvert | null;
  draft: DraftPayload;
  onSetDeleteImages: (data: DeleteImages) => void;
};

import { DeleteImages, InputsAvert } from '../control-advert-form';
import { DraftPayload } from '../draft-images';

export type UseAdvertInitialValuesProps = {
  draft: DraftPayload;
  onSetDeleteImages: (data: DeleteImages) => void;
  advert?: InputsAvert | null;
};

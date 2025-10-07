import { Countries } from '@/services';
import { CountryState } from '@/hooks';
import { InputsAvert } from '../../hooks';
import { OnError } from '@/components';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type AdvertFormProps = {
  cities: CountryState[];
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  countries: Countries;
  deleteUploadedFiles: (
    index: number,
    file:
      | { fileId: string; name: string; url: string; isOriginal?: boolean }
      | File
  ) => void;
  getCities: (code: string, division1Code?: string) => void;
  getStates: (code: string) => void;
  isLoadingCities: boolean;
  isLoadingStates: boolean;
  isSuccessCities: boolean;
  isSuccessStates: boolean;
  onScrollEndCities: () => void;
  onScrollEndStates: () => void;
  onSubmit: SubmitHandler<InputsAvert>;
  states: CountryState[];
  uploadFiles: (files: File[]) => Promise<void>;
  validationInfo: OnError;
  closeOnScroll?: boolean;
  isPending?: boolean;
  isUploadPending?: boolean;
};

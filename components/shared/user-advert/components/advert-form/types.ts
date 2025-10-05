import { Countries } from '@/services';
import { CountryState } from '@/hooks';
import { InputsAvert } from '../../hooks';
import { OnError } from '@/components';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type AdvertFormProps = {
  countries: Countries;
  cities: CountryState[];
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  getCities: (code: string, division1Code?: string) => void;
  isLoadingStates: boolean;
  getStates: (code: string) => void;
  isSuccessCities: boolean;
  isLoadingCities: boolean;
  isSuccessStates: boolean;
  states: CountryState[];
  deleteUploadedFiles: (
    index: number,
    file:
      | { fileId: string; name: string; url: string; isOriginal?: boolean }
      | File
  ) => void;
  onScrollEndCities: () => void;
  onScrollEndStates: () => void;
  onSubmit: SubmitHandler<InputsAvert>;
  uploadFiles: (files: File[]) => Promise<void>;
  validationInfo: OnError;
  isPending?: boolean;
  isUploadPending?: boolean;
};

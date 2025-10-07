import { Countries } from '@/services';
import { InputsAvert } from '@/components';

export type UserEditAdvertProps = {
  advert: InputsAvert | null;
  countries: Countries;
};

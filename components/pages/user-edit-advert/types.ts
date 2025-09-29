import { Countries } from '@/lib';
import { InputsAvert } from '../user-new-advert';

export type UserEditAdvertProps = {
  advert: InputsAvert | null;
  countries: Countries;
};

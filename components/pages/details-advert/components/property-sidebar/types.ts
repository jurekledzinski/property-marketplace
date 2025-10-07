import { Advert } from '@/models';
import { InputsContact } from '@/components';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type PropertySidebarProps = {
  advertiser: Advert['advertiser'];
  controls: UseFormReturn<InputsContact, unknown, InputsContact>;
  email: Advert['email'];
  isPending: boolean;
  onSubmit: SubmitHandler<InputsContact>;
  phone: Advert['phone'];
};
